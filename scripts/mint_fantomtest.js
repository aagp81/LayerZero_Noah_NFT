require("dotenv").config();

const hre = require("hardhat");

async function main() {
  const account = process.env.TEST_ACCOUNT;
  const OmniChainNFT = await hre.ethers.getContractFactory("LayerZeroNoahNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x05B5f052eEa608E6336316F9e1d149CBa31a9a0B"
  );
  await omniChainNFT.mint(1);
  const balance = await omniChainNFT.balanceOf(account);
  console.log("Fantom NFT balance: ", balance.toString());
  const owner = await omniChainNFT.ownerOf(1);
  console.log("Token 1 owner: ", owner);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
