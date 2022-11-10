import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Image,
    Flex,
} from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box bg="rgb(241,246,253)">
            <Container as={Stack} maxW={"6xl"} py={10}>
                <SimpleGrid columns={[2, null, 4]} spacing={8}>
                    <Stack align={"flex-start"}>
                        <Text fontWeight="bold">Company</Text>
                        <Text fontSize="14px">About Us</Text>
                        <Text fontSize="14px">Blog</Text>
                        <Text fontSize="14px">Careers</Text>
                        <Text fontSize="14px">Contact Us</Text>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <Text fontWeight="bold">Support</Text>
                        <Text fontSize="14px">Help Center</Text>
                        <Text fontSize="14px">Safety Center</Text>
                        <Text fontSize="14px">Community Guidelines</Text>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <Text fontWeight="bold">Legal</Text>
                        <Text fontSize="14px">Cookies Policy</Text>
                        <Text fontSize="14px">Privacy Policy</Text>
                        <Text fontSize="14px">Terms of Service</Text>
                        <Text fontSize="14px">Law Enforcement</Text>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <Text fontWeight="bold">Install App</Text>
                        <Image
                            borderRadius="5"
                            src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg"
                            alt=""
                        />
                        <Image
                            borderRadius="5"
                            src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg"
                            alt=""
                        />
                        <Image
                            borderRadius="5"
                            src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg"
                            alt=""
                        />
                    </Stack>
                    <Box mt="5">
                        <Text fontWeight="bold" textAlign="left">
                            Connect with us
                        </Text>
                        <Flex gap="4" mt="3">
                            <i className="fa-brands fa-facebook-f" />
                            <i className="fa-brands fa-youtube" />
                            <i className="fa-brands fa-telegram" />
                            <i className="fa-brands fa-square-instagram" />
                            <i className="fa-brands fa-twitter" />
                        </Flex>
                    </Box>
                </SimpleGrid>
            </Container>

            <Box p="3" borderTop="1px solid rgb(206,206,206)">
                <Text textAlign="center" fontSize="14px">
                    © 2022 TechCart. All rights reserved.
                </Text>
            </Box>
        </Box>
    );
}
