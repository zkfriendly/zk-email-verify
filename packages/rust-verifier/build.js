const { spawn } = require("child_process");

const build = spawn("cargo", ["build", "--release"], { stdio: "inherit" });

build.on("error", (error) => {
  console.error(`Failed to start cargo build: ${error}`);
  process.exit(1);
});

build.on("close", (code) => {
  if (code !== 0) {
    console.error(`cargo build exited with code ${code}`);
    process.exit(code);
  }
});
