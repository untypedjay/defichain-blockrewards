import { Card } from "../Card";
import styled from "styled-components";
import { round, toPercentage } from "../../utils";
import {
  ANCHOR_REWARD,
  ATOMIC_SWAP_INCENTIVES,
  COMMUNITY_FUND,
  DEX_LIQUIDTY_MINING,
  DFI_DECIMAL_PLACES,
  FUTURES_INCENTIVES,
  MINING_REWARD,
  OPTIONS_INCENTIVES,
  UNALLOCATED_INCENTIVES,
} from "../../constants";

const StyledTable = styled.table`
  margin: auto;
`;

const StyledTableHeaderCell = styled.th`
  padding: 0;
  text-align: left;
`;

const StyledTableBody = styled.tbody`
  text-align: left;

  td {
    padding: 4px 20px 8px 0;
  }
`;

const StyledTableFooter = styled.tfoot`
  font-weight: bold;
  text-align: left;
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
            <StyledTableHeaderCell>Area</StyledTableHeaderCell>
            <StyledTableHeaderCell>DFI / Block</StyledTableHeaderCell>
            <StyledTableHeaderCell>Proportion</StyledTableHeaderCell>
          </tr>
        </thead>
        <StyledTableBody>
          <tr>
            <td>Mining Reward</td>
            <td>{round(totalRewards * MINING_REWARD, DFI_DECIMAL_PLACES)}</td>
            <td>{toPercentage(MINING_REWARD)}</td>
          </tr>
          <tr>
            <td>Community Fund</td>
            <td>{round(totalRewards * COMMUNITY_FUND, DFI_DECIMAL_PLACES)}</td>
            <td>{toPercentage(COMMUNITY_FUND)}</td>
          </tr>
          <tr>
            <td>Anchor Reward</td>
            <td>{round(totalRewards * ANCHOR_REWARD, DFI_DECIMAL_PLACES)}</td>
            <td>{toPercentage(ANCHOR_REWARD)}</td>
          </tr>
          <tr>
            <td>DEX Liquidity Mining</td>
            <td>
              {round(totalRewards * DEX_LIQUIDTY_MINING, DFI_DECIMAL_PLACES)}
            </td>
            <td>{toPercentage(DEX_LIQUIDTY_MINING)}</td>
          </tr>
          <tr>
            <td>Atomic Swap Incentives</td>
            <td>
              {round(totalRewards * ATOMIC_SWAP_INCENTIVES, DFI_DECIMAL_PLACES)}
            </td>
            <td>{toPercentage(ATOMIC_SWAP_INCENTIVES)}</td>
          </tr>
          <tr>
            <td>Futures Incentives</td>
            <td>
              {round(totalRewards * FUTURES_INCENTIVES, DFI_DECIMAL_PLACES)}
            </td>
            <td>{toPercentage(FUTURES_INCENTIVES)}</td>
          </tr>
          <tr>
            <td>Options Incentives</td>
            <td>
              {round(totalRewards * OPTIONS_INCENTIVES, DFI_DECIMAL_PLACES)}
            </td>
            <td>{toPercentage(OPTIONS_INCENTIVES)}</td>
          </tr>
          <tr>
            <td>Unallocated Incentives</td>
            <td>
              {round(totalRewards * UNALLOCATED_INCENTIVES, DFI_DECIMAL_PLACES)}
            </td>
            <td>{toPercentage(UNALLOCATED_INCENTIVES)}</td>
          </tr>
        </StyledTableBody>
        <StyledTableFooter>
          <tr>
            <td>TOTAL</td>
            <td>{round(totalRewards, DFI_DECIMAL_PLACES)}</td>
            <td>100%</td>
          </tr>
        </StyledTableFooter>
      </StyledTable>
    </Card>
  );
}
