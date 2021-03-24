import React, { useEffect, useState } from 'react';
import { getStats } from './api/defichain';
import { Countdown } from './components/Countdown';
import styled from 'styled-components';
import { Card } from './components/Card';

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
  margin: 3em auto;
  
  @media (max-width: 830px) {
    margin: 8em 0;
    padding: 0 8%;
  }
  
  @media (max-width: 600px) {
    padding: 40px;
  }
  
  @media (max-width: 440px) {
    padding: 10px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2em;
  
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
    <StyledApp>
      { isLoading ? <p>Loading...</p> :
        <>
          <StyledHeading>DefiChain Block Reward Reduction Countdown</StyledHeading>
          <p>Block reward will decrease from 200 to 150 coins in approximately</p>

          <Countdown date={getReductionDate()}/>

          <StyledContainer>
            <Card title="Blocks Remaining:" label={`until ${ REDUCTION_BLOCK }`}>
              { `${ getRemainingBlocks() }` }
            </Card>
            <Card title="Average Block Time:" label="seconds">
              { `${ getAverageBlockTime(currentBlock).toFixed(2) }` }
            </Card>
          </StyledContainer>
        </>
      }
    </StyledApp>
  );
}