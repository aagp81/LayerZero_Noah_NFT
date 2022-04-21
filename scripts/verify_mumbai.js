const hre = require('hardhat')

// Define the NFT
const baseTokenURI = "ipfs://QmQmHrMjsxiztCuKAkzsGnerpcSx8pjQytrDGaJDKceKcU/"
const layerZeroEndpoint = "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8"
const startToken = 0
const maxMint = 9
const startTimestamp = 1649887200

async function main() {
  await hre.run('verify:verify', {
    address: "0xa1aF20eEcb3961dE5015fC2CC72a3EA12bFd4995",
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