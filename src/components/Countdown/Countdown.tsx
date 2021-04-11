import React, { useCallback, useEffect, useState } from 'react';
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
  const calculateTimeLeft = useCallback(() => {
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
  }, [date]);

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
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
      <p>Reward-Rise ETA date: { date.toUTCString() }</p>
    </>
  );
}