require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth pave coin gesture help flush genuine'; 
let testAccounts = [
"0x1fa6ca14d0c84e34c0feb302ee52d8730e6f9546e5dc3947c90e89ae44cf0ab8",
"0x99f89c643bd60871b0fa91f0ff3c967db6b79ff1378db59ac3678aa2b51c2304",
"0x7f3962cac4c527048ebc3046456bf4f2f78f7b397e2d587af43b77e1ea606e13",
"0x0da9a06f5216c9df851b8dfef0fbcbf970ef8d3ecb2e39c7424b38ecc6800c80",
"0x72edb0c3df5d4a359e62a416eee3665ce6e6308497bcb09a9749a487e09320a5",
"0xc45e106de4bee430e93d902d3900a56456f09b096d43547866362bb84f3ef446",
"0x68bbbd8059af3647fa5fe24edf82203b65411c665594a0de75182ca94eaabe3e",
"0xc0cb7045a7467049de0ee8bccc225b0f62fcc0c985a7dd1e03adf40c817b2224",
"0x8e34a141f9c452d250dfdf43822a4219d3181129006b755551427be1554805fc",
"0xb4b0d553b66aaa14437d37e951d2f1195dd4b20323b7ab1c45b9ee50094cce23"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


