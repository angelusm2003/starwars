import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ApiRoot = {
  __typename?: 'ApiRoot';
  characters?: Maybe<Array<Maybe<Character>>>;
  combinedData?: Maybe<Array<Maybe<CombinedData>>>;
  films?: Maybe<Array<Maybe<Film>>>;
  planets?: Maybe<Array<Maybe<Planet>>>;
  species?: Maybe<Array<Maybe<Species>>>;
  startships?: Maybe<Array<Maybe<Starship>>>;
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};

export type Character = {
  __typename?: 'Character';
  birthYear?: Maybe<Scalars['String']['output']>;
  eyeColor?: Maybe<Scalars['String']['output']>;
  films: Array<Maybe<Film>>;
  gender?: Maybe<Scalars['String']['output']>;
  hairColor?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  homeworld?: Maybe<Planet>;
  id: Scalars['ID']['output'];
  mass?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  skinColor?: Maybe<Scalars['String']['output']>;
  species?: Maybe<Array<Maybe<Species>>>;
  starships?: Maybe<Array<Maybe<Starship>>>;
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};

export type CharacterInput = {
  birthYear?: InputMaybe<Scalars['String']['input']>;
  eyeColor?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hairColor?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  mass?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  skinColor?: InputMaybe<Scalars['String']['input']>;
};

export type CombinedData = {
  __typename?: 'CombinedData';
  characterCount: Scalars['Int']['output'];
  localCharacterNames: Array<Scalars['String']['output']>;
};

export type Film = {
  __typename?: 'Film';
  characters: Array<Maybe<Character>>;
  director?: Maybe<Scalars['String']['output']>;
  episodeID?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  planets?: Maybe<Array<Maybe<Planet>>>;
  producer?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['String']['output']>;
  species?: Maybe<Array<Maybe<Species>>>;
  starships?: Maybe<Array<Maybe<Starship>>>;
  title: Scalars['String']['output'];
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCharacter?: Maybe<Character>;
  deleteCharacter?: Maybe<Scalars['ID']['output']>;
  updateCharacter?: Maybe<Character>;
  updateFilm?: Maybe<Film>;
};


export type MutationCreateCharacterArgs = {
  input: CharacterInput;
};


export type MutationDeleteCharacterArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCharacterArgs = {
  id: Scalars['ID']['input'];
  input: CharacterInput;
};


