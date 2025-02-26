import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import SplashScreen from './splashScreen';
import NavigationRoutes from '@navigations/navigationRoutes';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('SplashScreen Component', () => {
  it('renders the logo correctly', () => {
    const {getByTestId} = render(
      <SplashScreen navigation={{replace: jest.fn()}} />,
    );
    expect(getByTestId('splash-logo')).toBeTruthy();
  });

  it('navigates to home screen after timeout', async () => {
    const mockReplace = jest.fn();
    render(<SplashScreen navigation={{replace: mockReplace}} />);
    jest.runAllTimers();
    await waitFor(() => {
      expect(mockReplace).toHaveBeenCalledWith(NavigationRoutes.HOME_SCREEN);
    });
  });
});
