import React from 'react';
import {render} from '@testing-library/react-native';
import Avatar from './avatar';

describe('Avatar Component', () => {
  test('renders correctly with given name', () => {
    const {getByText} = render(<Avatar name="John" />);
    expect(getByText('J')).toBeTruthy();
  });

  test('renders different initials for different names', () => {
    const {getByText, rerender} = render(<Avatar name="Alice" />);
    expect(getByText('A')).toBeTruthy();

    rerender(<Avatar name="Bob" />);
    expect(getByText('B')).toBeTruthy();
  });
});
