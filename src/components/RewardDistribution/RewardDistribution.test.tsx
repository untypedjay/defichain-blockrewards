import ReactDOM from 'react-dom';
import React from 'react';
import RewardDistribution from './RewardDistribution';
import { cleanup, render } from '@testing-library/react';

describe('<RewardDistribution>', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RewardDistribution/>, div);
  });

  it('renders correctly', () => {
    render(<RewardDistribution/>);
  });

  it('includes mining reward column', () => {
    const rewardDistribution = render(<RewardDistribution/>);
    expect(rewardDistribution.getByText('Mining Reward')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<RewardDistribution/>);
    expect(asFragment()).toMatchSnapshot();
  });
});