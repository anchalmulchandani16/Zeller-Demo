jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  RN.Easing.poly = jest.fn();
  return RN;
});

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
  useRoute: () => jest.fn(),
  useNavigationParam: jest.fn(
    jest.requireActual('@react-navigation/native').useNavigationParam,
  ),
}));

jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(() => ({
    Navigator: ({children}) => children,
    Screen: () => null,
  })),
}));
