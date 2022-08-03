import { Badge, Box, Flex, Text } from "@chakra-ui/react";

const Caption = ({ title, tags, tagsColor }) => {
  return (
    <Box mt="1rem" textAlign="center">
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
  );
};

export default Caption;
