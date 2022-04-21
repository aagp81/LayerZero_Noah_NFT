require("dotenv").config();
const hre = require('hardhat')


const baseTokenURI = process.env.NFT_URI;
const layerZeroEndpoint = process.env.BINANCE_ENDPOINT;
const startToken = 0;
const maxMint = 9;
const startTimestamp = 1649887200;

async function main() {
  await hre.run('verify:verify', {
    address: "0x4bfcA089761a26057801292434e682a1CD9Ecc93",
    constructorArguments: [
        baseTokenURI,
        layerZeroEndpoint,
        startToken,
        maxMint,
        startTimestamp
    ],
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })