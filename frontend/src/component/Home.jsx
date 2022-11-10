import {
  Box,
  Flex,
  Image,
  Input,
  Button,
  SimpleGrid,
  Text,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Stack,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

const Home = () => {
  const Feature = ({ title, text, icon }) => {
    return (
      <Stack>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"gray.100"}
          mb={1}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={"gray.600"}>{text}</Text>
      </Stack>
    );
  };
  return (
    <>
      <Box w="85%" m="auto" mt="10">
        <Text fontWeight="bold" fontSize="27px" textAlign="left">
          Trending Categories
        </Text>
        <SimpleGrid columns={[1, 2, 2, 3]} spacing="20px" mt="5">
          <Box border="1px solid rgb(220,220,220)" borderRadius="5">
            <Image
              src="https://img.gkbcdn.com/bn/2211/3-636b24682b40c91ee886b172._p1_.jpg"
              alt=""
            />
            <Box p="3" textAlign="left">
              <Text fontWeight="Bold">3D Printers & Electronics</Text>
              <Text mt="2" fontSize="14px">
                3D printers, laser engravers, laptops, speakers, earphones and
                more electronics, up to 70% off!
              </Text>
            </Box>
          </Box>

          <Box border="1px solid rgb(220,220,220)" borderRadius="5">
            <Image
              src="https://img.gkbcdn.com/bn/2211/2-636b23e72b40c91ee886b171._p1_.jpg"
              alt=""
            />
            <Box p="3" textAlign="left">
              <Text fontWeight="Bold">Smart Home & Garden</Text>
              <Text mt="2" fontSize="14px">
                Smart cleaning robots and vacuums, kitchen supplies, living room
                furniture, patio & garden supplies, up to 60% off!
              </Text>
            </Box>
          </Box>

          <Box border="1px solid rgb(220,220,220)" borderRadius="5">
            <Image
              src="https://img.gkbcdn.com/bn/2211/1-636b23b32b40c91ee886b170._p1_.jpg"
              alt=""
            />
            <Box p="3" textAlign="left">
              <Text fontWeight="Bold">E-transport & Outdoor</Text>
              <Text mt="2" fontSize="14px">
                Electric bikes, electric scooters, portable generators, and more
                outdoor gear, save $50 now!
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      <Box w="85%" m="auto" mt="10">
        <Flex gap="8" alignItems="baseline">
          <Text fontWeight="bold" fontSize="27px">
            New For You
          </Text>
          <Text color="blue">See More</Text>
        </Flex>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px" mt="5">
          <Box border="1px solid rgb(220,220,220)" borderRadius="5">
            <Box p="5">
              <Image
                src="https://img.gkbcdn.com/p/2022-07-13/JJRC-H106-Foldable-RC-Drone-with-Obstacle-Avoidance-Two-Cameras-Black-508813-0._w280_p1_.jpg"
                alt=""
              />
            </Box>
            <Box p="3" textAlign="left">
              <Text mt="2" fontSize="14px">
                4 in 1 Ultra Thin Elongated Portable HUB Mini Drone, with Ports
                USB Hub 1.2m Ultra Long Cable
              </Text>
              <Text fontWeight="Bold">₹8538.10</Text>
            </Box>
          </Box>

          <Box border="1px solid rgb(220,220,220)" borderRadius="5">
            <Box p="5">
              <Image
                src="https://img.gkbcdn.com/p/2022-11-05/4-in-1-Ultra-Thin-Elongated-Portable-HUB-Mini-USB-Hub-Extension-518135-0._w280_p1_.jpg"
                alt=""
              />
            </Box>
            <Box p="3" textAlign="left">
              <Text mt="2" fontSize="14px">
                4 in 1 Ultra Thin Elongated Portable HUB Mini USB Hub Extension,
                4 Ports USB Hub 1.2m Ultra Long Cable
              </Text>
              <Text fontWeight="Bold">₹838.10</Text>
            </Box>
          </Box>

          <Box border="1px solid rgb(220,220,220)" borderRadius="5">
            <Box p="5">
              <Image
                src="https://img.gkbcdn.com/p/2022-11-01/Retroid-Pocket-3-Portable-Game-Console-4-7inch-Purple-518076-0._w280_p1_.jpg"
                alt=""
              />
            </Box>
            <Box p="3" textAlign="left">
              <Text mt="2" fontSize="14px">
                Retroid Pocket 3 Portable Game Console Android 11 4.7'' IPS with
              </Text>
              <Text fontWeight="Bold">₹21038.10</Text>
            </Box>
          </Box>

          <Box border="1px solid rgb(220,220,220)" borderRadius="5">
            <Box p="5">
              <Image
                src="https://img.gkbcdn.com/p/2022-11-05/4-in-1-Type-C-Dispenser-USB-3-0-Hub-518134-0._w280_p1_.jpg"
                alt=""
              />
            </Box>
            <Box p="3" textAlign="left">
              <Text mt="2" fontSize="14px">
                4 in 1 Type-C Dispenser USB 3.0 Hub for USB C Laptop, Mobile
                Phone, Pad
              </Text>
              <Text fontWeight="Bold">₹538.50</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      <Box w="85%" m="auto" mt="10">
        <Flex gap="8" alignItems="baseline">
          <Text fontWeight="bold" fontSize="27px">
            Best Sellers{" "}
          </Text>
          <Text color="blue">See More</Text>
        </Flex>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px" mt="5">
          <Box border="1px solid rgb(220,220,220)" borderRadius="5">
            <Box p="8">
              <Image
                src="https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_p1_.jpg"
                alt=""
              />
            </Box>
            <Box p="3" textAlign="left">
              <Box textAlign="center" bg="red.400" color="white" p="1" w="20">
                40% off
              </Box>
              <Text mt="2">Apods i500 Bluetooth 5.0 Pop-up</Text>
              <Flex gap="3" fontSize="20px" color="rgb(255,200,0)">
                ★★★★
              </Flex>
              <Text fontWeight="Bold" mt="2">
                ₹1257.57
              </Text>
              <Text textDecoration="line-through" fontSize="14px">
                ₹2096.52
              </Text>
            </Box>
          </Box>

          <Box border="1px solid rgb(220,220,220)" borderRadius="5">
            <Box p="8">
              <Image
                src="https://img.gkbcdn.com/p/2022-10-15/AOSIMAN-140FCC-Portable-14-Inch-Monitor-1920-1200-Resolution-517894-0._w280_p1_.jpg"
                alt=""
              />
            </Box>
            <Box p="3" textAlign="left">
              <Box textAlign="center" bg="red.400" color="white" p="1" w="20">
                23% off
              </Box>
              <Text mt="2">AOSIMAN 140FCC 14'' Ultra Slim Portable</Text>
              <Flex gap="3" fontSize="20px" color="rgb(255,200,0)">
                ★★★★
              </Flex>
              <Text fontWeight="Bold" mt="2">
                ₹21257.57
              </Text>
              <Text textDecoration="line-through" fontSize="14px">
                ₹28096.52
              </Text>
            </Box>
          </Box>

          <Box border="1px solid rgb(220,220,220)" borderRadius="5">
            <Box p="8">
              <Image
                src="https://img.gkbcdn.com/p/2020-01-07/Xiaomi-Mijia-LCD-Writing-Tablet-10-Inch-With-Pen-White-895504-._w280_p1_.jpg"
                alt=""
              />
            </Box>
            <Box p="3" textAlign="left">
              <Box textAlign="center" bg="red.400" color="white" p="1" w="20">
                30% off
              </Box>
              <Text mt="2">Xiaomi Mijia XMXHB01WC LCD Writing Tablet </Text>
              <Flex gap="3" fontSize="20px" color="rgb(255,200,0)">
                ★★★★
              </Flex>
              <Text fontWeight="Bold" mt="2">
                ₹1857.57
              </Text>
              <Text textDecoration="line-through" fontSize="14px">
                ₹2096.52
              </Text>
            </Box>
          </Box>

          <Box border="1px solid rgb(220,220,220)" borderRadius="5">
            <Box p="8">
              <Image
                src="https://img.gkbcdn.com/p/2020-05-12/GameSir-T4-Pro-Bluetooth---2-4GHz-Wireless-Game-Controller-Black-904006-._w280_p1_.jpg"
                alt=""
              />
            </Box>
            <Box p="3" textAlign="left">
              <Box textAlign="center" bg="red.400" color="white" p="1" w="20">
                18% off
              </Box>
              <Text mt="2">Apods i500 Bluetooth 5.0 Pop-up</Text>
              <Flex gap="3" fontSize="20px" color="rgb(255,200,0)">
                ★★★★
              </Flex>
              <Text fontWeight="Bold" mt="2">
                ₹2570.57
              </Text>
              <Text textDecoration="line-through" fontSize="14px">
                ₹3096.50
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      <Box mt="20" bg="rgb(241,246,253)">
        <Accordion allowMultiple>
          <AccordionItem p="5">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="center">
                  <Text fontWeight="bold" color="blue.500">
                    Why buy from geekbuying? +
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box p={4} w="80%" m="auto">
                <SimpleGrid
                  columns={{ base: 1, md: 3 }}
                  spacing={10}
                  textAlign="left"
                >
                  <Feature
                    icon={<Icon as={FcAssistant} w={10} h={10} />}
                    title={"Lifetime Support"}
                    text={
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                    }
                  />
                  <Feature
                    icon={<Icon as={FcDonate} w={10} h={10} />}
                    title={"Unlimited Donations"}
                    text={
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                    }
                  />
                  <Feature
                    icon={<Icon as={FcInTransit} w={10} h={10} />}
                    title={"Instant Delivery"}
                    text={
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                    }
                  />
                </SimpleGrid>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      <Box
        bg="rgb(241,246,253)"
        p="5"
        borderBottom="1px solid rgb(206,206,206)"
      >
        <Container>
          <Text textAlign="center" fontWeight="bold">
            Subscribe to our Newsletter{" "}
          </Text>
          <Flex align="center" m="auto" w="200" mt="5" mb="5">
            <Input
              placeholder="Enter email to get 5% off"
              outline="blue"
              borderRightRadius="none"
              borderColor="blue.500"
            />
            <Button variant="solid" borderLeftRadius="none" colorScheme="blue">
              Subscribe
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Home;
