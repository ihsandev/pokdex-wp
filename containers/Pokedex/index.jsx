import {
  Box,
  Flex,
  SimpleGrid,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Card, FilterButton, ModalFilter } from "../../components";
import Templates from "../../templates";
import { baseImageUrl } from "../../utils/_constants";
import { PokemonTypeColor } from "../../utils/_functions";
import useAction from "./hooks/useAction";

const Pokedex = () => {
  const {
    count,
    loading,
    loadingFilter,
    pokemons,
    types,
    typesFilter,
    handleChangeFilter,
    handleSubmitFilter,
  } = useAction();
  const { push } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          {(loading || loadingFilter) && (
            <Flex alignItems="center">
              <Spinner color="orange" size="lg" />
              <Text ml="1rem">Load Data..</Text>
            </Flex>
          )}
        </SimpleGrid>
        <FilterButton onClick={onOpen} />
        {isOpen && (
          <ModalFilter
            title="Filter By Types"
            onClose={onClose}
            isOpen={isOpen}
            dataFilter={types?.data?.types}
            defaultValue={typesFilter}
            loading={types.loading}
            onChange={(value) => handleChangeFilter(value)}
            onSubmit={() => {
              handleSubmitFilter();
              onClose();
            }}
          />
        )}
      </Box>
    </Templates>
  );
};

export default Pokedex;
