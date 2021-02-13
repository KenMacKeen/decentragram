require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    kovan: {
      host: "https://kovan.infura.io/v3/ce117a18c9514092a2ec7821a3b009b1",
      port: "localhost",
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
