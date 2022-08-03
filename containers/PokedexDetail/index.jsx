import {
  Box,
  Flex,
  Image,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import {
  About,
  BaseStats,
  Caption,
  Evolutions,
  Header,
} from "../../components";
import Templates from "../../templates";
import { baseImageUrl } from "../../utils/_constants";
import useAction from "./hooks/useAction";

const PokemonDetail = () => {
  const { data, color, loading } = useAction();
  const species = data?.species && data?.species[0];

  return (
    <Templates noFooter>
      {!loading ? (
        <Flex
          backgroundColor="white"
          flexDirection="column"
          flex={1}
          minH="100vh"
        >
          <Header backTo={"/"} />
          <Box
            backgroundColor={color.transparent}
            borderBottomRadius="3rem"
            minH={400}
            flexDirection="column"
            paddingX="4rem"
          >
            <Flex justifyContent="center" alignItems="center" mt="2rem">
              <Image
                w={250}
                objectFit="contain"
                loading="lazy"
                src={`${baseImageUrl}${species?.id}.png`}
              />
            </Flex>
            <Caption
              title={species?.name}
              tags={species?.pokemons[0]?.types}
              tagsColor={color.solid}
            />
          </Box>
          <Box pt="1rem" px="2rem">
            <Tabs variant="enclosed">
              <TabList>
                <Tab>About</Tab>
                <Tab>Evolutions</Tab>
                <Tab>Base Stats</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <About
                    description={species?.description[0]?.text}
                    pokemons={species?.pokemons[0]}
                    genderRate={species?.gender_rate}
                    hatchCounter={species?.hatch_counter}
                  />
                </TabPanel>
                <TabPanel>
                  <Evolutions evolutions={species?.evolutions} />
                </TabPanel>
                <TabPanel>
                  <BaseStats
                    stats={species?.pokemons[0]?.stats}
                    color={color}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      ) : (
        <Flex
          position="fixed"
          left={0}
          right={0}
          justifyContent="center"
          alignItems="center"
          bottom={0}
          top={0}
          zIndex={3}
          bgColor="whiteAlpha.500"
        >
          <Spinner size="lg" color="orange" />
        </Flex>
      )}
    </Templates>
  );
};

export default PokemonDetail;
