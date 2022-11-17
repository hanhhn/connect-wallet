import Web3 from "web3";

declare global {
  interface Window {
    ethereum: any;
  }
}

export const getProvider = () => {
  if (typeof window !== "undefined") {
    const { ethereum } = window as any;
    return ethereum;
  }
};

export const alreadyConnected = (): Promise<string> => {
  const provider = getProvider();
  if (provider != null) {
    const web3 = new Web3(provider);

    return web3.eth
      .getAccounts()
      .then((accounts) => {
        return Promise.resolve(accounts[0]);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  } else {
    return Promise.reject("Please install metamask");
  }
};

export const connectMetamask = (): Promise<string> => {
  const provider = getProvider();
  if (provider != null) {
    const web3 = new Web3(provider);

    return web3.eth
      .requestAccounts()
      .then((accounts) => {
        return Promise.resolve(accounts[0]);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  } else {
    return Promise.reject("Please install metamask");
  }
};

export const onAccountChange = (callback: (address: string | null) => void) => {
  const provider = getProvider();
  if (provider) {
    provider.on("accountsChanged", function (accounts: string[]) {
      if (accounts && accounts.length > 0) {
        callback(Web3.utils.toChecksumAddress(accounts[0]));
      } else {
        callback(null);
      }
    });
  }
};

export const onChainIdChange = (callback: (chainId: number) => void) => {
  const provider = getProvider();
  if (provider) {
    provider.on("chainChanged", function (chainId: number) {
      callback(Number(chainId));
    });
  }
};

export const getChainId = (): Promise<number> => {
  const provider = getProvider();
  if (provider) {
    const web3 = new Web3(getProvider());
    return web3.eth
      .getChainId()
      .then((chainId) => Promise.resolve(Number(chainId)))
      .catch((err) => Promise.reject(err));
  }

  return Promise.reject("Please install metamask");
};
