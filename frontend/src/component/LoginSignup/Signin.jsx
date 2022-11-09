import { Text, Image, Box, Input, Flex, Checkbox, Spacer, Icon, Button, Stack, Heading } from "@chakra-ui/react"
import { QuestionOutlineIcon } from '@chakra-ui/icons'
import logo from './Images/greeklogo.png'
import styles from "./Signin.module.css"

function Signin() {


    return (
        <div>
            <Box>
                <Box bg='#1b7dfd' p='5px'>
                    <Image m='auto' boxSize='250px' h='120px' src={logo} alt='logo' />
                </Box>

                <Box
                    backgroundImage="url('https://img.gkbcdn.com/bn/2207/750-62c525372b40c92a04c94f48._p1_.jpg')"
                    backgroundRepeat="no-repeat"
                    backgroundSize={'100% 500px'}
                >
                    <Box h='95vh' boxShadow='dark-lg'  w='41%' bg='white' p='35px' textAlign={'left'} m='auto' display={'inline-block'} mt='90px' borderRadius='8px'>
                        <Text color='#374968' fontWeight='semibold' fontSize='25px'>Sign In</Text>
                        <Input p='25px'  mt='32px' placeholder="Email address" />
                        <Input p='25px' mt='32px' placeholder="Password" />
                        <Flex mt='30px' fontSize='18px'>
                            <Box  _hover={{cursor:"pointer"}}  display={'inline-flex'} color='blackAlpha.700'>
                                <Checkbox defaultChecked></Checkbox>
                                <Text ml='8px'>Keep me signed in</Text>
                                <Icon m='4px' ml='15px' as={QuestionOutlineIcon} />
                            </Box>
                            <Spacer />
                            <Box color='blackAlpha.600'>
                                <Text _hover={{cursor:"pointer"}} textDecoration={'underline'}>Forgot your password?</Text>
                            </Box>
                        </Flex>
                        <Stack mt='20px' spacing={4} direction='column' >
                        <Button bg='#1b7dfd' p='25px' fontSize={'20px'} colorScheme='green' color='white'>Sign In</Button>
                        <Button bg='#afa5a53b' p='25px' fontWeight='semibold' colorScheme='green' color='blackAlpha.700' fontSize={'20px'}>Create a new account</Button>
                        </Stack>
                        
                        <Box mt='50px'>
                            <Flex gap={"15px"}>
                                <hr className={styles.hr} />
                                <p className={styles.or}>or</p>
                                <hr className={styles.hr} />
                            </Flex>
                        </Box >
                        <Box mt='30px'  h='100px' alignItems={'center'}>
                            <Image m='auto' boxSize='50px'  mt='4px' _hover={{mt:'-7px', transitionDuration:"0.4s"}}  src='https://content1.geekbuying.com/V1.4/en/images/footImg/google_mod.png?v=20197'/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Signin;