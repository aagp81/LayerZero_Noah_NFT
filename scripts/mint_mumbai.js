require("dotenv").config();

const hre = require("hardhat");

async function main() {
  const account = process.env.TEST_ACCOUNT2;
  const OmniChainNFT = await hre.ethers.getContractFactory("LayerZeroNoahNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0xa1aF20eEcb3961dE5015fC2CC72a3EA12bFd4995"
  );
  await omniChainNFT.mint(1);
  const balance = await omniChainNFT.balanceOf(account);
  console.log("Mumbai polygon NFT balance: ", balance.toString());
  const owner = await omniChainNFT.ownerOf(1);
  console.log("Token 1 owner: ", owner);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
