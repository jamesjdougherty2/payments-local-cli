const tryShell = require("../services/try-shell");
const newline = require("../services/newline.service");

module.exports = {
  login: async () => {
    newline();
    await tryShell("fly login -t pricing -c https://ci.tools.dcsg.com -k -n pricing");
  },

  setPipeline: async (repo) => {
    newline();
    await tryShell(`../${repo.name}/ci/set-pipeline.sh`);
  }
}