const hre = require("hardhat");

async function main() {

  const token = await hre.ethers.deployContract("MetaToken");

  console.log("Token address:", await token.getAddress());
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});