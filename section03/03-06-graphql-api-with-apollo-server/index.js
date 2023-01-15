// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    qqq: String
  }
`;

const resolvers = {
  Query: {
    qqq: () => {
      return "Hello World!";
    },
  },
};

const app = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  cors: true,  // 모든 사이트 허용하고 싶을 때
  // cors: { origin: ["https://naver.com", "https://daum.net"] } // 특정 사이트만 지정하고 싶을 때
});

app.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url} on port ${3000}`);
});