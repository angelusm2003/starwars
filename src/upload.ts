import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fetchDataAndStore() {
  try {
    // Fetch data from SWAPI for films
    const filmsResponse = await axios.get('https://swapi.dev/api/films/');
    const films = filmsResponse.data.results;

    // Transform and store films data
    for (const film of films) {
      await prisma.film.create({
        data: {
          title: film.title,
          director: film.director,
          releaseDate: new Date(film.release_date).toISOString(),
          // Add other properties as needed
        },
      });
    }

    const charactersResponse = await axios.get('https://swapi.dev/api/people/');
    const characters = charactersResponse.data.results;

    // Transform and store characters data
    for (const character of characters) {
      await prisma.character.create({  // Corrected 'character' to 'character'
        data: {
          name: character.name,
          // Add other properties as needed
        },
      });
    }

    // Fetch data from SWAPI for planets
    const planetsResponse = await axios.get('https://swapi.dev/api/planets/');
    const planets = planetsResponse.data.results;

    // Transform and store planets data
    for (const planet of planets) {
      await prisma.planet.create({
        data: {
          name: planet.name,
          // Add other properties as needed
        },
      });
    }

    // Fetch data from SWAPI for vehicles
    const vehiclesResponse = await axios.get('https://swapi.dev/api/vehicles/');
    const vehicles = vehiclesResponse.data.results;

    // Transform and store vehicles data
    for (const vehicle of vehicles) {
      await prisma.vehicle.create({
        data: {
          name: vehicle.name,
          // Add other properties as needed
        },
      });
    }

    // Fetch data from SWAPI for starships
    const starshipsResponse = await axios.get('https://swapi.dev/api/starships/');
    const starships = starshipsResponse.data.results;

    // Transform and store starships data
    for (const starship of starships) {
      await prisma.starship.create({
        data: {
          name: starship.name,
          // Add other properties as needed
        },
      });
    }

    // Fetch data from SWAPI for species
    const speciesResponse = await axios.get('https://swapi.dev/api/species/');
    const species = speciesResponse.data.results;

    // Transform and store species data
    for (const specie of species) {
      await prisma.species.create({
        data: {
          name: specie.name,
          // Add other properties as needed
        },
      });
    }

    console.log('Data successfully fetched and stored.');
  } catch (error) {
    console.error('Error fetching or storing data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

fetchDataAndStore();
