require("dotenv").config();
const hre = require('hardhat')


const baseTokenURI = process.env.NFT_URI;
const layerZeroEndpoint = process.env.FUJI_ENDPOINT;
const startToken = 0;
const maxMint = 9;
const startTimestamp = 1649887200;

async function main() {
  await hre.run('verify:verify', {
    address: "0x46d04072e9B682a5Caa865EB6a08506FF5320fe0",
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