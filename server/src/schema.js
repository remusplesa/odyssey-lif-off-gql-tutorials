import { gql } from 'apollo-server';

const typeDefs = gql`
type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome:[Track!]
    track(id: ID!): Track
}

type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse
}

type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
}

"A track is a group of modules that teaches about a specific topic"
type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
}

type Module {
    id: ID!
    title: String!
    length: Int
}

"Author of a complete track"
type Author {
    id: ID!
    name: String!
    photo: String
}

`;

export default typeDefs;