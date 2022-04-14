const tryShell = require("../services/try-shell");

exports.cleanAndMigrate = async () => {
  await tryShell('cd ../price-management && ./gradlew flywayClean flywayMigrate');
}
