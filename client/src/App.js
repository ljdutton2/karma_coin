import React from 'react';
import './App.css';
import Web3Info from './components/Web3Info.js';
import { useWeb3 } from '@openzeppelin/network/react';
import { TASK_ABI } from './config';
const task_address = '0x54AbE829760FF2863dADa1D4aC0EFd9bf8916360'
const infuraProjectId = '95202223388e49f48b423ea50a70e336';

function App() {

  const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);
  const { networkId, networkName, providerName } = web3Context;

  return (
    <div className="App">
      <div>
        <h1>Karma Coin</h1>
          <Web3Info title="Web3 Info" web3Context={web3Context} />
          <h2 title="address"> {task_address} </h2>

          
      </div>
  </div>
  );
}

export default App;