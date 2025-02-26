import {gql} from '@apollo/client';

export const LIST_ZELLER_CUSTOMERS = gql`
  query listZellerCustomers($filter: TableZellerCustomerFilterInput) {
    listZellerCustomers(filter: $filter) {
      items {
        id
        name
        email
        role
      }
    }
  }
`;
