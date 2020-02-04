import React, { useState } from "react";
import "./content.scss";
import nestTap from "../contracts/nestTap";
import web3Instance from "../utils/web3Util";
import Web3 from "web3";
import { wait } from "@testing-library/react";
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

const contractAddress = "0x0819BA0346c6741efD88B051b0756A6073A4230c";

function Content() {
  const [_receiveNest, set_receiveNest] = useState(0);
  const [_receiveTimes, set_receiveTimes] = useState(0);
  const [_receiveAddress, set_receiveAddress] = useState(0);
  const [canGetNest, setCanGetNest] = useState(0);

  nestTap.methods
    .getStatistics()
    .call()
    .then(function(result) {
      set_receiveAddress(result._receiveAddress);
      set_receiveTimes(result._receiveTimes);
      set_receiveNest(result._receiveNest);
    });

  nestTap.methods
    .getInfo()
    .call()
    .then(function(result) {
      const _latestBlock = result._latestBlock; //上次领取区块
      web3Instance()
        .eth.getBlockNumber()
        .then(function(result) {
          let blockDiff = result - _latestBlock;
          setCanGetNest(blockDiff * 8);
        });
    });

  // window.addEventListener("load", async () => {
  //   if (window.ethereum) {
  //     window.web3 = window.ethereum;
  //     try {
  //       await window.ethereum.enable();
  //     } catch (error) {
  //       alert(error);
  //     }
  //   } else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider);
  //   } else {
  //     alert("检测到您未安装MateMask");
  //   }
  // });

  if (typeof window.ethereum === "undefined") {
    alert("Looks like you need a Dapp browser to get started.");
    alert("Consider installing MetaMask!");
  } else {
  }

  return (
    <div className="content">
      <div className="donate-address">
        <img className="donate-icon" src="/assets/ic_donate.png" alt="" />
        <p className="donate-text">
          NEST 捐赠地址：0x0819BA0346c6741efD88B051b0756A6073A4230c
        </p>
        <img className="donate-icon" src="/assets/ic_donate.png" alt="" />
      </div>
      <div className="content-middle">
        <div className="middle-left">
          <div className="middle-left-title">
            <img className="icon" src="/assets/ic_question.png" alt="" />
            <span className="title">什么是 NEST ProProtocol ?</span>
          </div>
          <p>
            <span>Nest protocol </span>
            是一个分布式价格预言机网络，于2018年12月在以太坊主网上线。
          </p>
          <p>
            其采用独特的 “报价挖矿”
            机制来保证链下价格事实同步产生于链上，解决了区块链领域链上价格事实缺失的行业性问题。NEST-Price
            价格数据具有真实性、时效性、安全性、稳定性等特点，可供 DeFi
            产品直接引用，为开发者完成产品自身的逻辑闭环提供了链上价格事实依据；NEST
            Protocol 预言机网络作为 Web3.0
            时代最为重要的基础设施，将在推动区块链技术落地应用过程中产生巨大作用。
          </p>

          <div className="middle-left-title">
            <img className="icon" src="/assets/ic_question.png" alt="" />
            <span className="title">什么是 NEST DAPP ?</span>
          </div>

          <p>
            <span>NEST DAPP</span>
            是一款基于以太坊开发的去中心化智能合约交互工具。
          </p>
          <p>
            现已上线 NEST 预言机报价挖矿服务和 NEST
            去中心化抵押借贷产品（支持抵押 ETH 借 USDT 资产）。未来，NEST DAPP
            将会上线更多的基于 NEST 预言机开发的 DeFi
            产品和服务，为全球区块链用户和从业者提供服务。
          </p>
        </div>

        <div className="middle-right">
          <div className="middle-right-top">
            <div className="bg" />
            <img className="icon" src="/assets/ic_key.png" alt="" />
            <span className="title">领取 NEST</span>
          </div>

          <div className="amount-wrap">
            <div className="amount">
              <p>当前可领取 NEST</p>
              <span>{canGetNest}</span>
            </div>
          </div>
          <form>
            输入邀请人地址
            <br /> <br />
            <input />
            <p>
              有邀请码且未被使用，领取人能获取当前全部 NEST，邀请人额外奖励
              50%； 若没有邀请码，或邀请码已被使用，领取人最多只能获取 100 NEST
            </p>
            <div>
              我的邀请权限：
              <span>已激活</span>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <button onClick={() => click(window)}>领取</button>
            </div>
          </form>
        </div>
      </div>
      <div className="content-bottom">
        <div className="left">
          <div className="item">
            <img src="/assets/ic_left.png" alt="" />
            <p>累计发放 NEST</p>
            <span>{_receiveNest}</span>
          </div>
          <div className="item">
            <img src="/assets/ic_middle.png" alt="" />
            <p>累计领取次数</p>
            <span>{_receiveTimes}</span>
          </div>
          <div className="item">
            <img src="/assets/ic_right.png" alt="" />
            <p>领取地址数量</p>
            <span>{_receiveAddress}</span>
          </div>
        </div>
        <div className="line" />
        <div className="right">
          <div>
            <a href="www.baidu.com">Twitter</a>
            <a href="www.baidu.com">Telegram（EN）</a>
            <a href="www.baidu.com">Nest Fans</a>
          </div>
          <div>
            <a href="www.baidu.com">GitHub</a>
            <a href="www.baidu.com">Telegram（CN）</a>
            <a href="www.baidu.com">NEST DAPP</a>
          </div>
        </div>
      </div>
    </div>
  );
}

async function click(window) {
  // let contract = new window.web3.eth.Contract(contractAbi, contractAddress);

  // contract.methods
  //   .normalReceive()
  //   .call()
  //   .then(function(err,result) {
  //     if(err){
  //       alert("失败"+JSON.stringify(err));
  //     }else{
  //       alert("领取成功！");
  //     }

  //   });
  const accounts = await window.ethereum.enable();
  let func = {
    inputs: [],
    name: "normalReceive"
  }

  const transactionParameters = {
    to: constant.INFURA_NET, // Required except during contract publications.
    from: accounts[0], // must match user's active address.
    // to:"0xCD62e06741880d2000C46C90E8040c27966973BE",
    // value: '0x00', // Only required to send ether to the recipient from the initiating external account.
    data: ""
  };

  window.ethereum.sendAsync(
    {
      method: "eth_sendTransaction",
      params: [transactionParameters],
      from: accounts[0]
    },
    (err, result) => {
      alert(JSON.stringify(err) + " " + JSON.stringify(result));
    }
  );
}
export default Content;
