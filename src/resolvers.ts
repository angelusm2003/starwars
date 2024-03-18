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
      return prisma.film.findUnique({
        where: { id: Number(id) },
        include: {
          characters: true,
          planets: true,
          starships: true,
          vehicles: true,
          species: true,
        },
      });
    },
    character: async (_parent, { id }) => {
      return prisma.character.findUnique({
        where: { id: Number(id) },
        include: {
          films: true,
          homeworld: true,
          species: true,
          starships: true,
          vehicles: true,
        },
      });
    },
    planet: async (_parent, { id }) => {
      return prisma.planet.findUnique({
        where: { id: Number(id) },
        include: {
          residents: true,
          films: true,
        },
      });
    },
    starship: async (_parent, { id }) => {
      return prisma.starship.findUnique({
        where: { id: Number(id) },
        include: {
          pilots: true,
          films: true,
        },
      });
    },
    vehicle: async (_parent, { id }) => {
      return prisma.vehicle.findUnique({
        where: { id: Number(id) },
        include: {
          pilots: true,
          films: true,
        },
      });
    },
    species: async (_parent, { id }) => {
      return prisma.species.findUnique({
        where: { id: Number(id) },
        include: {
          homeworld: true,
          people: true,
          films: true,
        },
      });
    },
  },
  Mutation: {
    updateFilm: async (_parent, { id, director, title }) => {
      const updatedFilm = await prisma.film.update({
        where: { id: Number(id) },
        data: {
          director,
          title,
        },
        include: {
          characters: true,
          planets: true,
          starships: true,
          vehicles: true,
          species: true,
        },
      });

      if (!updatedFilm) {
        throw new Error(`Film with ID ${id} not found.`);
      }

      return updatedFilm;
    },
    createCharacter: async (_parent, { input }) => {
      return prisma.character.create({
        data: input,
      });
    },
    updateCharacter: async (_parent, { id, input }) => {
      const updatedCharacter = await prisma.character.update({
        where: { id: Number(id) },
        data: input,
        include: {
          films: true,
          homeworld: true,
          species: true,
          starships: true,
          vehicles: true,
        },
      });

      if (!updatedCharacter) {
        throw new Error(`Character with ID ${id} not found.`);
      }

      return updatedCharacter;
    },
    deleteCharacter: async (_parent, { id }) => {
      await prisma.character.delete({
        where: { id: Number(id) },
      });

      return id;
    },
  },
};