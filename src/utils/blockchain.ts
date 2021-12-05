import {
  CYCLE_BLOCK_LENGTH,
  INITIAL_CYCLE_BLOCK,
  INITIAL_CYCLE_BLOCK_UTC,
  REWARD_DECREASE_RATE,
  TOTAL_REWARD_INITIAL_CYCLE,
} from "../constants";

export const getReductionBlock = (currentBlock: number) => {
  return (
    INITIAL_CYCLE_BLOCK +
    (getCurrentCycle(currentBlock) + 1) * CYCLE_BLOCK_LENGTH
  );
};

export const getRemainingBlocks = (block: number) => {
  return getReductionBlock(block) - block;
};

export const getAverageBlockTime = (block: number) => {
  const now = new Date().valueOf();
  const secondsSinceInitialCycleBlock =
    (now - new Date(INITIAL_CYCLE_BLOCK_UTC).getTime()) / 1000;
  return secondsSinceInitialCycleBlock / (block - INITIAL_CYCLE_BLOCK);
};

export const getReductionDate = (currentBlock: number) => {
  const remainingTime = getRemainingBlocks(currentBlock) * getAverageBlockTime(currentBlock);
  const reductionDate = new Date();
  return new Date(reductionDate.getTime() + 1000 * remainingTime);
};

export const getCurrentCycle = (currentBlock: number) => {
  let cycleNumber = 1;
  let cycleStart = INITIAL_CYCLE_BLOCK;

  while (cycleStart < currentBlock) {
    cycleNumber++;
    cycleStart = INITIAL_CYCLE_BLOCK + cycleNumber * CYCLE_BLOCK_LENGTH;
  }

  return cycleNumber - 1;
};

export const getCurrentTotalRewards = (currentBlock: number) => {
  const cycle = getCurrentCycle(currentBlock);
  return TOTAL_REWARD_INITIAL_CYCLE * REWARD_DECREASE_RATE ** cycle;
};
