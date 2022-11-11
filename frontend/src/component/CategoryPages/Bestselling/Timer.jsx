import { Box } from '@chakra-ui/react';
import React from 'react'
import Countdown from "react-countdown";

export const Timer = () => {
  return (
    <Box color={"red"}>
        <Countdown date={Date.now() + 10000000} />,
    </Box>
  )
}
