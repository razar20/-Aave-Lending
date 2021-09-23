require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = 'already bench slice awful major pull reveal mammal protect next auction good';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    kovan:{
      provider: ()=> HDWalletProvider(MNEMONIC, "https://kovan.infura.io/v3/84e5ee7d74cb499d9d0f98af91ee62e1/"),
      network_id:42,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  // compilers: {
  //   solc: {
  //     optimizer: {
  //       enabled: true,
  //       runs: 200
  //     }
  //   }
  // },
  compilers:{
    solc:{
      version: "^0.6.12",
      settings:{
        optimizer:{
          enabled: false,
          runs:200
        },
        evmVersion:"byzantium"
      }
    }
  }


}