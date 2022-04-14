const inquirer = require("inquirer");
const vaultPrompt = require("./vault.prompt");
const concoursePrompt = require("./concourse.prompt");
const dockerPrompt = require("./docker.prompt");
const flywayPrompt = require("./flyway.prompt");
const stateService = require("../services/state.service");
const krakenVars = require("./kraken-vars.prompt");

const mainPrompt = [{
  type: "rawlist",
  name: "action",
  message: "Main Menu",
  choices: [
    "Concourse",
    "Docker",
    "Flyway",
    "Kraken Vars",
    "Vault",
    "Quit"
  ],
  pageSize: 12
}];

exports.run = async () => {
  const answer = await inquirer.prompt(mainPrompt);

  switch(answer.action) {
    case "Concourse": {
      stateService.next(concoursePrompt);
      break;
    }
    case "Docker": {
      stateService.next(dockerPrompt);
      break;
    }
    case "Flyway": {
      stateService.next(flywayPrompt);
      break;
    }
    case "Kraken Vars": {
      stateService.next(krakenVars);
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