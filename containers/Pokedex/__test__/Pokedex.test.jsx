import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_POKEMONS } from "../../../graphql/_queries";
import Pokedex from "..";

const mocks = [
  {
    request: {
      query: GET_POKEMONS,
      variables: {
        offset: 0,
        limit: 20,
      },
    },
    result: {
      data: {
        species_aggregate: {
          aggregate: {
            count: 905,
            __typename: "pokemon_v2_pokemonspecies_aggregate_fields",
          },
          __typename: "pokemon_v2_pokemonspecies_aggregate",
        },
        species: [
          {
            name: "bulbasaur",
            id: 1,
            pokemons: [
              {
                id: 1,
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
                __typename: "pokemon_v2_pokemon",
              },
            ],
            __typename: "pokemon_v2_pokemonspecies",
          },
        ],
      },
    },
  },
];

it("renders without error & get 1 from pokemons", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Pokedex />
    </MockedProvider>
  );
  expect(await screen.findByText(/Total: 905/)).toBeInTheDocument();
  expect(await screen.findByText(/grass/)).toBeInTheDocument();
  expect(await screen.findByText(/poison/)).toBeInTheDocument();
  expect(await screen.findByText(/bulbasaur/)).toBeInTheDocument();
});
