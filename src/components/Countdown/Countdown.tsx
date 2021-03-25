import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { cardStyles } from '../../styles/CardStyle';
import { CountdownElement } from './index';

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
        <CountdownElement label="days">
          { timeLeft.days }
        </CountdownElement>
        <CountdownElement label="hours">
          { timeLeft.hours }
        </CountdownElement>
        <CountdownElement label="minutes">
          { timeLeft.minutes }
        </CountdownElement>
        <CountdownElement label="seconds">
          { timeLeft.seconds }
        </CountdownElement>
      </StyledCountdown>
      <p>Reward-Drop ETA date: { date.toUTCString() }</p>
    </>
  );
}