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

const StyledHeading = styled.h2`
  font-size: 1.1rem;
`;

export default function Card({ title, children, label }: Props) {
  return (
    <StyledContainer>
      <StyledHeading>{ title }</StyledHeading>
      <StyledCard>
        <StyledContent>{ children }</StyledContent>
        <StyledLabel>{ label }</StyledLabel>
      </StyledCard>
    </StyledContainer>
  );
}