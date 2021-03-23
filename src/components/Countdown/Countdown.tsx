import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  date: Date;
}

const StyledCountdown = styled.div`
  display: flex;
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
          <p>{ timeLeft.days }</p>
          <p>days</p>
        </div>
        <div>
          <p>{ timeLeft.hours }</p>
          <p>hours</p>
        </div>
        <div>
          <p>{ timeLeft.minutes }</p>
          <p>minutes</p>
        </div>
        <div>
          <p>{ timeLeft.seconds }</p>
          <p>seconds</p>
        </div>
      </StyledCountdown>
      <p>Reward-Drop ETA date: { date.toUTCString() }</p>
    </>
  );
}