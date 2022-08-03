import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Card, FilterButton } from "../../components";
import Templates from "../../templates";
import { baseImageUrl } from "../../utils/_constants";
import { PokemonTypeColor } from "../../utils/_functions";
import useAction from "./hooks/useAction";

const Pokedex = () => {
  const { count, loading, pokemons } = useAction();
  const { push } = useRouter();
  return (
    <Templates>
      <Box py="1rem">
        <Text mb="1rem" fontWeight="bold">
          Total: {count || 0}
        </Text>
        <SimpleGrid columns={2} spacing={6}>
          {pokemons &&
            pokemons.map((item) => {
              const bgColor = PokemonTypeColor(
                item.pokemons[0]?.types[0]?.type?.name
              );
              return (
                <Card
                  key={item.id}
                  title={item.name}
                  image={`${baseImageUrl}${item.id}.png`}
                  color={bgColor.transparent}
                  tags={item.pokemons[0]?.types}
                  tagsColor={bgColor.solid}
                  onClick={() => push(`/${item.name}`)}
                />
              );
            })}
          {loading && <>Loading...</>}
        </SimpleGrid>
        <FilterButton />
      </Box>
    </Templates>
  );
};

export default Pokedex;