export type MutationUpdateFilmArgs = {
  director: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type Planet = {
  __typename?: 'Planet';
  climate?: Maybe<Scalars['String']['output']>;
  diameter?: Maybe<Scalars['String']['output']>;
  films?: Maybe<Array<Maybe<Film>>>;
  gravity?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  orbitalPeriod?: Maybe<Scalars['String']['output']>;
  population?: Maybe<Scalars['String']['output']>;
  residents?: Maybe<Array<Maybe<Character>>>;
  rotationPeriod?: Maybe<Scalars['String']['output']>;
  surfaceWater?: Maybe<Scalars['String']['output']>;
  terrain?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  character?: Maybe<Character>;
  combinedData: CombinedData;
  getFilm?: Maybe<Film>;
  planet?: Maybe<Planet>;
  root?: Maybe<ApiRoot>;
  species?: Maybe<Species>;
  starship?: Maybe<Starship>;
  vehicle?: Maybe<Vehicle>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetFilmArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPlanetArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySpeciesArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStarshipArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVehicleArgs = {
  id: Scalars['ID']['input'];
};

export type Species = {
  __typename?: 'Species';
  averageHeight?: Maybe<Scalars['String']['output']>;
  averageLifespan?: Maybe<Scalars['String']['output']>;
  classification?: Maybe<Scalars['String']['output']>;
  designation?: Maybe<Scalars['String']['output']>;
  eyeColors?: Maybe<Scalars['String']['output']>;
  films?: Maybe<Array<Maybe<Film>>>;
  hairColors?: Maybe<Scalars['String']['output']>;
  homeworld?: Maybe<Planet>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  people?: Maybe<Array<Maybe<Character>>>;
  skinColors?: Maybe<Scalars['String']['output']>;
};

export type Starship = {
  __typename?: 'Starship';
  MGLT?: Maybe<Scalars['String']['output']>;
  cargoCapacity?: Maybe<Scalars['String']['output']>;
  consumables?: Maybe<Scalars['String']['output']>;
  costInCredits?: Maybe<Scalars['String']['output']>;
  crew?: Maybe<Scalars['String']['output']>;
  films?: Maybe<Array<Maybe<Film>>>;
  hyperdriveRating?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  length?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  maxAtmospheringSpeed?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  passengers?: Maybe<Scalars['String']['output']>;
  pilots?: Maybe<Array<Maybe<Character>>>;
  starshipClass?: Maybe<Scalars['String']['output']>;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  cargoCapacity?: Maybe<Scalars['String']['output']>;
  consumables?: Maybe<Scalars['String']['output']>;
  costInCredits?: Maybe<Scalars['String']['output']>;
  crew?: Maybe<Scalars['String']['output']>;
  films?: Maybe<Array<Maybe<Film>>>;
  id: Scalars['ID']['output'];
  length?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  maxAtmospheringSpeed?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  passengers?: Maybe<Scalars['String']['output']>;
  pilots?: Maybe<Array<Maybe<Character>>>;
  vehicleClass?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ApiRoot: ResolverTypeWrapper<ApiRoot>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Character: ResolverTypeWrapper<Character>;
  CharacterInput: CharacterInput;
  CombinedData: ResolverTypeWrapper<CombinedData>;
  Film: ResolverTypeWrapper<Film>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Planet: ResolverTypeWrapper<Planet>;
  Query: ResolverTypeWrapper<{}>;
  Species: ResolverTypeWrapper<Species>;
  Starship: ResolverTypeWrapper<Starship>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Vehicle: ResolverTypeWrapper<Vehicle>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ApiRoot: ApiRoot;
  Boolean: Scalars['Boolean']['output'];
  Character: Character;
  CharacterInput: CharacterInput;
  CombinedData: CombinedData;
  Film: Film;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Planet: Planet;
  Query: {};
  Species: Species;
  Starship: Starship;
  String: Scalars['String']['output'];
  Vehicle: Vehicle;
};

export type ApiRootResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApiRoot'] = ResolversParentTypes['ApiRoot']> = {
  characters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  combinedData?: Resolver<Maybe<Array<Maybe<ResolversTypes['CombinedData']>>>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  planets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Planet']>>>, ParentType, ContextType>;
  species?: Resolver<Maybe<Array<Maybe<ResolversTypes['Species']>>>, ParentType, ContextType>;
  startships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Starship']>>>, ParentType, ContextType>;
  vehicles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vehicle']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = {
  birthYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eyeColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Array<Maybe<ResolversTypes['Film']>>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hairColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homeworld?: Resolver<Maybe<ResolversTypes['Planet']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  skinColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  species?: Resolver<Maybe<Array<Maybe<ResolversTypes['Species']>>>, ParentType, ContextType>;
  starships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Starship']>>>, ParentType, ContextType>;
  vehicles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vehicle']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CombinedDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['CombinedData'] = ResolversParentTypes['CombinedData']> = {
  characterCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  localCharacterNames?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilmResolvers<ContextType = any, ParentType extends ResolversParentTypes['Film'] = ResolversParentTypes['Film']> = {
  characters?: Resolver<Array<Maybe<ResolversTypes['Character']>>, ParentType, ContextType>;
  director?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episodeID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  planets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Planet']>>>, ParentType, ContextType>;
  producer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  species?: Resolver<Maybe<Array<Maybe<ResolversTypes['Species']>>>, ParentType, ContextType>;
  starships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Starship']>>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vehicles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vehicle']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCharacter?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<MutationCreateCharacterArgs, 'input'>>;
  deleteCharacter?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationDeleteCharacterArgs, 'id'>>;
  updateCharacter?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<MutationUpdateCharacterArgs, 'id' | 'input'>>;
  updateFilm?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType, RequireFields<MutationUpdateFilmArgs, 'director' | 'id' | 'title'>>;
};

export type PlanetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Planet'] = ResolversParentTypes['Planet']> = {
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diameter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  gravity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orbitalPeriod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  residents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  rotationPeriod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surfaceWater?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  terrain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<QueryCharacterArgs, 'id'>>;
  combinedData?: Resolver<ResolversTypes['CombinedData'], ParentType, ContextType>;
  getFilm?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType, RequireFields<QueryGetFilmArgs, 'id'>>;
  planet?: Resolver<Maybe<ResolversTypes['Planet']>, ParentType, ContextType, RequireFields<QueryPlanetArgs, 'id'>>;
  root?: Resolver<Maybe<ResolversTypes['ApiRoot']>, ParentType, ContextType>;
  species?: Resolver<Maybe<ResolversTypes['Species']>, ParentType, ContextType, RequireFields<QuerySpeciesArgs, 'id'>>;
  starship?: Resolver<Maybe<ResolversTypes['Starship']>, ParentType, ContextType, RequireFields<QueryStarshipArgs, 'id'>>;
  vehicle?: Resolver<Maybe<ResolversTypes['Vehicle']>, ParentType, ContextType, RequireFields<QueryVehicleArgs, 'id'>>;
};

export type SpeciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Species'] = ResolversParentTypes['Species']> = {
  averageHeight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  averageLifespan?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  classification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  designation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eyeColors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  hairColors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homeworld?: Resolver<Maybe<ResolversTypes['Planet']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  people?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  skinColors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StarshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['Starship'] = ResolversParentTypes['Starship']> = {
  MGLT?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cargoCapacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  consumables?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costInCredits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crew?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  hyperdriveRating?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxAtmospheringSpeed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  passengers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pilots?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  starshipClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VehicleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vehicle'] = ResolversParentTypes['Vehicle']> = {
  cargoCapacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  consumables?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costInCredits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crew?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxAtmospheringSpeed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  passengers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pilots?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  vehicleClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ApiRoot?: ApiRootResolvers<ContextType>;
  Character?: CharacterResolvers<ContextType>;
  CombinedData?: CombinedDataResolvers<ContextType>;
  Film?: FilmResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Planet?: PlanetResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Species?: SpeciesResolvers<ContextType>;
  Starship?: StarshipResolvers<ContextType>;
  Vehicle?: VehicleResolvers<ContextType>;
};

