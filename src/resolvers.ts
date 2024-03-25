//import { Resolvers, QueryResolvers, MutationResolvers } from './generated/graphql'
import { FilmResolvers, MutationResolvers, QueryResolvers, ResolverTypeWrapper, Resolvers } from './generated/graphql';
import { fetchCharactersCount, getCharacterNames } from './dataFetcher'; // Import the functions from dataFetcher.ts
import { Film, PrismaClient } from '@prisma/client';
import fetch from 'node-fetch';

const prisma = new PrismaClient();

interface Context {
  modelName: string;
}
export const resolvers: Resolvers<Context> = {
  Query: {
    root: () => ({}),
    //film: async (_parent: any, { id }: { id: number }) => {
    getFilm: async (_parent: any, { id }: any, context: Context): Promise<Film | null> => {
      //return prisma.film.findUnique({
      const theFilm = await prisma.film.findUnique({
        where: { id: Number(id) },
        include: {
          characters: true,
          planets: true,
          starships: true,
          vehicles: true,
          species: true,
        },
      });

      return theFilm;
    },
    //character: async (_parent: any, { id }: { id: number }) => {
    character: async (_parent: any, { id }: any) => { 
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
    //planet: async (_parent: any, { id }: { id: number }) => {
      planet: async (_parent: any, { id }: any) => {
      return prisma.planet.findUnique({
        where: { id: Number(id) },
        include: {
          residents: true,
          films: true,
        },
      });
    },
    //starship: async (_parent: any, { id }: { id: number }) => {
      starship: async (_parent: any, { id }: any) => {
      return prisma.starship.findUnique({
        where: { id: Number(id) },
        include: {
          pilots: true,
          films: true,
        },
      });
    },
    //vehicle: async (_parent: any, { id }: { id: number }) => {
      vehicle: async (_parent: any, { id }: any) => {
      return prisma.vehicle.findUnique({
        where: { id: Number(id) },
        include: {
          pilots: true,
          films: true,
        },
      });
    },
    //species: async (_parent: any, { id }: { id: number }) => {
      species: async (_parent: any, { id }: any) => {
      return prisma.species.findUnique({
        where: { id: Number(id) },
        include: {
          homeworld: true,
          people: true,
          films: true,
        },
      });
    },

    combinedData: async () => {
      const characterCount = await fetchCharactersCount();
      const localCharacterNames = await getCharacterNames();
    
      return {
        characterCount,
        localCharacterNames,
      };
    },

  } as unknown as QueryResolvers<Context>, // Adjusted type declaration for Query

  Mutation: {
    //updateFilm: async (_parent: any, { id, director, title }: { id: number, director: string, title: string }) => {
      updateFilm: async (_parent: any, { id, director, title }: any) => {
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
    //createCharacter: async (_parent: any, { input }: { input: { name: string, height?: string, mass?: string, hairColor?: string, skinColor?: string, eyeColor?: string, birthYear?: string, gender?: string } }) => {
    createCharacter: async (_parent: any, { input }: any) => {
      return prisma.character.create({
        data: input,
      });
    },
    //updateCharacter: async (_parent: any, { id, input }: { id: number, input: { name?: string, height?: string, mass?: string, hairColor?: string, skinColor?: string, eyeColor?: string, birthYear?: string, gender?: string } }) => {
    updateCharacter: async (_parent: any, { id, input }: any) => {
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
    //deleteCharacter: async (_parent: any, { id }: { id: number }) => {
      deleteCharacter: async (_parent: any, { id }: any) => {
      await prisma.character.delete({
        where: { id: Number(id) },
      });

      return id;
    },
  } as unknown as MutationResolvers<Context>, // Adjusted type declaration for Mutation
};