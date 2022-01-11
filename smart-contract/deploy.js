const HDWalletProvider = require("@truffle/hdwallet-provider");

const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

require("dotenv").config();

const provider = new HDWalletProvider({
  mnemonic: {
    phrase: process.env.mnemonic,
  },
  providerOrUrl: process.env.link,
});

const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy contract with account: ", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({ from: accounts[0] });

  console.log("Created contract address: ", result.options.address);
};

deploy();
