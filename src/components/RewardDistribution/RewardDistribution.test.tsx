import ReactDOM from 'react-dom';
import React from 'react';
import RewardDistribution from './RewardDistribution';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RewardDistribution/>, div);
});

it('renders correctly', () => {
  render(<RewardDistribution/>);
});

it('matches snapshot', () => {
  const { asFragment } = render(<RewardDistribution/>);
  expect(asFragment()).toMatchSnapshot();
});