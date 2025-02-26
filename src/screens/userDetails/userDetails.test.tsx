import React from 'react';
import {render} from '@testing-library/react-native';
import UserDetailsScreen from './userDetailsScreen';
import {useRoute} from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: jest.fn(),
}));

describe('UserDetailsScreen Component', () => {
  it('renders correctly with user details', () => {
    (useRoute as jest.Mock).mockReturnValue({
      params: {item: {name: 'John Doe'}},
    });
    const {getByText} = render(<UserDetailsScreen />);
    expect(getByText('Welcome John Doe')).toBeTruthy();
  });

  it('handles missing params gracefully', () => {
    (useRoute as jest.Mock).mockReturnValue({params: {}});
    const {getByText} = render(<UserDetailsScreen />);
    expect(getByText('Welcome Guest')).toBeTruthy();
  });
});
