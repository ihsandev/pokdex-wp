import { Box } from "@chakra-ui/react";

const Templates = ({ children }) => {
  return (
    <>
      <Box
        maxWidth={576}
        overflow="hidden"
        margin="0 auto"
        as="main"
        minH="100vh"
        paddingX="0.5rem"
      >
        {children}
      </Box>
    </>
  );
};

export default Templates;
