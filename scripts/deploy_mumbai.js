const hre = require("hardhat");

async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("LayerZeroNoahNFT");
  const omniChainNFT = await OmniChainNFT.deploy(
    "ipfs://QmQmHrMjsxiztCuKAkzsGnerpcSx8pjQytrDGaJDKceKcU/",
    "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8",
    0,
    9,
    1649887200
  );

  await omniChainNFT.deployed();

  console.log(
    "Mumbai polygon testnet ----- LayerZeroNoahNFT deployed to:",
    omniChainNFT.address
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});