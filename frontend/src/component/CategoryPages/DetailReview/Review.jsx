import { Box, Flex, Grid, GridItem, Image, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { Ratings } from '../Bestselling/Ratings'

export const Review = () => {

  return (
<> 
<Box ml="5%">
<Grid templateColumns='repeat(5, 1fr)' gap={6} >
  <GridItem  colSpan={1} > 
  
  <Box >
    <Text fontWeight={"bold"}>cl***m</Text>
    <Image src="https://ssl.gstatic.com/onebox/media/sports/logos/DTqIL8Ba3KIuxGkpXw5ayA_96x96.png" w="25px"/>
  </Box>
     
  </GridItem>
  
  <GridItem  colSpan={4} >
    
  <Box  >
     <Ratings/>
     <br />
     <Text>Excellent sound quality, can play MP3, WMA, FLAC, WAV files direct from a microSD card. You can press and hold the Previous/Next buttons to REW/FF the current music file, but I was not able to navigate folders in the microSD card. Bought two and was able to pair them to a Bluetooth player and listen in stereo (had to factory reset the speakers since they first paired to the player and not to each other). My only disappointment is that TWS (True Wireless Stereo) DOES NOT WORK when playing from the microSD card or 3.5mm AUX jack, it would be great if that was possible. If I had checked the online manual I would have discovered that fact and maybe only bought one. Have not tested them at maximum volume but they are pretty loud. Also, they arrived quite quickly from the China warehouse, much sooner than another order I had placed 10 days earlier. Packaging was simple (foam wrapping inside a plastic bag) but both boxes arrived intact, as did the speakers and accessories inside.o</Text>
     <br />
     <br />
     <Flex gap={"10px"}>
      <Text>June 10 2022</Text>
      <Select placeholder='Comment' width={"20%"} ></Select>
     </Flex>
  </Box>
    
  </GridItem>
</Grid>

<br />
<br />
<hr />
<br />

<Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem  colSpan={1} > 
  
  <Box >
    <Text fontWeight={"bold"}>cl***m</Text>
    <Image src="https://cdn.britannica.com/47/6847-004-7D668BB0/Flag-Brazil.jpg" w="25px"/>
  </Box>
     
  </GridItem>
  
  <GridItem  colSpan={4} >
    
  <Box  >
     <Ratings/>
     <br />
     <Text> Excelente produto</Text>
     <br />
     <br />
     <Flex gap={"10px"}>
      <Text>June 10 2022</Text>
      <Select placeholder='Comment' width={"20%"} ></Select>
     </Flex>
  </Box>
    
  </GridItem>
</Grid>
<br />
<br />
<hr />
<br />

<Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem  colSpan={1} > 
  
  <Box >
    <Text fontWeight={"bold"}>cl***m</Text>
    <Image src="https://cdn.britannica.com/47/6847-004-7D668BB0/Flag-Brazil.jpg" w="25px"/>
  </Box>
     
  </GridItem>
  
  <GridItem  colSpan={4} >
    
  <Box  >
     <Ratings/>
     <br />
     <Text>chegou hoje belíssima caixa demorou 45 dias mas valeu a pena</Text>
     <br />
     <br />
     <Flex gap={"10px"}>
      <Text>June 10 2022</Text>
      <Select placeholder='Comment' width={"20%"} ></Select>
     </Flex>
  </Box>
    
  </GridItem>
</Grid>
<br />
<hr />
</Box>
</>

  )
}
