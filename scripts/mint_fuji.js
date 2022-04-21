require("dotenv").config();

const hre = require("hardhat");

async function main() {
  const account = process.env.TEST_ACCOUNT;
  const OmniChainNFT = await hre.ethers.getContractFactory("LayerZeroNoahNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x46d04072e9B682a5Caa865EB6a08506FF5320fe0"
  );
  await omniChainNFT.mint(1);
  const balance = await omniChainNFT.balanceOf(account);
  console.log("Fuji avax tesnet NFT balance: ", balance.toString());
  const owner = await omniChainNFT.ownerOf(0);
  console.log("Token owner: ", owner);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});