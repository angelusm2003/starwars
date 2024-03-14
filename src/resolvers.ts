import { Resolvers } from './generated/graphql';
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
    updateFilm: async (_parent, { id, director, title }) => {
      // Update the film with the provided ID
      const updatedFilm = await prisma.film.update({
        where: { id },
        data: {
          director,
          title,
        },
      });
  
      // Check if the film was successfully updated
      if (!updatedFilm) {
        throw new Error(`Film with ID ${id} not found.`);
      }
  
      // Return the updated film
      return updatedFilm;
    },
  }
};
