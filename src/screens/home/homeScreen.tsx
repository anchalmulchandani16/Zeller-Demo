import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {SearchInput, UserCard, UserTypeSelector} from '@components/index';
import {STRINGS} from '@utils/index';
import Styles from './styles';
import {LIST_ZELLER_CUSTOMERS} from '@services/queries';
import {navigate} from '@navigations/NavigationService';
import NavigationRoutes from '@navigations/navigationRoutes';

const HomeScreen = () => {
  const [selectedRole, setSelectedRole] = useState(STRINGS.ADMIN);
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const roleFilter = selectedRole ? {role: {eq: selectedRole}} : null;

  const {data, loading, error, refetch} = useQuery(LIST_ZELLER_CUSTOMERS, {
    variables: {filter: roleFilter},
  });

  const filteredUsers = Array.isArray(data?.listZellerCustomers?.items)
    ? data?.listZellerCustomers?.items.filter((user: {name: string}) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : [];

  if (loading) {
    return (
      <ActivityIndicator
        testID="loading-spinner"
        size="large"
        style={Styles.loading}
      />
    );
  }

  const handleRefresh = () => {
    setRefreshing(true);
    refetch().finally(() => {
      setSelectedRole('');
      setSearchQuery('');
      setRefreshing(false);
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <SafeAreaView style={Styles.container} testID="home-screen">
      {error ? (
        <Text testID="error-message" style={Styles.error}>
          {STRINGS.ERR_LOAD_USERS}
        </Text>
      ) : (
        <>
          <SearchInput value={searchQuery} onChangeText={handleSearch} />
          <Text style={Styles.header} testID="role-header">
            {STRINGS.USER_TYPE}
          </Text>

          <UserTypeSelector
            selectedRole={selectedRole}
            onSelect={role => {
              setSelectedRole(role);
              refetch({role});
            }}
          />
          <View style={Styles.separator} testID="separator-line" />

          <Text style={Styles.selectedRoleText} testID="selected-role-text">
            {selectedRole ? `${selectedRole} Users` : 'All Users'}
          </Text>

          <FlatList
            testID="user-list"
            data={filteredUsers || []}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <UserCard
                name={item.name}
                role={item.role}
                onPress={() =>
                  navigate(NavigationRoutes.USER_DETAILS_SCREEN, {item})
                }
              />
            )}
            refreshing={refreshing}
            onRefresh={handleRefresh}
            ListEmptyComponent={
              <Text style={Styles.error}>{STRINGS.USER_NOT_FOUND}</Text>
            }
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
