import styled, { css } from "styled-components";

export const cardStyles = css`
  background-color: var(--clr-secondary);
  border-radius: var(--br-card);
  padding: 2em 2.5em;
  box-shadow: var(--card-box-shadow);

  @media (max-width: 330px) {
    padding: 0.8em 1em;
  }
`;

export const StyledContent = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;

  @media (max-width: 380px) {
    font-size: 1.5rem;
  }
`;

export const StyledLabel = styled.p`
  color: var(--clr-label);
  text-transform: uppercase;
  margin: 1em 0 0 0;

  @media (max-width: 380px) {
    font-size: 0.7rem;
  }

  @media (max-width: 310px) {
    font-size: 0.5rem;
  }
`;
