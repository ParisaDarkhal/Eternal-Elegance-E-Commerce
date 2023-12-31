import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    username: String!
    email: String!
    password: String!
    address: String!
  }
  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    image: String!
    quantity: Int!
  }

  type Query {
    users: [User]
    user(userId: ID): User
    products: [Product]
    product(productId: ID): Product
  }

  type Mutation {
    addUser(input: UserInput): User
    deleteUser(userId: ID!): User
    updateUser(userId: ID!, input: UserInput): User
    loginMutation(username: String!, password: String!): User
  }

  input UserInput {
    first_name: String!
    last_name: String!
    username: String!
    email: String!
    password: String!
    address: String!
  }
`;
export default typeDefs;
