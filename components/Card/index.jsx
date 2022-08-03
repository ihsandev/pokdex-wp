import { Flex, Image } from "@chakra-ui/react";
import Caption from "../Caption";

const Card = ({ title, image, color, tags, tagsColor, onClick }) => {
  return (
    <Flex
      backgroundColor={color}
      borderRadius={10}
      textAlign="center"
      flexDirection="column"
      alignItems="center"
      py="1rem"
      cursor="pointer"
      onClick={onClick}
    >
      <Image src={image} />
      <Caption title={title} tags={tags} tagsColor={tagsColor} />
    </Flex>
  );
};

export default Card;
