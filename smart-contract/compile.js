const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath); // deleting the folder and all the content inside it

const campaignPath = path.resolve(__dirname, "Contracts", "Campaigns.sol");
const source = fs.readFileSync(campaignPath, "utf8");

// var input = {
//   language: 'Solidity',
//   sources: {
//     'Campaigns.sol': {
//       content: source
//     }
//   },
//   settings: {
//     outputSelection: {
//       '*': {
//         '*': ['*']
//       }
//     },
//   }
// };

// var output = JSON.parse(solc.compile(JSON.stringify(input)));

console.log("Compiling...");
const output = solc.compile(source, 1);

console.log("Creating a build folder...");
fs.ensureDirSync(buildPath); // create a build folder if that folder doesn't exists
console.log("Done creating folder");

// // console.log(solc.compile(JSON.stringify(input)));
console.log("((((((((((((((()))))))))))))))))))");
for (let contract in output.contracts) {
  fs.outputJSONSync(
    path.resolve(buildPath, contract.replace(":", "").concat(".json")),
    output["contracts"][contract]
  );
}
