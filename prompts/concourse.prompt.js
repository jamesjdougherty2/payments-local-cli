const inquirer = require("inquirer");
const stateService = require("../services/state.service");
const concourseService = require("../services/concourse.service");
const config = require("../resources/config");

const concoursePrompt = [{
  type: "rawlist",
  name: "action",
  message: "Concourse",
  choices: [
    "Login",
    "Set Pipeline",
    "Back"
  ]
}];

const pipelinePrompt = [{
  type: "rawlist",
  name: "repo",
  message: "Which pipeline?",
  choices: [...config.repos],
  pageSize: 16
}];

exports.run = async () => {
  const answer = await inquirer.prompt(concoursePrompt);

  switch(answer.action) {
    case "Login": {
        await concourseService.login();
        break;
    }
    case "Set Pipeline": {
      const answer = await inquirer.prompt(pipelinePrompt);
      const repo = config.repos.find(r => r.name === answer.repo);

      await concourseService.setPipeline(repo);

      break;
    }
    case "Back": {
      stateService.complete();
      break;
    }
  }
};
