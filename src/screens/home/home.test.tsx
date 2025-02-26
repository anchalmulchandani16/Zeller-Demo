import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import HomeScreen from './homeScreen';
import {LIST_ZELLER_CUSTOMERS} from '@services/queries';
import {navigate} from '@navigations/NavigationService';
import {STRINGS} from '@utils/index';
import NavigationRoutes from '@navigations/navigationRoutes';

jest.mock('@navigations/NavigationService', () => ({
  navigate: jest.fn(),
}));

const mockUsers = [
  {id: '1', name: 'John Doe', role: 'ADMIN'},
  {id: '2', name: 'Jane Smith', role: 'MANAGER'},
];

const mocks = [
  {
    request: {
      query: LIST_ZELLER_CUSTOMERS,
      variables: {filter: {role: {eq: 'ADMIN'}}},
    },
    result: {
      data: {
        listZellerCustomers: {
          items: mockUsers,
        },
      },
    },
  },

  {
    request: {
      query: LIST_ZELLER_CUSTOMERS,
      variables: {filter: null},
    },
    result: {
      data: {
        listZellerCustomers: {
          items: [],
        },
      },
    },
  },
];

describe('HomeScreen Component', () => {
  it('renders loading state', () => {
    const {getByTestId} = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <HomeScreen />
      </MockedProvider>,
    );
    expect(getByTestId('loading-spinner')).toBeTruthy();
  });

  it('renders user list after fetching data', async () => {
    const {findByText} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomeScreen />
      </MockedProvider>,
    );

    // Wait for data to load
    const userItem = await findByText('John Doe');
    expect(userItem).toBeTruthy();
  });

  it('handles API error and displays error message', async () => {
    const errorMock = [
      {
        request: {query: LIST_ZELLER_CUSTOMERS, variables: {}},
        error: new Error('Network error'),
      },
    ];

    const {getByTestId} = render(
      <MockedProvider mocks={errorMock} addTypename={false}>
        <HomeScreen />
      </MockedProvider>,
    );

    await waitFor(() =>
      expect(getByTestId('error-message')).toHaveTextContent(
        STRINGS.ERR_LOAD_USERS,
      ),
    );
  });

  it('searches users by name', async () => {
    const {getByPlaceholderText, getByText, queryByText} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomeScreen />
      </MockedProvider>,
    );

    await waitFor(() => expect(getByText('John Doe')).toBeTruthy());
    fireEvent.changeText(getByPlaceholderText('Search...'), 'Jane');
    await waitFor(() => expect(queryByText('John Doe')).toBeNull());
  });

  it('navigates to user details screen when user card is clicked', async () => {
    const {getByText} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomeScreen />
      </MockedProvider>,
    );
    await waitFor(() => expect(getByText('John Doe')).toBeTruthy());
    fireEvent.press(getByText('John Doe'));
    expect(navigate).toHaveBeenCalledWith(
      NavigationRoutes.USER_DETAILS_SCREEN,
      {
        item: mockUsers[0],
      },
    );
  });

  it('refreshes data on pull-down', async () => {
    const {getByText, getByTestId} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomeScreen />
      </MockedProvider>,
    );
    await waitFor(() => expect(getByText('John Doe')).toBeTruthy());
    fireEvent(getByTestId('home-screen'), 'refresh');
    await waitFor(() => expect(getByText('John Doe')).toBeTruthy());
  });

  it('filters users based on selected role', async () => {
    const {getByTestId, getByText} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomeScreen />
      </MockedProvider>,
    );

    await waitFor(() => expect(getByText('John Doe')).toBeTruthy());
    fireEvent.press(getByTestId('radio-button-ADMIN'));
    await waitFor(() => {
      const roleText = getByTestId('selected-role-text');
      expect(roleText).toHaveTextContent('ADMIN Users');
    });
  });
});
