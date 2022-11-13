import { Button, Stack } from '@chakra-ui/react'
import React from 'react'

export const Buttons = ({onclick}) => {

    

  return (
<div>
  <Stack direction='row' justifyContent="center" ml={"300px"} pb="1rem">
  <Button  onClick={onclick} colorScheme='grey' variant='outline'  size='sm'  border={"0.2px solid #dddddd" } className = "btn" >
      1
  </Button>
  <Button onClick={onclick} colorScheme='grey' variant='outline'  size='sm'  border={"0.2px solid #dddddd" } className = "btn" >
      2
  </Button>
  <Button   onClick={onclick} colorScheme='grey' variant='outline'  size='sm' border={"0.2px solid #dddddd" } className = "btn" >
      3
  </Button>
  <Button   onClick={onclick} colorScheme='grey' variant='outline'  size='sm' border={"0.2px solid #dddddd" } className = "btn" >
      4
  </Button>
  <Button   onClick={onclick} colorScheme='grey' variant='outline'  size='sm' border={"0.2px solid #dddddd" } className = "btn" >
      5
  </Button>
  <Button   onClick={onclick} colorScheme='grey' variant='outline'  size='sm' border={"0.2px solid #dddddd" } className = "btn" >
      6
  </Button>
  <Button   onClick={onclick} colorScheme='grey' variant='outline'  size='sm' border={"0.2px solid #dddddd" } className = "btn" >
     7
  </Button>
  <Button   onClick={onclick} colorScheme='grey' variant='outline'  size='sm' border={"0.2px solid #dddddd" } className = "btn" >
      8
  </Button>
  <Button   onClick={onclick} colorScheme='grey' variant='outline'  size='sm' border={"0.2px solid #dddddd" } className = "btn" >
      9
  </Button>
  <Button   onClick={onclick} colorScheme='grey' variant='outline'  size='sm' border={"0.2px solid #dddddd" } className = "btn" >
    ...
  </Button>
  <Button   onClick={onclick} colorScheme='grey' variant='outline'  size='sm' border={"0.2px solid #dddddd" } className = "btn" >
      Next
  </Button>
  </Stack>
  </div>
  )
}