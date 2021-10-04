const {gql} = require('apollo-server-express')

const typeDefs = gql`
    
    type WhoisRecord {
        domainName: String!
    }


    # Queries
    type Query {
        getDomain: WhoisRecord!
    }

    # Mutations
    type Mutation {
        getUrl(url: String!): WhoisRecord!
    }

`

module.exports = { typeDefs }