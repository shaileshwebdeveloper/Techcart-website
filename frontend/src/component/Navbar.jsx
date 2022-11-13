import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Text,
  Center,
  Img,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import logo from "./LoginSignup/Images/greeklogo.png"

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const navigate = useNavigate();

  return (
    // position="sticky " style={{ zIndex: "999" }}
    <Box  top="0" w="100%" style={{ zIndex: "999" }} >
      <Box
        bg="#1b7dfd"
        px={4}
        borderBottom="1px solid rgb(242,242,242)"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/">
          <Box color="white" fontWeight="bold" w={['120px','150px']}>
            <Img src={logo} />
          </Box>
          </Link>

          <Input mr={{sm:'0px',md:'200px',lg:'700px'}} placeholder="Search Products" w={{sm:'80px',md:'320px',lg:'450px'}} bg="white"/>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EFbXs4cEkuGmKqdV7cltgxmRaM5nEHXWVFNx7-4kjD7ODiDBZlF__ZZ4OdR73TFwTWU&usqp=CAU"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EFbXs4cEkuGmKqdV7cltgxmRaM5nEHXWVFNx7-4kjD7ODiDBZlF__ZZ4OdR73TFwTWU&usqp=CAU"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Box bg="#1b7dfd" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            bg="#1b7dfd"
            color="white"
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              color="white"
              fontWeight="bold"
            >
              <Text>Categories</Text>
              <Link to="/new"><Text>New</Text></Link>
              <Link to="/bestselling"><Text>Bestselling</Text></Link>
              <Text>Brand</Text>
              <Text>Clearance</Text>
              <Text>Deals</Text>
              <Text>Coupon</Text>
              <Text>App Only</Text>
            </HStack>
          </HStack>
          <HStack spacing="4">
            <Link to="/create">
            <Text color="white" fontWeight="bold">
              Signup
            </Text>
            </Link>
            <Link to="/signin">
            <Text color="white" fontWeight="bold">
              Login
            </Text>
            </Link>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4} color="white" fontWeight="bold">
             <Text>New</Text>
             <Text>Bestselling</Text>
              <Text>Brand</Text>
              <Text>Clearance</Text>
              <Text>Deals</Text>
              <Text>Coupon</Text>
              <Text>App Only</Text>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
