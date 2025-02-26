import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import UserCard from './userCard';

describe('UserCard Component', () => {
  const mockOnPress = jest.fn();
  const testUser = {name: 'John Doe', role: 'Admin'};

  it('renders correctly', () => {
    const {getByTestId} = render(
      <UserCard
        name={testUser.name}
        role={testUser.role}
        onPress={mockOnPress}
      />,
    );
    expect(getByTestId('user-card')).toBeTruthy();
  });

  it('displays the correct name and role', () => {
    const {getByText} = render(
      <UserCard
        name={testUser.name}
        role={testUser.role}
        onPress={mockOnPress}
      />,
    );

    expect(getByText(testUser.name)).toBeTruthy();
    expect(getByText(testUser.role)).toBeTruthy();
  });

  it('calls onPress when tapped', () => {
    const {getByTestId} = render(
      <UserCard
        name={testUser.name}
        role={testUser.role}
        onPress={mockOnPress}
      />,
    );

    fireEvent.press(getByTestId('user-card'));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
