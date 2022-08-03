import { Button, Flex } from "@chakra-ui/react";
import { FiSliders } from "react-icons/fi";

const FilterButton = ({ onClick }) => {
  return (
    <Flex
      position="fixed"
      zIndex={2}
      bottom="2rem"
      left={0}
      right={0}
      justifyContent="center"
    >
      <Button
        onClick={onClick}
        rounded={50}
        position="relative"
        zIndex={3}
        leftIcon={<FiSliders />}
        bgColor="black"
        color="white"
        _hover={{ bgColor: "blackAlpha.800" }}
        _active={{ bgColor: "blackAlpha.800" }}
        px="2rem"
        variant="solid"
      >
        Filter
      </Button>
    </Flex>
  );
};

export default FilterButton;
