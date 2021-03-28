import ReactDOM from 'react-dom';
import React from 'react';
import CountdownElement from './CountdownElement';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CountdownElement label="days">{ 3 }</CountdownElement>, div);
});

it('renders correctly', () => {
  render(<CountdownElement label="days">{ 3 }</CountdownElement>);
});

it('matches snapshot', () => {
  const { asFragment } = render(<CountdownElement label="days">{ 3 }</CountdownElement>);
  expect(asFragment()).toMatchSnapshot();
});