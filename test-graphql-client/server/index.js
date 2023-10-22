import { ApolloServer, gql } from 'apollo-server'

let hello = [{ text: 'Hello world!' }]

const typeDefs = gql`
  type Hello {
    text: String
  }
  type Query {
    hellos: [Hello!]!
  }
  type Mutation {
    addHello(text: String!): Hello!
  }
`

const resolvers = {
  Query: {
    hellos: () => {
      return hello
    },
  },
  Mutation: {
    addHello: (root, args) => {
      const h = { text: args.text }
      hello = [...hello, h]
      return h
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
