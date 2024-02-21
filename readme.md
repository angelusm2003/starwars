# Starwars API Playground


## Setup

### Tech Stack
- Language  : Typescript  : https://www.typescriptlang.org
- Runtime   : NodeJS      : https://nodejs.org/en
- GraphQL   : Apollo      : https://www.apollographql.com/docs/apollo-server/
- ORM       : Prisma      : https://www.prisma.io/docs/orm
- DB        : Sqlite      : Also supports MySql, Postgres and MS Sql Server

## Setup

Recommended to develop on Linux, or Mac based systems.

- Install NodeJS

    Guides: https://nodejs.org/en/download/package-manager

- from the root of this directory run the following in a terminal to install project dependencies

    npm install
    npm run db:generate-client
    npm run start:dev

- in a browser navigate to http://localhost:4000 to start iterating and testing the graph



## Development Commands

- `npm run start:build`        : builds the application for production
- `npm run start:dev`          : starts a dev server, that will reactively restart the server as code is changed
- `npm run start:prod`         : starts the prod server, requires that `npm run build` is executed first
- `npm run codegen`            : Generates graphQL types from `./src/schema.graphql`. Run this immediately after changing `./src/schema.graphql`
- `npm run db:studio`          : opens a GUI for running CRUD operations on the database
- `npm run db:generate-client` : generates a new ORM client when `./prisma/schema.prisma changes`

## Instructions

1. Using your preferred tool (git cli, Github Desktop, etc), fork this repository, create a branch in your fork and open a pull request back to this repository

2. Define a graphql schema to allow querying one model from the Starwars API : https://swapi.dev/documentation

3. implement resolvers that consume the starwars API to satisfy requests from newly defined graphql schema

4. implement one mutation, that will locally store additional attributes for the chosen starwas API model, store this additional data using Prisma

5. extend the graphql schema to support merging any additional data (from Prisma) and the starwars api data to queries against the graph

6. we will setup a time to discuss and run the code together, and iterate on the implementation.