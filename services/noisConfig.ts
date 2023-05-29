import { Keplr, ChainInfo } from "@keplr-wallet/types";

export const noisChainConfig: ChainInfo = {
  //chainId: "nois-testnet-004",
  chainId: "nois-testnet-005",
  chainName: "Nois Testnet",
  //rpc: "https://nois-004.rpc.bccnodes.com",
  rpc: "https://nois-testnet-rpc.polkachu.com/",
  rest: "https://nois-004.api.bccnodes.com",
  // chainId: "nois-1",
  // chainName: "Nois",
  // rpc: "https://nois-mainnet-rpc.bccnodes.com/",
  // rest: "https://nois-mainnet-api.bccnodes.com/",
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "nois",
    bech32PrefixAccPub: "noispub",
    bech32PrefixValAddr: "noisvaloper",
    bech32PrefixValPub: "noisvaloperpub",
    bech32PrefixConsAddr: "noisvalcons",
    bech32PrefixConsPub: "noisvalconspub",
  },
  currencies: [
    {
      coinDenom: "NOIS",
      coinMinimalDenom: "unois",
      coinDecimals: 6,
      coinGeckoId: "unknown",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "NOIS",
      coinMinimalDenom: "unois",
      coinDecimals: 6,
      coinGeckoId: "unknown",
      gasPriceStep: {
        low: 0.05,
        average: 0.05,
        high: 0.1,
      },
    },
  ],
  stakeCurrency: {
    coinDenom: "NOIS",
    coinMinimalDenom: "unois",
    coinDecimals: 6,
    coinGeckoId: "unknown",
  },
  features: [],
};

export const junoChainConfig: ChainInfo = {
  chainId: "uni-6",
  chainName: "Juno Testnet",
  rpc: "https://juno-testnet-rpc.polkachu.com/",
  rest: "https://juno-testnet-rpc.polkachu.com:443",
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "juno",
    bech32PrefixAccPub: "junopub",
    bech32PrefixValAddr: "junovaloper",
    bech32PrefixValPub: "junovaloperpub",
    bech32PrefixConsAddr: "junovalcons",
    bech32PrefixConsPub: "junovalconspub"
  },
  currencies: [
    {
      coinDenom: "JUNOX",
      coinMinimalDenom: "ujunox",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "JUNOX",
      coinMinimalDenom: "ujunox",
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.05,
        average: 0.05,
        high: 0.1,
      },
    },
  ],
  stakeCurrency: {
    coinDenom: "JUNOX",
    coinMinimalDenom: "ujunox",
    coinDecimals: 6,
  },
  features: []
};