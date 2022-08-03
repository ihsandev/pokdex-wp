import { Box, Flex, Progress, Text } from "@chakra-ui/react";

const BaseStats = ({ color, stats }) => {
  return (
    <Box>
      {stats &&
        stats.map((stat, i) => (
          <Box key={i}>
            <Text>{stat.stat.name}</Text>
            <Flex alignItems="baseline">
              <Progress
                value={stat.base_stat}
                mb="1rem"
                size="sm"
                colorScheme={color.solid.replace(/[^a-zA-Z]/g, "")}
                flex={1}
              />
              <Text fontSize="sm" ml="1rem">
                {stat.base_stat}
              </Text>
            </Flex>
          </Box>
        ))}
    </Box>
  );
};

export default BaseStats;
