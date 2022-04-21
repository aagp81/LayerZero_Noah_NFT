const { BigNumber } = require("ethers");
const hre = require("hardhat");

async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("LayerZeroNoahNFT");
  const omniChainNFT = await OmniChainNFT.deploy(
    "ipfs://QmQmHrMjsxiztCuKAkzsGnerpcSx8pjQytrDGaJDKceKcU/",
    "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf",
    0,
    200,
    1649887200
  );

  await omniChainNFT.deployed();

  console.log(
    "Fantom testnet ----- LayerZeroNoahNFT deployed to:",
    omniChainNFT.address
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
