import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Note {
        _id: ID!,
        title: String!,
        date: Date,
        content: String!
    }

    scalar Date

    type Query {
        getNote(_id: ID!): Note
        allNotes: [Note]
    }

    input NoteInput {
        title: String!
        content: String!
    }

    type Mutation {
        createNote(input: NoteInput) : Note
    }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
