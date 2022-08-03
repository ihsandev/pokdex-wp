import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";

const Card = ({ title, image, color, tags, tagsColor }) => {
  return (
    <Flex
      backgroundColor={color}
      borderRadius={10}
      textAlign="center"
      flexDirection="column"
      alignItems="center"
      py="1rem"
      cursor="pointer"
    >
      <Image src={image} />
      <Box mt="1rem">
        <Text fontSize="1.3rem" textTransform="capitalize">
          {title}
        </Text>
        {tags && (
          <Flex gap="1rem" justifyContent="center">
            {tags.map((tag, index) => (
              <Badge bgColor={tagsColor} color="#fff" key={index}>
                {tag?.type?.name}
              </Badge>
            ))}
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default Card;
