require("dotenv").config();
const hre = require('hardhat')

// Define the NFT
const baseTokenURI = process.env.NFT_URI;
const layerZeroEndpoint = process.env.RINKEBY_ENDPOINT;
const startToken = 5;
const maxMint = 9;
const startTimestamp = 1649887200;

async function main() {
  await hre.run('verify:verify', {
    address: "0x8225D0bEE0Ab29a1EBD719c3319f207b56EF5156",
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