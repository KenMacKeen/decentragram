require('babel-register');
require('babel-polyfill');

require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

mocha: {
  timeout: 1000000
}

new HDWalletProvider(
  process.env.MNEMONIC,
  'https://kovan.infura.io/${process.env.INFURA_API_KEY}')

module.exports = {
  networks: {
  kovan: {
    networkCheckTimeout: 1000000,
       provider: function() {
         return new HDWalletProvider(
          process.env.MNEMONIC,
           'https://kovan.infura.io/${process.env.INFURA_API_KEY}')
          },
        gasPrice: 5555500000,        // Kovan has a lower block limit than mainnet
        network_id: 42
        },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
};


