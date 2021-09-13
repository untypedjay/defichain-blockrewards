import { Card } from "../Card";
import styled from "styled-components";
import { round, toPercentage } from "../../utils";
import {
  ANCHOR_REWARD,
  ATOMIC_SWAP_INCENTIVES,
  COMMUNITY_FUND,
  DEX_LIQUIDTY_MINING,
  FUTURES_INCENTIVES,
  MINING_REWARD,
  OPTIONS_INCENTIVES,
  UNALLOCATED_INCENTIVES,
} from "../../constants";

const StyledTable = styled.table`
  margin: auto;
`;

interface Props {
  totalRewards: number;
}

export default function RewardDistribution({ totalRewards }: Props) {
  return (
    <Card title="Current Reward Distribution:">
      <StyledTable>
        <thead>
          <tr>
            <th>Area</th>
            <th>DFI per block</th>
            <th>Proportion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mining Reward</td>
            <td>{round(totalRewards * MINING_REWARD)}</td>
            <td>{toPercentage(MINING_REWARD)}</td>
          </tr>
          <tr>
            <td>Community Fund</td>
            <td>{round(totalRewards * COMMUNITY_FUND)}</td>
            <td>{toPercentage(COMMUNITY_FUND)}</td>
          </tr>
          <tr>
            <td>Anchor Reward</td>
            <td>{round(totalRewards * ANCHOR_REWARD)}</td>
            <td>{toPercentage(ANCHOR_REWARD)}</td>
          </tr>
          <tr>
            <td>DEX Liquidity Mining</td>
            <td>{round(totalRewards * DEX_LIQUIDTY_MINING)}</td>
            <td>{toPercentage(DEX_LIQUIDTY_MINING)}</td>
          </tr>
          <tr>
            <td>Atomic Swap Incentives</td>
            <td>{round(totalRewards * ATOMIC_SWAP_INCENTIVES)}</td>
            <td>{toPercentage(ATOMIC_SWAP_INCENTIVES)}</td>
          </tr>
          <tr>
            <td>Futures Incentives</td>
            <td>{round(totalRewards * FUTURES_INCENTIVES)}</td>
            <td>{toPercentage(FUTURES_INCENTIVES)}</td>
          </tr>
          <tr>
            <td>Options Incentives</td>
            <td>{round(totalRewards * OPTIONS_INCENTIVES)}</td>
            <td>{toPercentage(OPTIONS_INCENTIVES)}</td>
          </tr>
          <tr>
            <td>Unallocated Incentives</td>
            <td>{round(totalRewards * UNALLOCATED_INCENTIVES)}</td>
            <td>{toPercentage(UNALLOCATED_INCENTIVES)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>TOTAL</td>
            <td>{round(totalRewards)}</td>
            <td>100%</td>
          </tr>
        </tfoot>
      </StyledTable>
    </Card>
  );
}
