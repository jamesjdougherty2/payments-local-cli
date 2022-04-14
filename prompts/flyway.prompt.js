const inquirer = require("inquirer");
const flywayService = require("../services/flyway.service");
const stateServce = require("../services/state.service");

const flywayPrompt = [{
  type: "rawlist",
  name: "action",
  message: "Flyway",
  choices: [
    "Clean and Migrate",
    "Back"
  ]
}];

exports.run = async () => {
  const answer = await inquirer.prompt(flywayPrompt);

  switch(answer.action) {
    case "Clean and Migrate": {
      await flywayService.cleanAndMigrate();
      break;
    }
    case "Back": {
      stateServce.complete();
      break;
    }
  }
};
