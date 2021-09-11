import React from "react";
import { Card } from "../Card";
import styled from "styled-components";
import { toPercentage } from "../../utils";
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

export default function RewardDistribution() {
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
            <td>135</td>
            <td>{toPercentage(MINING_REWARD)}</td>
          </tr>
          <tr>
            <td>Community Fund</td>
            <td>19.9</td>
            <td>{toPercentage(COMMUNITY_FUND)}</td>
          </tr>
          <tr>
            <td>Anchor Reward</td>
            <td>0.1</td>
            <td>{toPercentage(ANCHOR_REWARD)}</td>
          </tr>
          <tr>
            <td>DEX Liquidity Mining</td>
            <td>103.1</td>
            <td>{toPercentage(DEX_LIQUIDTY_MINING)}</td>
          </tr>
          <tr>
            <td>Atomic Swap Incentives</td>
            <td>50</td>
            <td>{toPercentage(ATOMIC_SWAP_INCENTIVES)}</td>
          </tr>
          <tr>
            <td>Futures Incentives</td>
            <td>50</td>
            <td>{toPercentage(FUTURES_INCENTIVES)}</td>
          </tr>
          <tr>
            <td>Options Incentives</td>
            <td>40</td>
            <td>{toPercentage(OPTIONS_INCENTIVES)}</td>
          </tr>
          <tr>
            <td>Unallocated Incentives</td>
            <td>6.94</td>
            <td>{toPercentage(UNALLOCATED_INCENTIVES)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>TOTAL</td>
            <td>405.04</td>
            <td>100%</td>
          </tr>
        </tfoot>
      </StyledTable>
    </Card>
  );
}
