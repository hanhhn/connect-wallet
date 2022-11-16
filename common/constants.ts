const chainList = {
  1: {
    chainId: 1,
    chainName: "Ethereum Mainnet",
    rpc: "https://mainnet.infura.io/v3/",
    explorer: "https://etherscan.io",
  },
  3: {
    chainId: 3,
    chainName: "Ropsten",
    rpc: "https://rpc.ankr.com/eth_ropsten",
    explorer: "https://ropsten.etherscan.io",
  },
  4: {
    chainId: 4,
    chainName: "Rinkeby",
    rpc: "  https://rpc.ankr.com/eth_rinkeby",
    explorer: "https://rinkeby.etherscan.io",
  },
  137: {
    chainId: 137,
    chainName: "Polygon Mainnet",
    rpc: "https://polygon-rpc.com",
    explorer: "https://polygonscan.com",
  },
  56: {
    chainId: 56,
    chainName: "BSC Mainnet",
    rpc: "https://bsc-dataseed1.binance.org",
    explorer: "https://bscscan.com",
  },
};

export default chainList;
