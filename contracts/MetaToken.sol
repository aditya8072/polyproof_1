// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MetaToken is ERC721A, Ownable {
    
    string public baseUrl;
    string public prompt;

    constructor() ERC721A("Pizza", "Pzz") {
        baseUrl = "https://gateway.pinata.cloud/ipfs/QmWVBW3rJiaQBrQPFK6jCJkavgNFsEtZK2Tos2oRL3oeAb/";
        prompt = "skeleton eating pizza with peanut butter";
    }

    // Function to mint NFTs accessible by owner only
    function mint( uint256 num_of_nft ) external onlyOwner {
        
        _mint(msg.sender, num_of_nft);
    
    }

    //  function to return the base URL for the NFTs gnerated
    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    // Return the prompt that is given to generate the NFTs
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}