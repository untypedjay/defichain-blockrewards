import { useEffect, useState } from "react";
import styled from "styled-components";
import useLocalStorage from "./hooks/useLocalStorage";
import { Countdown } from "./components/Countdown";
import { Card } from "./components/Card";
import { Loader } from "./components/Loader";
import { getStats } from "./api/defichain";
import {
  getAverageBlockTime,
  getReductionDate,
  getRemainingBlocks,
  getReductionBlock,
  getCurrentTotalRewards,
  round,
} from "./utils";
import { RewardDistribution } from "./components/RewardDistribution";
import { CYCLE_BLOCK_LENGTH } from "./constants";

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
    margin: 8em 0;
  }
`;

const StyledVerticalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  grid-gap: 2em;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding-bottom: 3em;
  }
`;

const StyledHorizontalContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2em;
  height: 100%;
`;

const StyledHeading = styled.h1`
  margin: 0 0 1em 0;
  font-size: 2.3rem;
`;

export default function App() {
  const [currentBlock, setCurrentBlock] = useLocalStorage("currentBlock", 0);
  const [isLoading, setIsLoading] = useState(true);

  const AVERAGE_BLOCK_TIME = getAverageBlockTime(currentBlock);
  const TOTAL_REWARDS = getCurrentTotalRewards(currentBlock);

  useEffect(() => {
    const loadData = async () => {
      const stats = await getStats();
      setCurrentBlock(stats.data.count.blocks);
      setIsLoading(false);
    };

    loadData();

    const interval = setInterval(() => {
      loadData();
    }, AVERAGE_BLOCK_TIME * 1000);
    return () => clearInterval(interval);
  }, [setCurrentBlock, AVERAGE_BLOCK_TIME]);

  return (
    <StyledApp>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <StyledHeading>DeFiChain Block Reward Countdown</StyledHeading>
          <p>
            Block reward will decrease from {round(TOTAL_REWARDS)} to{" "}
            {round(getCurrentTotalRewards(currentBlock + CYCLE_BLOCK_LENGTH))}{" "}
            DFI in approximately
          </p>

          <Countdown date={getReductionDate(currentBlock)} />

          <StyledVerticalContainer>
            <StyledHorizontalContainer>
              <Card
                title="Blocks Remaining:"
                label={`until ${getReductionBlock(currentBlock)}`}
              >
                {`${getRemainingBlocks(currentBlock)}`}
              </Card>
              <Card title="Average Block Time:" label="seconds">
                {`${round(AVERAGE_BLOCK_TIME)}`}
              </Card>
            </StyledHorizontalContainer>
            <RewardDistribution totalRewards={TOTAL_REWARDS} />
          </StyledVerticalContainer>
        </>
      )}
    </StyledApp>
  );
}
