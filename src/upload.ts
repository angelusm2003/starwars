import axios from 'axios';
//import { FilmWhereUniqueInput } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fetchDataAndStore() {
  try {
    // Fetch data from SWAPI for films
    const filmsResponse = await axios.get('https://swapi.dev/api/films/');
    const films = filmsResponse.data.results;

    // Transform and store films data
    /*for (const film of films) {
      await prisma.film.create({
        data: {
          title: film.title,
          director: film.director,
          releaseDate: new Date(film.release_date).toISOString(),
          episodeID: film.episode_id,
          producer: film.producer,
        },
      });
    }*/



    for (const film of films) {
      // Upsert the film into the database

      //const where: FilmWhereUniqueInput = { title: film.title };
      const existingFilm = await prisma.film.findUnique({
        where: { title: film.title }
       });


      // If the film doesn't exist, create it
      if (!existingFilm) { 
      //await prisma.film.upsert({
      await prisma.film.create({
       // where: {id: film.episode_id, title: film.title },
       // update: {}, // No update needed, as it's a new record
       // create: {
        data: {
          title: film.title,
          director: film.director,
          releaseDate: new Date(film.release_date).toISOString(),
          episodeID: film.episode_id,
          producer: film.producer,
        },
      });
    }

    }

    const charactersResponse = await axios.get('https://swapi.dev/api/people/');
    const characters = charactersResponse.data.results;

    // Transform and store characters data
    for (const character of characters) {

      const existingCha = await prisma.character.findUnique({
        where: { name: character.name }
       });

      if (!existingCha) {
      await prisma.character.create({  // Corrected 'character' to 'character'
        data: {
          name: character.name,
          height: character.height,
          mass: character.mass,
          hairColor: character.hair_color,
          skinColor: character.skin_color,
          eyeColor: character.eye_color,
          birthYear: character.birth_year,
          gender: character.gender,
        },
      });
    
      }
    }

    // Fetch data from SWAPI for planets
    const planetsResponse = await axios.get('https://swapi.dev/api/planets/');
    const planets = planetsResponse.data.results;

    // Transform and store planets data
    for (const planet of planets) {
      await prisma.planet.create({
        data: {
          name: planet.name,
          diameter: planet.diameter,
          rotationPeriod: planet.rotation_period,
          orbitalPeriod: planet.orbital_period,
          gravity: planet.gravity,
          population: planet.population,
          climate: planet.climate,
          terrain: planet.terrain,
          surfaceWater: planet.surface_water,
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
          model: vehicle.model,
          manufacturer: vehicle.manufacturer,
          costInCredits: vehicle.cost_in_credits,
          length: vehicle.length,
          maxAtmospheringSpeed: vehicle.max_atmosphering_speed,
          crew: vehicle.crew,
          passengers: vehicle.passengers,
          cargoCapacity: vehicle.cargo_capacity,
          consumables: vehicle.consumables,
          vehicleClass: vehicle.vehicle_class,
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
          model: starship.model,
          manufacturer: starship.manufacturer,
          costInCredits: starship.cost_in_credits,
          length: starship.length,
          maxAtmospheringSpeed: starship.max_atmosphering_speed,
          crew: starship.crew,
          passengers: starship.passengers,
          cargoCapacity: starship.cargo_capacity,
          consumables: starship.consumables,
          hyperdriveRating: starship.hyperdrive_rating,
          MGLT: starship.MGLT,
          starshipClass: starship.starship_class,
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
          classification: specie.classification,
          designation: specie.designation,
          averageHeight: specie.average_height,
          averageLifespan: specie.average_lifespan,
          eyeColors: specie.eye_colors,
          hairColors: specie.hair_colors,
          skinColors: specie.skin_colors,
          language: specie.language,
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
