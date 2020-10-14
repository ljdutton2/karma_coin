import React from 'react';
import './App.css';
import Web3Info from './components/Web3Info.js';
import { useWeb3 } from '@openzeppelin/network/react';
import { TASK_ABI } from './config';
var Web3 = require("web3")
var web3 = new Web3()
var RLP = require('rlp');  
var nonce = 0;
var sender= "0x6ac7ea33f8831ea9dcc53393aaa88b25a785dbf0"
var Eth = require('web3-eth');
var address = "0x" + web3.utils.sha3(RLP.encode([sender,nonce])).slice(12).substring(14);

const infuraProjectId = '95202223388e49f48b423ea50a70e336';

function App() {

  const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);
  const { networkId, networkName, providerName } = web3Context;

  return (
    <div className="App">
      <div>
        <h1>Karma Coin</h1>
          <Web3Info title="Web3 Info" web3Context={web3Context} />
          <h2 title="address"> {address} </h2>

          
      </div>
  </div>
  );
}

export default App;