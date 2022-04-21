
const hre = require('hardhat')

// Define the NFT
const baseTokenURI = "ipfs://QmQmHrMjsxiztCuKAkzsGnerpcSx8pjQytrDGaJDKceKcU/"
const layerZeroEndpoint = "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf"
const startToken = 0
const maxMint = 200
const startTimestamp = 1649887200

async function main() {
  await hre.run('verify:verify', {
    address: "0x05B5f052eEa608E6336316F9e1d149CBa31a9a0B",
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