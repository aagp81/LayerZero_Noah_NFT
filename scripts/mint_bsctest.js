require("dotenv").config();

const hre = require("hardhat");

async function main() {
  const account = process.env.TEST_ACCOUNT;
  const OmniChainNFT = await hre.ethers.getContractFactory("LayerZeroNoahNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x4bfcA089761a26057801292434e682a1CD9Ecc93"
  );
  await omniChainNFT.mint(1);
  const balance = await omniChainNFT.balanceOf(account);
  console.log("BSC tesnet NFT balance: ", balance.toString());
  const owner = await omniChainNFT.ownerOf(1);
  console.log("Token owner: ", owner);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});