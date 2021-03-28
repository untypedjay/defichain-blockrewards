import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loader/>, div);
});

it('renders correctly', () => {
  render(<Loader/>);
});

it('matches snapshot', () => {
  const { asFragment } = render(<Loader/>);
  expect(asFragment()).toMatchSnapshot();
});