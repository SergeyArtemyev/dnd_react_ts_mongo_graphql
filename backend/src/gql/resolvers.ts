import { IResolvers } from 'apollo-server-express';
import { GqlContext } from './GqlContext';

interface EntityResult {
    message: string;
}

const resolvers: IResolvers = {
    Test: {
        __resolverType(obj: any, context: GqlContext, info: any) {
            return 'Test';
        },
    },
    Query: {
        returnMessage: async (
            obj: any,
            args: null,
            ctx: GqlContext,
            info: any
        ): Promise<EntityResult> => {
            return new Promise((resolve, reject) => {
                resolve({ message: 'This is the test' });
            });
        },
    },
};

export default resolvers;
