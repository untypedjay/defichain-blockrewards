import { FIRST_BLOCK_UTC, REDUCTION_BLOCK } from '../constants/common';

export const getRemainingBlocks = (block: number) => {
  return REDUCTION_BLOCK - block;
};

export const getAverageBlockTime = (block: number) => {
  const now = new Date().valueOf();
  const secondsSinceFirstBlock = (now - new Date(FIRST_BLOCK_UTC).getTime()) / 1000;
  return secondsSinceFirstBlock / block;
};

export const getReductionDate = (currentBlock: number) => {
  const remainingTime = getRemainingBlocks(currentBlock) * getAverageBlockTime(currentBlock);
  const reductionDate = new Date();
  return new Date(reductionDate.getTime() + 1000 * remainingTime)
};