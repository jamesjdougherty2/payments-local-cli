const mainPrompt = require("./prompts/main.prompt");
const bannerService = require("./services/banner.service");
const stateService = require("./services/state.service");

 (async function paymentsLocalCli() {
  stateService.next(mainPrompt);

  while (stateService.hasStuffToDo()) {
    bannerService.draw();
    await stateService.currentState().run();
  }

  console.log("\n🐙  See ya later!\n")
})();
