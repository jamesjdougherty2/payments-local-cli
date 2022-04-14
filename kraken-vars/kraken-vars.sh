#!/bin/bash

GREEN='\033[0;32m'
NC='\033[0m'
CHECK_MARK="${GREEN}✔${NC}"

printf '\n🐙 Release the Kraken!!!\n\n'

rm -f ~/.kraken-vars

printf '#!/bin/bash\n\n' >> ~/.kraken-vars
printf '# Do not modify this file, changes will be overwritten by the kraken-vars script.\n\n' >> ~/.kraken-vars

printf '🚜 Pulling kraken-vars from Vault:\n'

for row in $(jq -r '.[] | @base64' kraken-vars.json); do
  _jq() {
    echo ${row} | base64 --decode | jq -r ${1}
  }

  key=$(_jq '.key')
  value=$(safe get $(_jq '.vaultPath'))

  printf '     - %s' $key
  echo export $key="'$value'" >> ~/.kraken-vars
  printf " $CHECK_MARK\n"
done

if grep -q -s "source ~/.kraken-vars" ~/.bash_profile; then
  printf '\n💥 kraken-vars already sourced in .bash_profile\n\n'
else
  printf '\n📝 Adding source for kraken-vars to .bash_profile\n\n'

  printf '\n# Environment variables for the pricing team\n' >> ~/.bash_profile
  echo 'source ~/.kraken-vars' >> ~/.bash_profile
fi

printf '🏁 Restart session or source .bash_profile to load variables\n'