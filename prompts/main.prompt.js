const inquirer = require("inquirer");
const dockerPrompt = require("./docker.prompt");
const vaultPrompt = require("./vault.prompt");
const stateService = require("../services/state.service");

const mainPrompt = [{
  type: "rawlist",
  name: "action",
  message: "Main Menu",
  choices: [
    "Docker",
    "Vault",
    "Quit"
  ],
  pageSize: 12
}];

exports.run = async () => {
  const answer = await inquirer.prompt(mainPrompt);

  switch(answer.action) {
    case "Docker": {
      stateService.next(dockerPrompt);
      break;
    }
   case "Vault": {
      stateService.next(vaultPrompt);
      break;
    }
    case "Quit": {
      stateService.complete();
      break;
    }
  }
};