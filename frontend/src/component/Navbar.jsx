import {
  Box,
  Flex,
  HStack,
  useDisclosure,
  Text,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="rgb(34,130,253)" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            size={"md"}
            bg="rgb(34,130,253)"
            display={{ md: "none" }}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Flex alignItems={"center"} gap="2">
            <i class="fa-sharp fa-solid fa-bag-shopping"></i>
              <Text fontWeight="bold" color="white" fontSize="25px">
                Tech<span>Cart</span>
              </Text>
            </Flex>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {/* input */}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap="5">
            <Menu>
              <MenuButton>
                <i className="fa-solid fa-user" />
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
            <Text color="white">Sign up</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
