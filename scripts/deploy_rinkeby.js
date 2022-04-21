require("dotenv").config();
const hre = require("hardhat");


const baseTokenURI = process.env.NFT_URI;
const layerZeroEndpoint = process.env.RINKEBY_ENDPOINT;
const startToken = 0;
const maxMint = 300;
const startTimestamp = 1649887200;


async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("LayerZeroNoahNFT");
  const omniChainNFT = await OmniChainNFT.deploy(
    baseTokenURI,
    layerZeroEndpoint,
    startToken,
    maxMint,
    startTimestamp
  );

  await omniChainNFT.deployed();

  console.log(
    "Rinkeby eth testnet ----- LayerZeroNoahNFT deployed to:",
    omniChainNFT.address
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});