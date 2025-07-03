import blockchainIntroContent from './blockchain/blockchain-intro.md?raw';

export const blockchainContent = {
  'blockchain-intro': {
    markdown: blockchainIntroContent,
  },
  // Add other sections here as needed
};

export const blockchainStructure = [
  {
    title: 'Blockchain Basics',
    sections: [
      { id: 'blockchain-intro', title: 'What is Blockchain?' },
      { id: 'cryptocurrency', title: 'Cryptocurrency Fundamentals' },
      { id: 'consensus', title: 'Consensus Mechanisms' },
    ]
  },
  {
    title: 'Smart Contracts',
    sections: [
      { id: 'solidity', title: 'Solidity Programming' },
      { id: 'ethereum', title: 'Ethereum Development' },
      { id: 'dapps', title: 'Decentralized Apps' },
    ]
  },
  {
    title: 'Advanced Topics',
    sections: [
      { id: 'defi', title: 'DeFi Protocols' },
      { id: 'nfts', title: 'NFTs & Digital Assets' },
      { id: 'web3', title: 'Web3 Integration' },
    ]
  }
]; 