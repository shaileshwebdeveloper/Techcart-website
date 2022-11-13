import {
  Text,
  Image,
  Box,
  Input,
  Flex,
  Checkbox,
  Spacer,
  Icon,
  Button,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import logo from "./Images/greeklogo.png";
import styles from "./Signin.module.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function Signin() {
  const [show, setshow] = useState(false);
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();
  const url = "https://premgreek.onrender.com/users/login";
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  async function submit(e) {
    e.preventDefault();
    await Axios.post(url, {
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        console.log(res.data);
        setLogin(true);
        setTimeout(() => {
          setLogin(false);
          navigate("/");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setshow(true);
        setTimeout(() => {
          setshow(false);
        }, 3000);
      });
  }

  function handleData(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <div>
      <Box>
        <Link to="/">
          <Box bg="#1b7dfd" p="25px">
            <Image m="auto" w="230px" src={logo} alt="logo" />
          </Box>
        </Link>

        <Box
          backgroundImage="url('https://img.gkbcdn.com/bn/2207/750-62c525372b40c92a04c94f48._p1_.jpg')"
          backgroundRepeat="no-repeat"
          backgroundSize="100% 600px"
        >
          <Box
            h={{ sm: "30vh", md: "52vh", lg: "83vh" }}
            boxShadow="xl"
            w={["80%", "420px"]}
            bg="white"
            p="35px"
            textAlign={"left"}
            m="auto"
            display={"inline-block"}
            mt="90px"
            borderRadius="8px"
          >
            <form onSubmit={(e) => submit(e)}>
              <Text color="#374968" fontWeight="semibold" fontSize="25px">
                Sign In
              </Text>
              <Input
                p="20px"
                mt="25px"
                type="email"
                id="email"
                value={data.email}
                onChange={(e) => handleData(e)}
                placeholder="Email address"
              />
              <Input
                p="20px"
                mt="25px"
                type="password"
                id="password"
                value={data.password}
                onChange={(e) => handleData(e)}
                placeholder="Password"
              />

              <Flex mt="25px" fontSize="15px">
                <Box
                  _hover={{ cursor: "pointer" }}
                  display={"inline-flex"}
                  color="blackAlpha.700"
                >
                  <Checkbox></Checkbox>
                  <Text ml="8px">Keep me signed in</Text>
                  <Icon m="4px" ml="15px" as={QuestionOutlineIcon} />
                </Box>
                <Spacer />
                <Box color="blackAlpha.600">
                  <Text
                    _hover={{ cursor: "pointer" }}
                    textDecoration={"underline"}
                  >
                    Forgot your password?
                  </Text>
                </Box>
              </Flex>
              <Stack mt="20px" spacing={4} direction="column">
                <Button
                  type="submit"
                  bg="#1b7dfd"
                  p="25px"
                  fontSize={"16px"}
                  colorScheme="green"
                  color="white"
                >
                  Sign In
                </Button>

                {/* ***********************/}
                <Box mt={"10px"} display="inline">
                  {show && (
                    <Alert status="error" borderRadius="35px">
                      <AlertIcon />
                      <AlertTitle>Wrong Credentials!</AlertTitle>
                      <AlertDescription>
                        please fill correct details.
                      </AlertDescription>
                    </Alert>
                  )}
                  {login && (
                    <Alert status="success" borderRadius="35px">
                      <AlertIcon />
                      <AlertTitle>Login Successful</AlertTitle>
                      <AlertDescription>Enjoy our website.</AlertDescription>
                    </Alert>
                  )}
                </Box>
                {/* ***********************/}

                <Link to="/create">
                  <Button
                    w="100%"
                    bg="#afa5a53b"
                    p="25px"
                    fontSize={"16px"}
                    fontWeight="semibold"
                    colorScheme="green"
                    color="blackAlpha.700"
                  >
                    Create a new account
                  </Button>
                </Link>
              </Stack>
            </form>
            <Box mt="40px">
              <Flex gap={"15px"}>
                <hr className={styles.hr} />
                <p className={styles.or}>or</p>
                <hr className={styles.hr} />
              </Flex>
            </Box>
            <Box mt="20px" h="100px" alignItems={"center"}>
              <Image
                m="auto"
                boxSize="50px"
                mt="4px"
                _hover={{ mt: "-7px", transitionDuration: "0.4s" }}
                src="https://content1.geekbuying.com/V1.4/en/images/footImg/google_mod.png?v=20197"
              />
            </Box>
          </Box>
          <Text p="10px" color="gray" m="auto">
            Copyright © 2012 - 2022 Geekbuying.com. All rights reserved.
          </Text>
        </Box>
      </Box>
    </div>
  );
}

export default Signin;
