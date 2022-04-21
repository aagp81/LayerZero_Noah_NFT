require("dotenv").config();

const hre = require("hardhat");

async function main() {
  const account = process.env.TEST_ACCOUNT;
  const OmniChainNFT = await hre.ethers.getContractFactory("LayerZeroNoahNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x3c4E61EE12781853b150F5165FC37A1D14344b56"
  );
  await omniChainNFT.mint(1);
  const balance = await omniChainNFT.balanceOf(account);
  console.log("Rinkeby eth NFT balance: ", balance.toString());
  const owner = await omniChainNFT.ownerOf(2);
  console.log("Token 1 owner: ", owner);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});