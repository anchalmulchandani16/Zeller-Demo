import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import UserTypeSelector from './userTypeSelector';
import {STRINGS} from '@utils/index';

describe('UserTypeSelector Component', () => {
  const mockOnSelect = jest.fn();

  it('renders correctly', () => {
    const {getByTestId} = render(
      <UserTypeSelector selectedRole={STRINGS.ADMIN} onSelect={mockOnSelect} />,
    );
    expect(getByTestId('user-type-selector')).toBeTruthy();
  });

  it('displays the correct roles', () => {
    const {getByText} = render(
      <UserTypeSelector selectedRole={STRINGS.ADMIN} onSelect={mockOnSelect} />,
    );

    expect(getByText(STRINGS.ADMIN)).toBeTruthy();
    expect(getByText(STRINGS.MANAGER)).toBeTruthy();
  });

  it('selects a role and calls onSelect', () => {
    const {getByText} = render(
      <UserTypeSelector selectedRole={STRINGS.ADMIN} onSelect={mockOnSelect} />,
    );

    fireEvent.press(getByText(STRINGS.MANAGER));
    expect(mockOnSelect).toHaveBeenCalledWith(STRINGS.MANAGER);
  });
});
