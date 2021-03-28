import ReactDOM from 'react-dom';
import React from 'react';
import Countdown from './Countdown';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Countdown date={new Date()}/>, div);
});

it('renders correctly', () => {
  render(<Countdown date={new Date()}/>);
});

it('matches snapshot', () => {
  const { asFragment } = render(<Countdown date={new Date()}/>);
  expect(asFragment()).toMatchSnapshot();
});