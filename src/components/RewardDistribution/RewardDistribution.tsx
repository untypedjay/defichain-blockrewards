import React from 'react';
import { Card } from '../Card';
import styled from 'styled-components';

const StyledTable = styled.table`
  margin: auto;
`;

export default function RewardDistribution() {
  return (
    <Card title="Reward Distribution:">
      <StyledTable>
        <thead>
          <tr>
            <th>Area</th>
            <th>DFI per block</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mining Reward</td><td>135</td>
          </tr>
          <tr>
            <td>Community Fund</td><td>19.9</td>
          </tr>
          <tr>
            <td>Anchor Reward</td><td>0.1</td>
          </tr>
          <tr>
            <td>DEX Liquidity Mining</td><td>103.1</td>
          </tr>
        </tbody>
      </StyledTable>
    </Card>
  );
}