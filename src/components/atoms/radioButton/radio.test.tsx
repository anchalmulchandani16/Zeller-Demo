import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import RadioButton from './radioButton';

describe('RadioButton Component', () => {
  const mockOnPress = jest.fn();
  const label = 'Option 1';

  it('renders correctly', () => {
    const {getByTestId} = render(
      <RadioButton selected={false} onPress={mockOnPress} label={label} />,
    );
    expect(getByTestId(`radio-button-${label}`)).toBeTruthy();
  });

  it('displays the correct label', () => {
    const {getByText} = render(
      <RadioButton selected={false} onPress={mockOnPress} label={label} />,
    );
    expect(getByText(label)).toBeTruthy();
  });

  it('calls onPress when tapped', () => {
    const {getByTestId} = render(
      <RadioButton selected={false} onPress={mockOnPress} label={label} />,
    );

    fireEvent.press(getByTestId(`radio-button-${label}`));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
