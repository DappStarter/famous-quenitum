require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy reward stereo punch harvest photo forget genius'; 
let testAccounts = [
"0x8b23812d0fa7e4b2a5eac9ba958ffd44ae39b3af92a8dd47c9908a31c43be145",
"0x3caa97d201a8d039f5e4eb56a58f38ea8e8b47c955ffa40709ceee66fa5af8ba",
"0xa423ae1820fdb35a094eb94b86cbef76b2b20a99bd75b2945ebe4a4920e850c9",
"0xd7ca3a81c9676152f2d08e44ac9a1d022fea553b193e2f3a7bfc04d4b689ad19",
"0x8d0d39cc2322bd2d61e18fa11ee05e3eee5ea5959f8f57ace10477a3158b122b",
"0xa1946cdbe387df31ff8f4441b3e4aece2ebb7258e5263481c416b894b2a96f68",
"0xbea32c3f90f421da4f3cf5406f983055e2c9c1b59ffd13ea74816937fa1be33b",
"0x54c0cd6f2c076439e9845a87b9401136baa019fe04de8908d09a534108d7f0e2",
"0xa8ebcb6803a53016f25393c6c23ec07abf7769ca9234abb3bcca474c9dbfec97",
"0x852f7afec302f306bb9400b08ec5db30758405d9c649c3ba5e23c777d79e45e0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
