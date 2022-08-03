import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { POKEMON_DETAIL } from "../../../graphql/_queries";
import { PokemonTypeColor } from "../../../utils/_functions";

export default function useAction() {
  const { query } = useRouter();
  const name = query?.name;
  const { data, loading } = useQuery(POKEMON_DETAIL, {
    variables: {
      name,
    },
    ssr: true,
    notifyOnNetworkStatusChange: true,
  });

  const color = PokemonTypeColor(
    data?.species[0]?.pokemons[0]?.types[0].type?.name
  );

  return {
    data,
    color,
    loading,
  };
}
