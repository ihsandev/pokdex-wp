import { Box, Flex } from "@chakra-ui/react";
import { Card } from "..";
import { baseImageUrl } from "../../utils/_constants";
import { FiArrowDown } from "react-icons/fi";
import { useRouter } from "next/router";

const Evolutions = ({ evolutions }) => {
  const { push, query } = useRouter();
  return (
    <>
      {evolutions &&
        evolutions?.species?.map((item, i) => (
          <Box key={i}>
            <Card
              title={item.name}
              image={`${baseImageUrl}${item.id}.png`}
              onClick={
                item.name !== query.name ? () => push(`/${item.name}`) : null
              }
            />
            {evolutions?.species?.length !== i + 1 && (
              <Flex my="0.5rem" justifyContent="center">
                <FiArrowDown size={30} />
              </Flex>
            )}
          </Box>
        ))}
    </>
  );
};

export default Evolutions;
