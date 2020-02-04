import web3Util from "../utils/web3Util";
import Web3 from "web3";
import constant from "../constant";
const contractAbi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256"
      }
    ],
    name: "changeAmountLimit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256"
      }
    ],
    name: "changeBlockAmount",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256"
      }
    ],
    name: "changeBlockInterval",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "checkAmountLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "checkBlockAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "checkBlockInterval",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "checkOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getInfo",
    outputs: [
      {
        internalType: "bool",
        name: "_firstReceive",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "_latestTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_blockAmount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_latestBlock",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getStatistics",
    outputs: [
      {
        internalType: "uint256",
        name: "_receiveNest",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_receiveTimes",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_receiveAddress",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "code",
        type: "address"
      }
    ],
    name: "invitationReceive",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "normalReceive",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

// if(typeof web3 !=='undefined'){

// }
const web3 = new Web3(constant.INFURA_NET)
const contractAddress = "0x0819BA0346c6741efD88B051b0756A6073A4230c";

let nestTap = new web3.eth.Contract(contractAbi, contractAddress);
export default nestTap;
