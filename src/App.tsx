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
import { CYCLE_BLOCK_LENGTH, DFI_DECIMAL_PLACES } from "./constants";

const StyledApp = styled.div`
  color: var(--clr-text);
  top: 0;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: auto;
  padding: 2em;

  @media (max-width: 700px) {
    justify-content: right;
    height: auto;
  }

  @media (max-width: 500px) {
    padding: 1em;
  }
`;

const StyledVerticalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  grid-gap: 2em;

  @media (max-width: 700px) {
    display: none;
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

const StyledMobileContainer = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: block;
    width: 100%;
  }
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
  }, []);

  return (
    <StyledApp>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <StyledHeading>DeFiChain Block Reward Countdown</StyledHeading>
          <p>
            Block reward will decrease from{" "}
            {round(TOTAL_REWARDS, DFI_DECIMAL_PLACES)} to{" "}
            {round(
              getCurrentTotalRewards(currentBlock + CYCLE_BLOCK_LENGTH),
              DFI_DECIMAL_PLACES
            )}{" "}
            DFI in approximately
          </p>

          <Countdown date={getReductionDate(currentBlock)} />

          <StyledMobileContainer>
            <Card
              title="Blocks Remaining:"
              label={`until ${getReductionBlock(currentBlock)}`}
            >
              {`${getRemainingBlocks(currentBlock)}`}
            </Card>
            <Card title="Average Block Time:" label="seconds">
              {`${round(AVERAGE_BLOCK_TIME, 4)}`}
            </Card>
            <RewardDistribution totalRewards={TOTAL_REWARDS} />
          </StyledMobileContainer>

          <StyledVerticalContainer>
            <StyledHorizontalContainer>
              <Card
                title="Blocks Remaining:"
                label={`until ${getReductionBlock(currentBlock)}`}
              >
                {`${getRemainingBlocks(currentBlock)}`}
              </Card>
              <Card title="Average Block Time:" label="seconds">
                {`${round(AVERAGE_BLOCK_TIME, 4)}`}
              </Card>
            </StyledHorizontalContainer>
            <RewardDistribution totalRewards={TOTAL_REWARDS} />
          </StyledVerticalContainer>
        </>
      )}
    </StyledApp>
  );
}
