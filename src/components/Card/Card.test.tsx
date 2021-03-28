import ReactDOM from 'react-dom';
import React from 'react';
import Card from './Card';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card title="Title" label="Label">Test</Card>, div);
});

it('renders correctly', () => {
  render(<Card title="Title" label="Label">Test</Card>);
});

it('matches snapshot', () => {
  const { asFragment } = render(<Card title="Title" label="Label">Test</Card>);
  expect(asFragment()).toMatchSnapshot();
});