import gql from 'graphql-tag'

export default gql`
  query {
    organization(login: "vuejs") {
      repositories(first: 50, orderBy: { field: STARGAZERS, direction: DESC }) {
        nodes {
          name
          description
          createdAt
          updatedAt
          url
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`
