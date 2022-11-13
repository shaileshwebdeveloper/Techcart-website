import { Box, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../../css/cartPage.css"
import logo from "../LoginSignup/Images/greeklogo.png"

 const CommonHeader = () => {
  return (
    <div>
        <Box id="blue-banner">
        <Box id="logosecure">
          <Link to="/">
            <Img
              id="logo"
              src={logo}
              alt=""
            />
          </Link>
          <Heading color={"white"} fontWeight={"hairline"}>
            |
          </Heading>
          <Box display={"flex"} justifyContent="space-evenly" width={"35%"}>
            <img
              id="secure"
              src="https://content1.geekbuying.com/V1.4/en/images/secure_checkout.png"
              alt=""
            />

            <Text size={"sm"} color="white">
              Secure Checkout
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default CommonHeader