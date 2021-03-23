import React, { useEffect, useState } from 'react';
import './App.css';
import { getStats } from './api/defichain';
import { Countdown } from './components/Countdown';

export default function App() {
  const [currentBlock, setCurrentBlock] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const REDUCTION_BLOCK = 1050000;
  const FIRST_BLOCK_UTC = new Date(2020, 4, 11, 6, 47, 10);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const stats = await getStats();
    setCurrentBlock(stats.blockHeight);
    setIsLoading(false);
  };

  const getRemainingBlocks = () => {
    return REDUCTION_BLOCK - currentBlock;
  };

  const getAverageBlockTime = (block: number) => {
    const secondsSinceFirstBlock = (new Date().getTime() - FIRST_BLOCK_UTC.getTime()) / 1000;
    return secondsSinceFirstBlock / block;
  };

  const getReductionDate = () => {
    const remainingTime = getRemainingBlocks() * getAverageBlockTime(currentBlock);
    const reductionDate = new Date();
    reductionDate.setSeconds(new Date().getSeconds() + remainingTime);
    return reductionDate;
  };

  return (
    <div className="App">
      { isLoading ? <p>Loading...</p> :
        <>
          <h1>DefiChain Block Reward Reduction Countdown</h1>
          <p>DeFiChain block reward will decrease from 200 to 150 coins in approximately</p>

          <Countdown date={getReductionDate()}/>

          <div>
            <p>Blocks Remaining:</p>
            <p>{ getRemainingBlocks() }</p>
            <p>until { REDUCTION_BLOCK }</p>
          </div>

          <p>Average Block Time: { getAverageBlockTime(currentBlock).toFixed(2) } seconds</p>
        </>
      }
    </div>
  );
}