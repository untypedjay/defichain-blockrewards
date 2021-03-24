import React from 'react';
import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  
  @media (max-width: 830px) {
    margin-top: -20em;
    height: 100vh;
  }
`;

const StyledAnimation = styled.div`
  transition: all .25s ease;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: var(--anm-border) solid var(--clr-text);
    width: var(--anm-size);
    height: var(--anm-size);
    border-left: var(--anm-border) solid transparent;
    border-bottom: var(--anm-border) solid transparent;
    animation: ${loading} var(--anm-time) ease infinite;
    z-index: 2;
  }
  
  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    border-radius: 50%;
    border: var(--anm-border) dashed var(--clr-text);
    width: var(--anm-size);
    height: var(--anm-size);
    border-left: var(--anm-border) solid transparent;
    border-bottom: var(--anm-border) solid transparent;
    animation: ${loading} var(--anm-time) linear infinite;
  }
`;

export default function Loader() {
  return (
    <StyledLoader>
      <StyledAnimation/>
    </StyledLoader>
  );
}