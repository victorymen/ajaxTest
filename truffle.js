var HDWalletProvider = require("truffle-hdwallet-provider");
//infura部署所需依赖
var mnemonic = "nerve arena final volcano shove echo walk bargain hire resist reflect clap";
//助记词

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 9545,//truffle develop端口
            gas: 750000000,
            network_id: "*" // Match any network id
        },
        kovan: {
            gasPrice: 500000000000,
            provider: function() {
                return new HDWalletProvider(mnemonic,
                    "https://kovan.infura.io/v3/b5a8f3713ac34620b940ee896bd8dbde")
            },
            network_id: 3
        },
        ropsten: {
           // gas: 8000000,
            gasPrice: 8000000000,
            provider: function() {
                return new HDWalletProvider(mnemonic,
                    "https://ropsten.infura.io/v3/b5a8f3713ac34620b940ee896bd8dbde")
            },
            network_id: 2
        },
        mainnet: {
            gas: 7500000,
            gasPrice: 6000000000,
            provider: function() {
                return new HDWalletProvider(mnemonic,
                    "https://mainnet.infura.io/v3/b5a8f3713ac34620b940ee896bd8dbde")
            },
            network_id: 1

        }
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
};
