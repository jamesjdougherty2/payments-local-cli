const tryShell = require("../services/try-shell");

exports.refresh = async () => {
  await tryShell('cd kraken-vars && ./kraken-vars.sh');
};
