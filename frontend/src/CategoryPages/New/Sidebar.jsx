import { Stack, Text, Select} from '@chakra-ui/react'
import React from 'react'

export const Sidebar = () => {
  return (
    <Stack>

    <Text fontSize={"lg"} fontWeight="bold">ALL CATEGORIES</Text>

<Select placeholder='Smart Home & Garden' size='sm'/>
<Select placeholder='Consumer Electronics' size='sm' />
<Select placeholder='Sports & Outdoors' size='sm' />
<Select placeholder='Computers, Tablets & Accessories' size='sm' />
<Select placeholder='Toys & Hobbies' size='sm' />
<Select placeholder='Wearable Devices' size='sm' />
<Select placeholder='TV Boxes & Mini PCs' size='sm' />
<Select placeholder='Automobiles & Motorcycles' size='sm' />

</Stack>
  )
}
