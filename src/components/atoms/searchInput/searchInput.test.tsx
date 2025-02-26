import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import SearchInput from './searchInput';

describe('SearchInput Component', () => {
  const mockOnChangeText = jest.fn();
  const placeholderText = 'Search users...';

  it('renders correctly', () => {
    const {getByTestId} = render(
      <SearchInput
        value=""
        onChangeText={mockOnChangeText}
        placeholder={placeholderText}
      />,
    );
    expect(getByTestId('search-input')).toBeTruthy();
  });

  it('displays the correct placeholder', () => {
    const {getByPlaceholderText} = render(
      <SearchInput
        value=""
        onChangeText={mockOnChangeText}
        placeholder={placeholderText}
      />,
    );
    expect(getByPlaceholderText(placeholderText)).toBeTruthy();
  });

  it('calls onChangeText when text is entered', () => {
    const {getByTestId} = render(
      <SearchInput
        value=""
        onChangeText={mockOnChangeText}
        placeholder={placeholderText}
      />,
    );

    fireEvent.changeText(getByTestId('search-input'), 'test input');
    expect(mockOnChangeText).toHaveBeenCalledWith('test input');
  });
});
