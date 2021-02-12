require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    kovan: {
      host: "localhost",
      port: 8545,
      network_id: "42" // Kovan network id
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
