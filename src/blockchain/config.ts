import Web3, { Address } from "web3"

export const KLAYTN_TESTNET_CHAIN_ID = 1001
export const KLAYTN_TESTNET_HTTP_RPC_URL = "https://public-en-baobab.klaytn.net"
export const KLAYTN_TESTNET_WEBSOCKET_RPC_URL = "wss://public-en-baobab.klaytn.net/ws"
export const KLAYTN_TESTNET_CONTRACT_FACTORY =
  "0x347381c0767f04040DfbAdCd80165B237f1F85fa"
  export const KLAYTN_TESTNET_EXPLORER = "https://baobab.klaytnscope.com/"

export const TIME_OUT = 1000



export const GAS_PRICE = Web3.utils.toWei(55, "gwei")
export const GAS_LIMIT = 3500000

