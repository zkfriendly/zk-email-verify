const { spawn } = require("child_process");
const path = require("path");

function run() {
  const binaryPath = path.join(__dirname, "target", "release", "rust-verifier");
  const child = spawn(binaryPath, process.argv.slice(2), { stdio: "inherit" });

  child.on("error", (error) => {
    console.error(`Failed to start rust-verifier: ${error}`);
    process.exit(1);
  });

  child.on("close", (code) => {
    process.exit(code);
  });
}

module.exports = { run };
