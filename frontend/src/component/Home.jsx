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
import Navbar from "./Navbar"

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
          <Navbar />

      <Box w="85%" m="auto" mt="10">
        <Flex gap="5" alignItems="baseline" textAlign="left">
          <Text fontWeight="bold" fontSize="27px">
            Deal of the Day Ends in
          </Text>
          <Text color="red.500">01:05:32:52</Text>
        </Flex>
        <SimpleGrid columns={[1, 2, 2, 3]} spacing="20px" mt="3">
          <Box p="2" border="1px solid rgb(220,220,220)">
            <Image
              w="100%"
              src="https://img.gkbcdn.com/s3/c/2210/Sculpfun-635c8b482b40c962ace06692.jpg"
              alt=""
            />
            <Box p="2">
              <Button position="static" variant="solid" colorScheme="blue" borderRadius="20">
                Shop Now
              </Button>
            </Box>
          </Box>
          <Box p="2" border="1px solid rgb(220,220,220)">
            <Image
              w="100%"
              src="https://img.gkbcdn.com/s3/c/2211/383x183-6360f0602b40c93f3c6eafb8.jpg"
              alt=""
            />
            <Box p="2">
              <Button position="static" variant="solid" colorScheme="blue" borderRadius="20">
                Shop Now
              </Button>
            </Box>
          </Box>
          <Box p="2" border="1px solid rgb(220,220,220)">
            <Image
              w="100%"
              src="https://img.gkbcdn.com/s3/c/2210/Tronsmart-635c8b682b40c962ace06694.jpg"
              alt=""
            />
            <Box p="2">
              <Button position="static" variant="solid" colorScheme="blue" borderRadius="20">
                Shop Now
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* top */}
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

      <Box w="85%" m="auto" mt="10">
        <Box mb="5">
          <Text
            fontWeight="bold"
            fontSize="27px"
            textAlign="left"
            color="rgb(241,64,60)"
          >
            Flash Deal
          </Text>
          <Image
            w="100%"
            src="https://content1.geekbuying.com/V1.4/en/promotion/2022-double11/image/main-1/coub.png?2"
            alt=""
          />
        </Box>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px">
          <Box border="1px solid rgb(220,220,220)" borderRadius="5">
            <Box p="8">
              <Image
                src="https://img.gkbcdn.com/p/2018-10-22/kingston-a400-ssd-480gb-sata-3-2-5-inch-solid-state-drive-dark-gray-1571984759547._w280_p1_.jpg"
                alt=""
              />
            </Box>
            <Box p="3" textAlign="left">
              <Box textAlign="center" bg="red.400" color="white" p="1" w="20">
                38% off
              </Box>
              <Text mt="2">Kingston A400 SSD 480GB SATA 3 2.5 Drive</Text>
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

          <Box border="1px solid rgb(220,220,220)" borderRadius="5">
            <Box p="8">
              <Image
                src="https://img.gkbcdn.com/p/2022-04-29/8BitDo-Pro-2-Bluetooth-Gamepad-Controller-with-Joystick-Black-500078-0._w280_p1_.jpg"
                alt=""
              />
            </Box>
            <Box p="3" textAlign="left">
              <Box textAlign="center" bg="red.400" color="white" p="1" w="20">
                24% off
              </Box>
              <Text mt="2">
                8BitDo Pro 2 Bluetooth Controller with Joystick{" "}
              </Text>
              <Flex gap="3" fontSize="20px" color="rgb(255,200,0)">
                ★★★★
              </Flex>
              <Text fontWeight="Bold" mt="2">
                ₹1570.57
              </Text>
              <Text textDecoration="line-through" fontSize="14px">
                ₹2096.50
              </Text>
            </Box>
          </Box>

          <Box border="1px solid rgb(220,220,220)" borderRadius="5">
            <Box p="8">
              <Image
                src="https://img.gkbcdn.com/p/2022-08-20/A6-1080P-HD-Bulb-Camera-Night-Vision-Safe-Camera-White-515213-0._w280_p1_.jpg"
                alt=""
              />
            </Box>
            <Box p="3" textAlign="left">
              <Box textAlign="center" bg="red.400" color="white" p="1" w="20">
                10% off
              </Box>
              <Text mt="2">
                A6 1080P HD Bulb Illuminated Camera, 360 Degree Rotatable
              </Text>
              <Flex gap="3" fontSize="20px" color="rgb(255,200,0)">
                ★★★★
              </Flex>
              <Text fontWeight="Bold" mt="2">
                ₹570.57
              </Text>
              <Text textDecoration="line-through" fontSize="14px">
                ₹696.50
              </Text>
            </Box>
          </Box>

          <Box border="1px solid rgb(220,220,220)" borderRadius="5">
            <Box p="8">
              <Image
                src="https://img.gkbcdn.com/p/2022-09-09/gamesir-vx2-aimbox-multi-platform-console-adapter-31f35a-1662723401185._w280_p1_.jpg"
                alt=""
              />
            </Box>
            <Box p="3" textAlign="left">
              <Box textAlign="center" bg="red.400" color="white" p="1" w="20">
                18% off
              </Box>
              <Text mt="2">
                GameSir LeadJoy VX2 AimBox Multi-Platform Console Adapter
              </Text>
              <Flex gap="3" fontSize="20px" color="rgb(255,200,0)">
                ★★★★
              </Flex>
              <Text fontWeight="Bold" mt="2">
                ₹3570.57
              </Text>
              <Text textDecoration="line-through" fontSize="14px">
                ₹4096.50
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      <Box w="85%" m="auto" mt="10">
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Box>
            <Image
              w="100%"
              src="https://img.gkbcdn.com/bb/engwe-20221007151429142._p1_.jpg"
              alt=""
            />
          </Box>

          <SimpleGrid columns={[2, null, 4]} spacing="20px">
            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2022-05-16/engwe-ep-2-pro-folding-electric-moped-bicycle-750w-motor-black-f02f83-1652693914387._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Electric Bicycle</Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹77101.29
                </Text>
              </Box>
            </Box>

            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2022-07-11/ENGWE-T14-Folding-Electric-Bicycle-14-Inch-Tire-508466-0._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Electric Bicycle</Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹47101.29
                </Text>
              </Box>
            </Box>

            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2022-02-24/engwe-c20-pro-folding-electric-bicycle-67247a-1645673469050._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Electric Bicycle</Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹50101.90
                </Text>
              </Box>
            </Box>

            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2022-10-28/engwe-engine-pro-folding-electric-bicycle-750w-48v-16ah-battery-black-77682a-1666945658891._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Electric Bicycle</Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹29000.50
                </Text>
              </Box>
            </Box>

            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2022-05-16/engwe-ep-2-pro-folding-electric-moped-bicycle-750w-motor---orange-81991c-1652694030880._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Electric Bicycle</Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹77101.29
                </Text>
              </Box>
            </Box>

            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2022-08-18/ENGWE-EP-2-Folding-Electric-Moped-Bicycle-Grey-514989-0._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Electric Bicycle</Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹30101.89
                </Text>
              </Box>
            </Box>

            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2022-05-16/engwe-ep-2-pro-folding-electric-moped-bicycle-750w-motor-black-f02f83-1652693914387._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Electric Bicycle</Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹77101.29
                </Text>
              </Box>
            </Box>

            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2022-10-28/engwe-engine-pro-folding-electric-bicycle-750w-48v-16ah-black-2359fc-1666945376315._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Electric Bicycle</Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹44101.29
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </Box>

      {/* topbottom */}

      <Box w="85%" m="auto" mt="10">
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Box>
            <Image
              w="100%"
              src="https://img.gkbcdn.com/bb/tronsmart-20221007152616686._p1_.jpg"
              alt=""
            />
          </Box>

          <SimpleGrid columns={[2, null, 4]} spacing="20px">
            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2020-01-09/Tronsmart-element-T6-plus-Upgrade-Black-895558-._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Tronsmart T6 Plus</Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹7101.29
                </Text>
              </Box>
            </Box>

            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2022-11-04/tronsmart-apollo-q10-anc-bluetooth-headphones--e74f5c-1667556691258._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Tronsmart Apollo Q10</Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹4101.29
                </Text>
              </Box>
            </Box>

            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2020-03-18/Tronsmart-Onyx-Ace-Bluetooth-5-0-TWS-Earphones-White-899355-._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Apollo QT Buds Ace pro</Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹501.90
                </Text>
              </Box>
            </Box>

            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2019-10-24/tronsmart-element-t6-max-60w-bluetooth-5-0-nfc-speaker-black-1574132858241._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Tronsmart Element T6</Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹5300.50
                </Text>
              </Box>
            </Box>

            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2022-04-16/tronsmart--trip-ebbc53-1650097286486._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Tronsmart 10W Speakers</Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹1101.29
                </Text>
              </Box>
            </Box>

            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2022-04-16/tronsmart-bang-60w-outdoor-party-speaker-b5a77f-1650095218850._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Tronsmart Bang 60W</Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹3001.89
                </Text>
              </Box>
            </Box>

            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1571991416189._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Tronsmart Element Mega</Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹7101.29
                </Text>
              </Box>
            </Box>

            <Box border="1px solid rgb(220,220,220)" p="3">
              <Box>
                <Image
                  src="https://img.gkbcdn.com/p/2022-11-04/tronsmart-apollo-q10-anc-bluetooth-headphones--32e960-1667556683996._w280_p1_.jpg"
                  alt=""
                />
              </Box>
              <Box textAlign="left">
                <Text>Tronsmart Apollo Q10 </Text>
                <Text fontWeight="Bold" mt="1" fontSize="15px">
                  ₹4401.29
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </Box>

      <Box w="85%" m="auto" mt="10">
        <Text textAlign="left" fontWeight="bold" fontSize="27px">Recommended For You</Text>
        <SimpleGrid columns={[2, 3, 4, 5]} spacing="40px" mt="5">
          <Box border="1px solid rgb(220,220,220)" p="3">
            <Box>
              <Image
                src="https://img.gkbcdn.com/p/2019-10-28/enchen-blackstone-3d-smart-electric-shaver-black-1574132742777._w280_.jpg"
                alt=""
              />
            </Box>
            <Box textAlign="left">
              <Text>Xiaomi Enchen BlackStone</Text>
              <Text fontWeight="Bold" mt="1" fontSize="15px">
                ₹1501.29
              </Text>
              <Text >₹2000.69</Text>
            </Box>
          </Box>

          <Box border="1px solid rgb(220,220,220)" p="3">
            <Box>
              <Image
                src="https://img.gkbcdn.com/p/2022-11-04/Q26-Pro-Smartwatch-1-83---TFT-Screen-Pink-518111-0._w280_.jpg"
                alt=""
              />
            </Box>
            <Box textAlign="left">
              <Text>Q26 Pro Smartwatch</Text>
              <Text fontWeight="Bold" mt="1" fontSize="15px">
                ₹2801.29
              </Text>
              <Text >₹3200.80</Text>
            </Box>
          </Box>

          <Box border="1px solid rgb(220,220,220)" p="3">
            <Box>
              <Image
                src="https://img.gkbcdn.com/p/2022-11-03/iScooter-i9-Max-Electric-Scooter-10---Honeycomb-Tire-518105-0._w280_.jpg"
                alt=""
              />
            </Box>
            <Box textAlign="left">
              <Text>iScooter i9 Max Electric Scooter </Text>
              <Text fontWeight="Bold" mt="1" fontSize="15px">
                ₹33101.29
              </Text>
              <Text >₹43101.29</Text>
            </Box>
          </Box>

          <Box border="1px solid rgb(220,220,220)" p="3">
            <Box>
              <Image
                src="https://img.gkbcdn.com/p/2022-01-05/Kospet-Rock-Bluetooth-Smartwatch-1-69-Inch-Rectangle-Black-492533-0._w280_.jpg"
                alt=""
              />
            </Box>
            <Box textAlign="left">
              <Text>Huawei Watch GT 2</Text>
              <Text fontWeight="Bold" mt="1" fontSize="15px">
                ₹22101.29
              </Text>
              <Text >₹26101.29</Text>
            </Box>
          </Box>

          <Box border="1px solid rgb(220,220,220)" p="3">
            <Box>
              <Image
                src="https://img.gkbcdn.com/p/2022-03-18/ENCHEN-EC001-Electric-Hair-Clipper-497988-0._w280_.jpg"
                alt=""
              />
            </Box>
            <Box textAlign="left">
              <Text>ENCHEN EC001 Electric Hair Treamer</Text>
              <Text fontWeight="Bold" mt="1" fontSize="15px">
                ₹1401.99
              </Text>
              <Text >₹1801.99</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Bottom */}
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
              bg='white'
              position="static"
              placeholder="Enter email to get 5% off"
              outline="blue"
              borderRightRadius="none"
              borderColor="blue.500"
            />
            <Button position="static" variant="solid" borderLeftRadius="none" colorScheme="blue">
              Subscribe
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Home;
