require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require("./tasks/block-number.js")
/** @type import('hardhat/config').HardhatUserConfig */



const SEPOLIA_RCP_URL = process.env.SEPOLIA_RCP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY
module.exports = {

  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RCP_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111
    }
  },
  localhost: {
    url: "http://127.0.0.1:8545/",
    chainId: 31337
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COIN_MARKET_CAP_API_KEY,
    token: "MATIC"
  },
  solidity: "0.8.23",

};
