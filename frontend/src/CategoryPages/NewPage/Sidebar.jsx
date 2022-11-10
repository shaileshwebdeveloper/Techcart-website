import { Stack, Text, Select} from '@chakra-ui/react'
import React from 'react'

export const Sidebar = () => {
  return (
    <Stack>

    <Text fontSize={"lg"} fontWeight="bold">ALL CATEGORIES</Text>

<Select placeholder='Smart Home & Garden' size='md'/>
<Select placeholder='Consumer Electronics' size='md' />
<Select placeholder='Sports & Outdoors' size='md' />
<Select placeholder='Computers, Tablets & Accessories' size='md' />
<Select placeholder='Toys & Hobbies' size='md' />
<Select placeholder='Wearable Devices' size='md' />
<Select placeholder='TV Boxes & Mini PCs' size='md' />
<Select placeholder='Automobiles & Motorcycles' size='md' />

</Stack>
  )
}
