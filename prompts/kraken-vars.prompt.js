const inquirer = require("inquirer");
const krakenVarsService = require("../services/kraken-vars.service");
const stateServce = require("../services/state.service");

const flywayPrompt = [{
  type: "rawlist",
  name: "action",
  message: "Kraken Vars",
  choices: [
    "Refresh",
    "Back"
  ]
}];

exports.run = async () => {
  const answer = await inquirer.prompt(flywayPrompt);

  switch(answer.action) {
    case "Refresh": {
      await krakenVarsService.refresh();
      break;
    }
    case "Back": {
      stateServce.complete();
      break;
    }
  }
};
