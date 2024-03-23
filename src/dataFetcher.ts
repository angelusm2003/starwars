import fetch from 'node-fetch';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const fetchCharactersCount = async () => {
  const response = await fetch('https://swapi.dev/api/people/');
  const data = await response.json();
  return data.count; // Assuming the API returns the count of characters
};

export const getCharacterNames = async () => {
  const characters = await prisma.character.findMany({
    select: { name: true },
  });
  return characters.map((character) => character.name);
};
