import blockchainIntroContent from './blockchain/blockchain-intro.md?raw';
import cryptocurrencyFundamentalsContent from './blockchain/cryptocurrency-fundamentals.md?raw';
import consensusMechanismsContent from './blockchain/consensus-mechanisms.md?raw';
import solidityProgrammingContent from './blockchain/solidity-programming.md?raw';
import ethereumDevelopmentContent from './blockchain/ethereum-development.md?raw';
import decentralizedAppsContent from './blockchain/decentralized-apps.md?raw';
import defiProtocolsContent from './blockchain/defi-protocols.md?raw';
import nftsDigitalAssetsContent from './blockchain/nfts-digital-assets.md?raw';
import web3IntegrationContent from './blockchain/web3-integration.md?raw';

export const blockchainContent = {
  'blockchain-intro': {
    markdown: blockchainIntroContent,
  },
  'cryptocurrency': {
    markdown: cryptocurrencyFundamentalsContent,
  },
  'consensus': {
    markdown: consensusMechanismsContent,
  },
  'solidity': {
    markdown: solidityProgrammingContent,
  },
  'ethereum': {
    markdown: ethereumDevelopmentContent,
  },
  'dapps': {
    markdown: decentralizedAppsContent,
  },
  'defi': {
    markdown: defiProtocolsContent,
  },
  'nfts': {
    markdown: nftsDigitalAssetsContent,
  },
  'web3': {
    markdown: web3IntegrationContent,
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