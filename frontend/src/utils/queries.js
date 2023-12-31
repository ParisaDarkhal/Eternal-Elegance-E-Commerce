import { gql } from "@apollo/client";

// export const USER_BY_USERNAME = gql`
//   query userByUsername($username: String!, $password: String!) {
//     userByUsername(username: $username, password: $password) {
//       id
//       first_name
//     }
//   }
// `;

export const GET_PRODUCTS = gql`
  query products {
    products {
      id
      image
      name
      description
      quantity
      price
    }
  }
`;

export const PRODUCT_BY_ID = gql`
  query product($productId: ID) {
    product(productId: $productId) {
      id
      name
      image
      price
    }
  }
`;
