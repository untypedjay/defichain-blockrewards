import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  date: Date;
}

const StyledCountdown = styled.div`
  display: flex;
  background-color: var(--clr-secondary);
  width: 50%;
  justify-content: space-between;
  padding: 2em 2.5em;
  border-radius: var(--br-card);
`;

const StyledNumber = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const StyledLabel = styled.p`
  color: var(--clr-label);
  text-transform: uppercase;
  margin: 1em 0 0 0;
`;

export default function Countdown({ date }: Props) {
  const calculateTimeLeft = () => {
    const difference = +date - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [calculateTimeLeft]);

  return (
    <>
      <StyledCountdown>
        <div>
          <StyledNumber>{ timeLeft.days }</StyledNumber>
          <StyledLabel>days</StyledLabel>
        </div>
        <div>
          <StyledNumber>{ timeLeft.hours }</StyledNumber>
          <StyledLabel>hours</StyledLabel>
        </div>
        <div>
          <StyledNumber>{ timeLeft.minutes }</StyledNumber>
          <StyledLabel>minutes</StyledLabel>
        </div>
        <div>
          <StyledNumber>{ timeLeft.seconds }</StyledNumber>
          <StyledLabel>seconds</StyledLabel>
        </div>
      </StyledCountdown>
      <p>Reward-Drop ETA date: { date.toUTCString() }</p>
    </>
  );
}