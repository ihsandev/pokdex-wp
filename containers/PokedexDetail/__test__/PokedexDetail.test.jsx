import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_POKEMON_DETAIL } from "../../../graphql/_queries";
import Pokedex from "..";

const mocks = [
  {
    request: {
      query: GET_POKEMON_DETAIL,
      variables: {
        name: "bulbasaur",
      },
    },
    result: {
      data: {
        species: [
          {
            id: 1,
            gender_rate: 1,
            hatch_counter: 20,
            name: "bulbasaur",
            description: [
              {
                text: "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
                __typename: "pokemon_v2_pokemonspeciesflavortext",
              },
            ],
            evolutions: {
              species: [
                {
                  id: 1,
                  name: "bulbasaur",
                  evolves_from_species_id: null,
                  evolutions: [],
                  __typename: "pokemon_v2_pokemonspecies",
                },
                {
                  id: 2,
                  name: "ivysaur",
                  evolves_from_species_id: 1,
                  evolutions: [
                    {
                      min_level: 16,
                      min_affection: null,
                      min_beauty: null,
                      min_happiness: null,
                      gender_id: null,
                      time_of_day: "",
                      move: null,
                      by_held_item: null,
                      item: null,
                      evolution_trigger: {
                        name: "level-up",
                        __typename: "pokemon_v2_evolutiontrigger",
                      },
                      location: null,
                      __typename: "pokemon_v2_pokemonevolution",
                    },
                  ],
                  __typename: "pokemon_v2_pokemonspecies",
                },
                {
                  id: 3,
                  name: "venusaur",
                  evolves_from_species_id: 2,
                  evolutions: [
                    {
                      min_level: 32,
                      min_affection: null,
                      min_beauty: null,
                      min_happiness: null,
                      gender_id: null,
                      time_of_day: "",
                      move: null,
                      by_held_item: null,
                      item: null,
                      evolution_trigger: {
                        name: "level-up",
                        __typename: "pokemon_v2_evolutiontrigger",
                      },
                      location: null,
                      __typename: "pokemon_v2_pokemonevolution",
                    },
                  ],
                  __typename: "pokemon_v2_pokemonspecies",
                },
              ],
              __typename: "pokemon_v2_evolutionchain",
            },
            egg_groups: [
              {
                group: {
                  name: "monster",
                  __typename: "pokemon_v2_egggroup",
                },
                __typename: "pokemon_v2_pokemonegggroup",
              },
              {
                group: {
                  name: "plant",
                  __typename: "pokemon_v2_egggroup",
                },
                __typename: "pokemon_v2_pokemonegggroup",
              },
            ],
            pokemons: [
              {
                id: 1,
                name: "bulbasaur",
                height: 7,
                weight: 69,
                types: [
                  {
                    type: {
                      name: "grass",
                      __typename: "pokemon_v2_type",
                    },
                    __typename: "pokemon_v2_pokemontype",
                  },
                  {
                    type: {
                      name: "poison",
                      __typename: "pokemon_v2_type",
                    },
                    __typename: "pokemon_v2_pokemontype",
                  },
                ],
                abilities: [
                  {
                    ability: {
                      name: "chlorophyll",
                      __typename: "pokemon_v2_ability",
                    },
                    __typename: "pokemon_v2_pokemonability",
                  },
                  {
                    ability: {
                      name: "overgrow",
                      __typename: "pokemon_v2_ability",
                    },
                    __typename: "pokemon_v2_pokemonability",
                  },
                ],
                stats: [
                  {
                    base_stat: 45,
                    stat: {
                      name: "hp",
                      __typename: "pokemon_v2_stat",
                    },
                    __typename: "pokemon_v2_pokemonstat",
                  },
                  {
                    base_stat: 49,
                    stat: {
                      name: "attack",
                      __typename: "pokemon_v2_stat",
                    },
                    __typename: "pokemon_v2_pokemonstat",
                  },
                  {
                    base_stat: 49,
                    stat: {
                      name: "defense",
                      __typename: "pokemon_v2_stat",
                    },
                    __typename: "pokemon_v2_pokemonstat",
                  },
                  {
                    base_stat: 65,
                    stat: {
                      name: "special-attack",
                      __typename: "pokemon_v2_stat",
                    },
                    __typename: "pokemon_v2_pokemonstat",
                  },
                  {
                    base_stat: 65,
                    stat: {
                      name: "special-defense",
                      __typename: "pokemon_v2_stat",
                    },
                    __typename: "pokemon_v2_pokemonstat",
                  },
                  {
                    base_stat: 45,
                    stat: {
                      name: "speed",
                      __typename: "pokemon_v2_stat",
                    },
                    __typename: "pokemon_v2_pokemonstat",
                  },
                ],
                __typename: "pokemon_v2_pokemon",
              },
            ],
            __typename: "pokemon_v2_pokemonspecies",
          },
        ],
        species_aggregate: {
          aggregate: {
            count: 905,
            __typename: "pokemon_v2_pokemonspecies_aggregate_fields",
          },
          __typename: "pokemon_v2_pokemonspecies_aggregate",
        },
      },
    },
  },
];

it("renders without error & get 1 from pokemons", async () => {
  const comp = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Pokedex />
    </MockedProvider>
  );
  expect(comp).toMatchSnapshot();
});
