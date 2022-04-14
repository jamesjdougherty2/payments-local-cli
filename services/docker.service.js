const tryShell = require("../services/try-shell");
const newline = require("../services/newline.service");

module.exports = {
  restartContainer: async (container) => {
    await tryShell(`cd docker && ./clean-bootJar-and-restart-container.sh ${container}`)
  },

  startContainers: async (build) => {
    await tryShell(`cd docker && ./start.sh ${build}`)
  },

  stopContainers: async () => {
    console.log("\n🛑  Stopping containers...\n")
    await tryShell("cd docker && docker-compose down")
  },

  displayProcesses: async () => {
    console.log("Docker Process Status\n");
    await tryShell("cd docker && docker-compose ps", false);
    newline();
  },

  logs: async (container) => {
    const path = `${process.cwd()}/docker`;
    await tryShell(`cd docker && ./logs.sh ${path} ${container}`, false);
  }
};
