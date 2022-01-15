const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath); // deleting the folder and all the content inside it

const campaignPath = path.resolve(__dirname, "Contracts", "Campaigns.sol");
const source = fs.readFileSync(campaignPath, "utf8");

console.log("Compiling...");
const output = solc.compile(source, 1);

console.log("Creating a build folder...");
fs.ensureDirSync(buildPath); // create a build folder if that folder doesn't exists
console.log("Done creating folder");

for (let contract in output.contracts) {
  fs.outputJSONSync(
    path.resolve(buildPath, contract.replace(":", "").concat(".json")),
    output["contracts"][contract]
  );
}
