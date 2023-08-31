const { ethers } = require("hardhat");
const { JsonRpcProvider } = require('ethers');

const  FXRootContractAbi  = require("../fxRootContractABI.json");
const ABI = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");
require("dotenv").config();

//Transfer ERC721A tokens to the Ethereum FxChain network
async function main() {
  // Set up connections to network and wallet
  const networkAddress = "https://rpc.ankr.com/eth_goerli";
  const privateKey = process.env.PRIVATE_KEY;
  // const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const provider = new JsonRpcProvider('https://rpc.ankr.com/eth_goerli');



  // Create a wallet instance
  const wallet = new ethers.Wallet(privateKey, provider);

  // Get the signer instance
  // const signer = await ethers.getSigners();
  // const signer = ethers.provider.getSigner("0x2D7C0774814b39FC31274E6DEe81cd5b1E942519");
  const [signer] = await ethers.getSigner();



  // Get ERC721A contract instance
  const NFT = await ethers.getContractFactory("MetaToken");
  const nft = await NFT.attach("0xF219F8441e20092a9B2de66E23F1948975904637");

  // Get FXRoot contract instance
  const fxRootAddress = "0xF219F8441e20092a9B2de66E23F1948975904637";
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  // TokenIds to transfer
  const tokenIds = [0, 1, 2, 3, 4];

  // Approve the nfts for transfer
  const approveTx = await nft
    .connect(signer)
    .setApprovalForAll(fxRootAddress, true, { gasPrice: increasedGasPrice });
  await approveTx.wait();
  console.log("Approved");

  // Deposit the nfts to the FXRoot contracts
  for (let i = 0; i < tokenIds; i++) {
    const depositTx = await fxRoot
      .connect(signer)
      .deposit(nft.address, wallet.address, tokenIds[i], "0x6566");

    // Wait for the deposit to be confirmed
    await depositTx.wait();
  }

  console.log("Deposited");

  // Test balanceOf
  const balance = await nft.balanceOf(wallet.address);

  // Print the balance of the wallet
  console.log( "balance of nfts Wallet", wallet.address, "is: ", balance.toString() );
}

// Call the main function and handle any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });