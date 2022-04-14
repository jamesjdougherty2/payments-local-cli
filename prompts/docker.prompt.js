const inquirer = require("inquirer");
const stateService = require("../services/state.service");
const dockerService = require("../services/docker.service");
const config = require("../resources/config");

const dockerPrompt = [{
  type: "rawlist",
  name: "action",
  message: "Docker",
  choices: [
    "Refresh",
    "Logs",
    "Restart Container",
    "Start Containers",
    "Stop Containers",
    "Back"
  ]
}];

const confirmBuildPrompt = [{
  type: "confirm",
  name: "build",
  message: "Build projects?",
  default: true
}];

const logsPrompt = [{
  type: "rawlist",
  name: "container",
  message: "Which container?",
  choices: ["All"].concat(config.repos),
  pageSize: 16
}];

const restartPrompt = [{
  type: "rawlist",
  name: "container",
  message: "Which container?",
  choices: [
    ...config.repos,
    "Back"
  ],
  pageSize: 16
}];

exports.run = async () => {
  await dockerService.displayProcesses();

  const answer = await inquirer.prompt(dockerPrompt);

  switch(answer.action) {
    case "Refresh": {
      inquirer.prompt(dockerPrompt);
      break;
    }

    case "Restart Container": {
      const answer = await inquirer.prompt(restartPrompt);

      if (answer.container == "Back") {
        // Do nothing
      }
      else {
        await dockerService.restartContainer(answer.container);
      }

      break;
    }
    case "Start Containers": {
      const confirm = await inquirer.prompt(confirmBuildPrompt);
      await dockerService.startContainers(confirm.build);
      break;
    }
    case "Stop Containers": {
      await dockerService.stopContainers();
      break;
    }
    case "Logs": {
      const answer = await inquirer.prompt(logsPrompt);
      answer.container = answer.container == "All" ? "" : answer.container;
      await dockerService.logs(answer.container);
      break;
    }
    case "Back": {
      stateService.complete();
      break;
    }
  }
};
