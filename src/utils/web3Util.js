import Web3 from "web3";
function web3Instance() {
  const INFURA_NET =
    "https://ropsten.infura.io/v3/ad670fd33ebc42f89befc52283fa6a00";
    const web3 = new Web3(INFURA_NET)
    return web3
};

export default web3Instance
