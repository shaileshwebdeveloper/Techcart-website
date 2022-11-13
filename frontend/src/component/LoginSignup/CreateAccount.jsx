import { Text, Image, Box, Input, Flex, Checkbox, Spacer, Icon, Button, Stack, Heading } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom";
import logo from './Images/greeklogo.png'
import styles from "./Signin.module.css"
import { useState } from "react";
import Axios from "axios";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

function CreateAccount() {

    const [show, setshow] = useState(false);
    const [signup, setSignup] = useState(false);

    const navigate = useNavigate();
    const url = "https://premgreek.onrender.com/users/signup";
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
            .then(res => {
                console.log(res.data);
                setSignup(true)
                setTimeout(() => {
                    setSignup(false)
                    navigate('/signin')
                }, 3000)
            })
            .catch((err) => {
                console.log(err)
                setshow(true)
                setTimeout(() => {
                    setshow(false)
                }, 3000)
            })

    }

    function handleData(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    return (
        <div>
            <Box>
               <Link to='/'><Box bg='#1b7dfd' p='25px'>
                    <Image m='auto' w='230px' src={logo} alt='logo' />
                </Box></Link>

                <Box
                    backgroundImage="url('https://img.gkbcdn.com/bn/2207/750-62c525372b40c92a04c94f48._p1_.jpg')"
                    backgroundRepeat="no-repeat"
                    backgroundSize={'100% 565px'}
                >
                    <Box h={{ sm: '30vh', md: '53vh', lg: '82vh' }} boxShadow='xl' w={['80%', '420px']} bg='white' p='35px' textAlign={'left'} m='auto' display={'inline-block'} mt='90px' borderRadius='8px'>
                        <Flex >
                            <Box display={'inline-flex'} color='blackAlpha.800' fontWeight='semibold'>
                                <Text ml='4px' fontSize={{ sm: '16px', md: '20px', lg: '20px' }}>Create your account</Text>
                            </Box>
                            <Spacer />
                            <Box color='blackAlpha.700'>
                                <Link to='/signin'><Text className={styles.hovereffect} fontSize='15px' fontWeight='normal' >Sign In</Text></Link>
                            </Box>
                        </Flex>
                        <form onSubmit={(e) => submit(e)}>
                            <Input p='20px' mt='25px' placeholder="Nick name" />
                            <Input
                                p='20px' mt='25px'
                                type="text"
                                id="email"
                                value={data.email}
                                onChange={(e) => handleData(e)}
                                placeholder="Email address" />

                            <Input
                                p='20px' mt='25px'
                                type="password"
                                id="password"
                                value={data.password}
                                onChange={(e) => handleData(e)}
                                placeholder="Password" />
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
                                <Button type="submit" bg='#1b7dfd' p='25px' fontSize={'18px'} colorScheme='green' color='white'>Create account</Button>
                            </Stack>
                        </form>

                        {/* ***********************/}
                        <Box pt='7px'>
                            {show && <Alert status='error' borderRadius="35px">
                                <AlertIcon />
                                <AlertTitle>User Already Exist!</AlertTitle>
                                <AlertDescription>please signup via new user.</AlertDescription>
                            </Alert>}
                            {signup && <Alert status='success' borderRadius="35px">
                                <AlertIcon />
                                <AlertTitle>Signup Successful</AlertTitle>
                                <AlertDescription>Please Wait... we are redirecting.</AlertDescription>
                            </Alert>}
                        </Box>
                        {/* ***********************/}

                    </Box>
                    <Text py='20px' color='gray' m='auto'>Copyright © 2012 - 2022 Geekbuying.com. All rights reserved.</Text>
                </Box>
            </Box>
        </div>
    )
}

export default CreateAccount;