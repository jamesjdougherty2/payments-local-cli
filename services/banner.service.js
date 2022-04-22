const chalk = require("chalk");
const figlet = require("figlet");
const clear = require("clear");

exports.draw = () => {
  clear();

  console.log(
    chalk.magentaBright(
      figlet.textSync("Unleash the DEVELOPER")
    )
  );
};
