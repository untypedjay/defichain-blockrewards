import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getStats } from './api/defichain';
import { Countdown } from './components/Countdown';
import { Card } from './components/Card';
import { Loader } from './components/Loader';
import {
  CURRENT_BLOCK_REWARD,
  FIRST_BLOCK_UTC, FUTURE_BLOCK_REWARD,
  REDUCTION_BLOCK, REFRESH_TIME
} from './constants/common';

const StyledApp = styled.div`
  color: var(--clr-text);
  height: 100%;
  top: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 830px) {
    margin: 8em 0;
    padding: 0 8%;
  }
  
  @media (max-width: 600px) {
    padding: 40px;
  }
  
  @media (max-width: 440px) {
    padding: 20px;
    margin: 10em 0;
  }
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 2em;
  
  @media (max-width: 700px) {
    flex-direction: column;
    padding-bottom: 3em;
  }
`;

const StyledHeading = styled.h1`
  margin: 0 0 1em 0;
  font-size: 2.3rem;
`;

export default function App() {
  const [currentBlock, setCurrentBlock] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const stats = await getStats();
      setCurrentBlock(stats.blockHeight);
      setIsLoading(false);
    };

    loadData();

    const interval = setInterval(() => {
      loadData();
    }, REFRESH_TIME);
    return () => clearInterval(interval);
  }, []);

  const getRemainingBlocks = () => {
    return REDUCTION_BLOCK - currentBlock;
  };

  const getAverageBlockTime = (block: number) => {
    const now = new Date().valueOf();
    const secondsSinceFirstBlock = (now - new Date(FIRST_BLOCK_UTC).getTime()) / 1000;
    return secondsSinceFirstBlock / block;
  };

  const getReductionDate = () => {
    const remainingTime = getRemainingBlocks() * getAverageBlockTime(currentBlock);
    const reductionDate = new Date();
    return new Date(reductionDate.getTime() + 1000 * remainingTime)
  };

  return (
    <StyledApp>
      { isLoading ? <Loader/> :
        <>
          <StyledHeading>
            DefiChain Block Reward Reduction Countdown
          </StyledHeading>
          <p>
            Block reward will decrease from { CURRENT_BLOCK_REWARD } to { FUTURE_BLOCK_REWARD } coins in approximately
          </p>

          <Countdown date={getReductionDate()}/>

          <StyledContainer>
            <Card
              title="Blocks Remaining:"
              label={`until ${ REDUCTION_BLOCK }`}
            >
              { `${ getRemainingBlocks() }` }
            </Card>
            <Card
              title="Average Block Time:"
              label="seconds"
            >
              { `${ getAverageBlockTime(currentBlock).toFixed(2) }` }
            </Card>
          </StyledContainer>
        </>
      }
    </StyledApp>
  );
}