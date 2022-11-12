import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CommonHeader from './CommonHeader'

const End = () => {


    const pay_succ= ()=>{

        setInterval(()=>{
            
        },3000)

    }


  return (
    <div>
        <CommonHeader/>
        <br />
        <br />
        <Box onLoad={pay_succ}>
            <img src="https://www.kernelios.com/wp-content/uploads/2018/07/successgif.gif" alt="" />
            <Heading>Payment Successful...</Heading>
        </Box>
    </div>
  )
}

export default End