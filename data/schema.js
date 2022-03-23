import resolvers from "./resolvers";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        language: String
        email: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
    }

    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        language: String
        email: String
    }

    type Query {
        getOneFriend(id: ID!): Friend
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default { schema };
