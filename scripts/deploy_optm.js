require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.deploy(
    "0x72aB53a133b27Fa428ca7Dc263080807AfEc91b5",
    500,
    600
  );

  await omniChainNFT.deployed();

  console.log("Optimism ----- omniChainNFT deployed to:", omniChainNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});