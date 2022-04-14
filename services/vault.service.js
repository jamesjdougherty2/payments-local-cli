const tryShell = require("./try-shell");
const newline = require("./newline.service");

module.exports = {
  login: async () => {
    newline();
    await tryShell("safe auth ldap");
  },

  tree: async () => {
    newline();
    await tryShell("safe tree concourse/payments");
  },

  getSecret: async (key) => {
    newline();
    await tryShell(`safe get concourse/payments/${key}`);
  },

  setSecret: async (key) => {
    newline();
    await tryShell(`safe set concourse/payments/${key} value`);
  },

  deleteSecret: async (key) => {
    newline();
    await tryShell(`safe delete concourse/payments/${key}`);
  }
};
