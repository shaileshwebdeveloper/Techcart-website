import { Flex,Button, Text, Box, Select } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";



export const FilterComp = () => {

  
      
   



  return (
    <>
    <Flex justifyContent={"space-between"} width="40%">
    <Text fontWeight="200">New Arrived :</Text>
      <Button colorScheme='light grey' fontWeight="400" variant='outline' size='sm'>7 days</Button>
      <Button colorScheme='light grey' fontWeight="400" variant='outline' size='sm'>15 days</Button>
      <Button colorScheme='light grey' fontWeight="400" variant='outline' size='sm'>30 days</Button>
    </Flex>


    <Flex   mt={"40px"} gap={"20px"}>
    <Text fontWeight="200">Filter:</Text>
       <Box>
        <Select placeholder='Ship From'>
          <option value="">Poland</option>
          <option value="">Europe</option>
          <option value="">United State</option>
          <option value="">United Kingdom</option>
          <option value="">Hungary</option>
          <option value="">China</option>
          <option value="">Japan</option>
        </Select>
       </Box>
      <Box>
      <input
        type="checkbox"
      />
      <label style={{fontWeight:"400"}}>On Sale</label>
    </Box>
    <Box>
      <input
        type="checkbox"
      />
      <label style={{fontWeight:"400"}}>Free shipping only</label>
    </Box>
    </Flex>


    <Flex justifyContent={"space-between"} width="40%"  mt={"40px"}>
    <Text fontWeight="200" >Sort By :</Text>
      <Button colorScheme='light grey' fontWeight="400" variant='outline' size='sm'>Best Match</Button>
      <Button colorScheme='light grey' fontWeight="400" variant='outline' size='sm'>New Arrival</Button>
      <Button colorScheme='light grey' fontWeight="400" variant='outline' size='sm'
       >Price</Button>
    </Flex>
    </>
  )
}
