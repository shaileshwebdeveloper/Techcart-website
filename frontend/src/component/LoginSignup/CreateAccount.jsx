import { Text, Image, Box, Input, Flex, Checkbox, Spacer, Icon, Button, Stack, Heading } from "@chakra-ui/react"
import logo from './Images/greeklogo.png'
import styles from "./Signin.module.css"

function CreateAccount() {
    return (
        <div>
            <Box>
                <Box bg='#1b7dfd' p='25px'>
                    <Image m='auto' w='230px' src={logo} alt='logo' />
                </Box>

                <Box
                    backgroundImage="url('https://img.gkbcdn.com/bn/2207/750-62c525372b40c92a04c94f48._p1_.jpg')"
                    backgroundRepeat="no-repeat"
                    backgroundSize={'100% 565px'}
                >
                    <Box h={{ sm: '30vh', md: '48vh', lg: '75vh' }} boxShadow='xl' w={['80%', '420px']} bg='white' p='35px' textAlign={'left'} m='auto' display={'inline-block'} mt='90px' borderRadius='8px'>
                        <Flex >
                            <Box display={'inline-flex'} color='blackAlpha.800' fontWeight='semibold'>
                                <Text ml='4px' fontSize={{ sm: '16px', md: '20px', lg: '20px' }}>Create your account</Text>
                            </Box>
                            <Spacer />
                            <Box color='blackAlpha.700'>
                                <Text className={styles.hovereffect} fontSize='15px' fontWeight='normal' >Sign In</Text>
                            </Box>
                        </Flex>
                        <Input p='20px' mt='25px' placeholder="Nick name" />
                        <Input p='20px' mt='25px' placeholder="Email address" />
                        <Input p='20px' mt='25px' placeholder="Password" />
                        <Flex gap='50px' display={["block", "flex"]}>
                            <Input p='20px' mt='25px' placeholder="Access code" />
                            <Box w={["160px", "350px"]} fontSize='25px' mt='25px' textAlign={'center'} border='1px solid red' >
                                <Text >3 4 2 7 P J</Text>
                            </Box>
                        </Flex>

                        <Box py='15px' _hover={{ cursor: "pointer" }} display={'inline-flex'} color='blackAlpha.700'>
                            <Checkbox></Checkbox>
                            <Text fontSize='13px' ml='8px'>I agree to Geekbuying's <span style={{ textDecoration: "underline" }}>Terms of Use & Privacy Policy.</span></Text>
                        </Box>
                        <Stack mt='20px' spacing={4} direction='column' >
                            <Button bg='#1b7dfd' p='25px' fontSize={'18px'} colorScheme='green' color='white'>Create account</Button>
                        </Stack>
                    </Box>
                    <Text p='10px' color='gray' m='auto'>Copyright © 2012 - 2022 Geekbuying.com. All rights reserved.</Text>
                </Box>
            </Box>
        </div>
    )
}

export default CreateAccount;