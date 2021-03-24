import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledLabel, StyledContent, cardStyles } from '../../styles/CardStyle';

interface Props {
  date: Date;
}

const StyledCountdown = styled.div`
  ${cardStyles};
  display: flex;
  width: 100%;
  justify-content: space-between;
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
          <StyledContent>{ timeLeft.days }</StyledContent>
          <StyledLabel>days</StyledLabel>
        </div>
        <div>
          <StyledContent>{ timeLeft.hours }</StyledContent>
          <StyledLabel>hours</StyledLabel>
        </div>
        <div>
          <StyledContent>{ timeLeft.minutes }</StyledContent>
          <StyledLabel>minutes</StyledLabel>
        </div>
        <div>
          <StyledContent>{ timeLeft.seconds }</StyledContent>
          <StyledLabel>seconds</StyledLabel>
        </div>
      </StyledCountdown>
      <p>Reward-Drop ETA date: { date.toUTCString() }</p>
    </>
  );
}