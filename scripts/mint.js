const { ethers } = require("hardhat");
const { JsonRpcProvider } = require('ethers');

require("dotenv").config();

async function main() {
  // Get private key from env
  const privateKey = process.env.PRIVATE_KEY;

  // The URL of the network provider
  const networkAddress = "https://rpc.ankr.com/eth_goerli	";

  // Create a provider using the URL
  
  const provider = new JsonRpcProvider('https://rpc.ankr.com/eth_goerli');


  // Create a signer from the private key and provider
  const signer = new ethers.Wallet(privateKey, provider);

  // Tthe address of the deployed contract
  const contractAddress = "0x3AE9FF36cB032232D9C596d7a07F710Afb798452";

  // Get the contract factory and attach it to the signer
  const NFTs = await ethers.getContractFactory("MetaToken", signer);
  const contract = await NFTs.attach(contractAddress);

  // Call the mint function on the contract to mint 5 tokens
  await contract.mint(5);

  // Log a message to the console to indicate that the tokens have been minted
  console.log("NFTs Minted");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });