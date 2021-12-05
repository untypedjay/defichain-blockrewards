import styled from "styled-components";
import { CYCLE_BLOCK_LENGTH, DFI_DECIMAL_PLACES } from "../../constants";
import useCurrentBlock from "../../hooks/useCurrentBlock";
import { getAverageBlockTime, getCurrentTotalRewards, getReductionBlock, getReductionDate, getRemainingBlocks, round } from "../../utils";
import { Card } from "../Card";
import { Countdown } from "../Countdown";
import { Layout } from "../Layout";
import { RewardDistribution } from "../RewardDistribution";

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

export default function Overview() {
    const [currentBlock, isLoading] = useCurrentBlock();
  
    const AVERAGE_BLOCK_TIME = getAverageBlockTime(currentBlock);
    const TOTAL_REWARDS = getCurrentTotalRewards(currentBlock);
    
    return (
        <Layout isLoading={isLoading}>
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
        </Layout>
    );
}