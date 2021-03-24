import React from 'react';
import styled from 'styled-components';
import { cardStyles, StyledContent, StyledLabel } from '../../styles/CardStyle';

interface Props {
  title: string;
  children: string;
  label: string;
}

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledCard = styled.div`
  ${cardStyles};
`;

export default function Card({ title, children, label }: Props) {
  return (
    <StyledContainer>
      <h3>{ title }</h3>
      <StyledCard>
        <StyledContent>{ children }</StyledContent>
        <StyledLabel>{ label }</StyledLabel>
      </StyledCard>
    </StyledContainer>
  );
}