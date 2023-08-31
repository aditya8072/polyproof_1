# MetaToken NFT Project

A simple Solidity smart contract for minting and transferring NFTs. This project includes a contract called MetaToken for creating NFTs and a set of scripts for deploying, minting, and transferring NFTs between different Ethereum networks.


### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- Hardhat for Ethereum development (you can install it globally with `npm install -g hardhat`).
- An Ethereum wallet with a private key (for deployment and transactions).
- The contract address of your deployed MetaToken contract.

## Usage

### Deploying the Contract

1. Set your private key and contract details in a `.env` file:

   ```env
   PRIVATE_KEY=your_private_key_here
   NETWORK_URL=https://rpc.ankr.com/eth_goerli
   ```

2. Deploy the MetaToken contract to the Ethereum network:

   ```bash
   npx hardhat run scripts/deploy.js
   ```

### Minting NFTs

To mint NFTs, you can use the following script:

```bash
npx hardhat run scripts/mint.js
```

### Transferring NFTs

To transfer NFTs to the Ethereum FxChain network, use the following script:

```bash
npx hardhat run scripts/transfer.js
```

## Configuration

- `MetaToken.sol`: The smart contract for minting NFTs.
- `scripts/`: Contains JavaScript scripts for deployment and interactions with the contract.
- `fxRootContractABI.json`: ABI for the Ethereum FxChain FXRoot contract.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
