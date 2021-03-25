import React from 'react';
import { StyledContent, StyledLabel } from '../../styles/CardStyle';

interface Props {
  children: number;
  label: string;
}

export default function CountdownElement({ children, label }: Props) {
  return (
    <div>
      <StyledContent>{ children }</StyledContent>
      <StyledLabel>{ label }</StyledLabel>
    </div>
  );
}