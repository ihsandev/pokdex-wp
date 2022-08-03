import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";

const ModalFilter = ({
  title,
  onClose,
  isOpen,
  onChange,
  onSubmit,
  loading,
  dataFilter = [],
  defaultValue,
}) => {
  if (!isOpen) return null;
  const renderCheckBox = () => {
    return (
      dataFilter &&
      dataFilter.map((item, i) => {
        if (item.name !== "unknown") {
          return (
            <Checkbox key={i} value={item.name}>
              {item.name}
            </Checkbox>
          );
        }
      })
    );
  };
  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent w={576} margin="auto">
        <DrawerHeader borderBottomWidth="1px">{title || "Modal"}</DrawerHeader>
        <DrawerBody pb="1rem">
          <Box mt="1rem">
            <CheckboxGroup
              colorScheme="yellow"
              size="lg"
              onChange={onChange}
              defaultValue={defaultValue}
            >
              <SimpleGrid columns={3}>
                {renderCheckBox()}
                {loading && <Spinner size="md" />}
              </SimpleGrid>
            </CheckboxGroup>
          </Box>
          <Box mt="1.5rem">
            <Button w="100%" colorScheme="yellow" onClick={onSubmit}>
              Apply
            </Button>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ModalFilter;
