const inquirer = require("inquirer");
const stateService = require("../services/state.service");
const vaultService = require("../services/vault.service");

const vaultPrompt = [{
  type: "rawlist",
  name: "action",
  message: "Vault",
  choices: [
    "Login",
    "Tree",
    "Get Secret",
    "Back"
  ]
}];

const secretKeyPrompt = [{
  type: "input",
  name: "key",
  message: "Enter secret key:"
}];

const confirmDeletePrompt = [{
  type: "confirm",
  name: "delete",
  message: "Are you sure?",
  default: false
}]

exports.run = async () => {
  const answer = await inquirer.prompt(vaultPrompt);

  switch(answer.action) {
    case "Login": {
      await vaultService.login()
      break;
    }
    case "Tree": {
      await vaultService.tree();
      break;
    }
    case "Get Secret": {
      const answer = await inquirer.prompt(secretKeyPrompt);
      await vaultService.getSecret(answer.key);
      break;
    }
    case "Back": {
      stateService.complete();
      break;
    }
  }
};
