export const blockchainContent = {
  'blockchain-intro': {
    title: 'Introduction to Blockchain Technology',
    description: 'Discover the revolutionary technology behind cryptocurrencies and Web3.',
    content: {
      overview: `Blockchain is a revolutionary distributed ledger technology that maintains a continuously growing list of records, called blocks, which are linked and secured using cryptography. Think of it as a digital ledger that's shared across multiple computers, making it nearly impossible to hack or manipulate.\n\nUnlike traditional databases controlled by a single entity, blockchain operates on a decentralized network where multiple participants (nodes) maintain copies of the same ledger. This creates a system that's transparent, secure, and resistant to censorship.\n\nKey characteristics of blockchain include:\n- Decentralization: No single point of control or failure\n- Immutability: Once data is recorded, it's extremely difficult to change\n- Transparency: All transactions are visible to network participants\n- Security: Cryptographic hashing and consensus mechanisms protect the data\n- Trust: The system enables trust between parties without intermediaries\n\nThis technology powers cryptocurrencies like Bitcoin and Ethereum, but its applications extend far beyond digital money to include supply chain management, digital identity, smart contracts, and decentralized applications (DApps).`,
      objectives: [
        'Understand the fundamental concepts of blockchain technology',
        'Learn how cryptographic hashing secures blockchain data',
        'Explore different consensus mechanisms (Proof of Work, Proof of Stake)',
        'Understand cryptocurrencies and digital assets',
        'Introduction to smart contracts and their applications',
        'Explore real-world use cases beyond cryptocurrency'
      ]
    },
    codeExample: `pragma solidity ^0.8.0;\n\n/**\n * Simple Smart Contract demonstrating basic blockchain concepts\n * This contract stores and manages user data on the Ethereum blockchain\n */\ncontract SimpleStorage {\n    // State variables stored on the blockchain\n    uint256 private storedData;\n    address public owner;\n    mapping(address => uint256) public userBalances;\n    \n    // Events for logging blockchain activities\n    event DataStored(uint256 indexed value, address indexed sender, uint256 timestamp);\n    event BalanceUpdated(address indexed user, uint256 newBalance);\n    \n    // Constructor runs once when contract is deployed\n    constructor() {\n        owner = msg.sender;\n        storedData = 0;\n    }\n    \n    // Modifier to restrict access to owner only\n    modifier onlyOwner() {\n        require(msg.sender == owner, \"Only owner can call this function\");\n        _;\n    }\n    \n    /**\n     * Store a value on the blockchain\n     * This function costs gas to execute\n     */\n    function set(uint256 x) public {\n        storedData = x;\n        userBalances[msg.sender] += 1; // Reward user for storing data\n        \n        emit DataStored(x, msg.sender, block.timestamp);\n        emit BalanceUpdated(msg.sender, userBalances[msg.sender]);\n    }\n    \n    /**\n     * Retrieve the stored value\n     * This is a view function (read-only, no gas cost)\n     */\n    function get() public view returns (uint256) {\n        return storedData;\n    }\n    \n    /**\n     * Increment the stored value by 1\n     */\n    function increment() public {\n        storedData += 1;\n        emit DataStored(storedData, msg.sender, block.timestamp);\n    }\n    \n    /**\n     * Get user's balance (number of times they've stored data)\n     */\n    function getMyBalance() public view returns (uint256) {\n        return userBalances[msg.sender];\n    }\n}`
  }
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