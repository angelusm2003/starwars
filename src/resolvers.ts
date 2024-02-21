import { Resolvers, MutationAddNewAttributeOnArgs } from './generated/graphql';
import { PrismaClient } from '@prisma/client';
import fetch from 'node-fetch';

const prisma = new PrismaClient();

interface Context {
  modelName: string;
}

export const resolvers: Resolvers<Context> = {
  Query: {
    root: () => ({}),
    film: async (_parent, { id }) => {
      const response = await fetch(`https://swapi.dev/api/films/${id}`);
      return response.json();
    },
    // Implement other resolver functions for Star Wars API queries
  },
  Mutation: {
    addNewAttributeOn: async (_parent, { modelName, id, attribute, value }) => {
      let model;
      switch (modelName) {
        case 'Film':
          model = prisma.film.update({ where: { id: Number(id) }, data: { [attribute]: value } });
          break;
        case 'Person':
          model = prisma.person.update({ where: { id: Number(id) }, data: { [attribute]: value } });
          break;
        // Add cases for other models as needed
        default:
          throw new Error('Invalid model name');
      }

      await model;
      return 'Attribute added successfully';
    },
    // Implement other mutation resolver functions as needed
  },
};
