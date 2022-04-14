const shell = require("exec-sh").promise;
const pressAnyKey = require("press-any-key");
const newline = require("../services/newline.service");

module.exports = async (command, pressAnyKeyToContinue = true) => {
  try {
    await shell(command);
  }
  catch(e) {
    console.log(`\n😿  ${e}`);
  }
  finally {
    if (pressAnyKeyToContinue) {
      newline();
      await pressAnyKey();
    }
  }
};