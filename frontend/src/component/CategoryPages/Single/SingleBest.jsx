import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, GridItem, Grid, Img, Select, Text } from '@chakra-ui/react'
import axios from 'axios'
import { Counter } from './Counter'
import { CopyIcon, DownloadIcon, UnlockIcon } from '@chakra-ui/icons'
import { Description } from '../DetailReview/Description'
import { Review } from '../DetailReview/Review'
import { Cart } from './Cart'
// import { Ratings } from '../Bestselling/Ratings'
import { Timer } from '../Bestselling/Timer'
import { useNavigate, useParams } from 'react-router-dom';


export const SingleBest = () => {

    let [qty, setQty] = useState(1);
    const [data, setData] = useState([])

    let [cart, setCart] = useState(false)

   const [description, setDescription] = useState(true)
   const [review, setReview] = useState(false)
//    const [description, setDescription] = useState(false)

const params  = useParams();
const id = params._id
const navigate = useNavigate()

// console.log(description)

   const ondesc = () => {
        setDescription(true)
        setReview(false)
   }

   const rev = () => {
    setDescription(false)
    setReview(true)
   }






    const fetchApi = () => {
        return   axios.get(`https://greekbuying.herokuapp.com/products2/${id}`)
          .then( r => {
            setData(r.data)
          })
          .catch(e => console.log(e))
        }
    
        useEffect(() => {
       
          fetchApi()
    
        }, [])


  return (



    <>


<Grid
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(3, 1fr)'
  margin="auto" w="70%" h="auto"  gap="20px"
>
  <GridItem rowSpan={2} colSpan={1}> 

  <Box  border="1px solid red">
   <Img src={data.lazy_img_src}  width={"100%"} align="right"/>
  </Box>

  </GridItem>


  <GridItem rowSpan={2} colSpan={2}>
  {/* <Box  border="1px solid red">
   <Img src={data.image}  width={"80%"} align="right"/>

  </Box> */}
  <Flex  flexDirection={"column"} gap="10px">
     <Text fontSize={"2xl"}>{data.items_p}</Text>
     <Flex>
        <Img src="https://img.gkbcdn.com/s3/bn/2211/1111-636b8eaf2b40c926000ab10b.gif"
         height={"25px"}/>
        <Text color="red">$600-$50, $300-$20, $100-$10, $30-$3, Extra $10 off via PayPal. Shop now</Text>
     </Flex>
 
     <Flex justifyContent={"space-between"}  gap="10px" width={"80%"}>
        <Text>4.98</Text>
        <Text>328 Reviews</Text>
        <Text>Brand: Tronsmart</Text>
        <Text>38 Answered Questions</Text>
     </Flex>

     <Flex gap="20px">
        <Text color={"red"} fontWeight="bold" >Flash Deals</Text>
        <Text color={"red"}>Ends In: 1 Days</Text>
        <Timer/>
     </Flex>

     <Flex gap={"15px"}>
        <Text fontSize={"3xl"} fontWeight="bold">₹ {data.items_price}</Text>
        <s style={{marginTop : "10px"}}>{data.del_price}</s>
        <Text color={"white"} bg="red" fontWeight="bold" height={"20px"} mt="10px">₹ {data.items_off}</Text>
     </Flex>
      

      <Flex>
      <Button colorScheme='blue' bg="light blue" variant='ghost'>2% OFF New User</Button>
      <Button colorScheme='blue' bg="light blue" variant='ghost'>Get Coupons</Button>
      </Flex>

      <hr/>
   
       <Flex gap="20px">
         <Text>Ship from:</Text>
         <Button colorScheme='blue' bg="light blue" variant='outline'>Spain</Button>
         <Button colorScheme='blue' bg="light blue" variant='outline'>Hungary</Button>
         <Button colorScheme='blue' bg="light blue" variant='outline'>China</Button>
       </Flex>

        <Flex gap="50px">
            <Text>Option:</Text>
            <Img src={data.image} width="50px" border={"1px solid black"}/>
        </Flex>
        
         <Flex gap="50px">
            <Text>QTY:</Text>
             <Counter qty={qty} image={data.lazy_img_src} title={data.items_p} price={data.items_price} setQty={setQty}/>
         </Flex>

         <Flex gap={"50px"}>
            <Text>Shipping:</Text>
            <Select placeholder='India' size='xs' w="20%"/>
         </Flex>

         <Flex gap="20px">
              <Button colorScheme='blue' size='lg' variant="outline" onClick={() => setCart(true)}>Add to Cart</Button>
              {cart ? <Cart qty={qty} image={data.lazy_img_src} title={data.items_p} price={data.items_price} setQty={setQty}/> : ""}
              <Button colorScheme='blue' size='lg'>Buy Now</Button> 
         </Flex>

   
        <Flex gap="10px">
            <Text><UnlockIcon/> Price Match</Text>
            <Text> <DownloadIcon/> Dropshipping Download</Text>
            <Text> <CopyIcon/> Bulk Order Rebate</Text>
        </Flex>
 
       

  </Flex>

  </GridItem>

</Grid>

    {/* {/* <Box>
<SimpleGrid columns={2}  margin="auto" w="70%" h="auto" mb="10%" gap="20px">
  <Box  border="1px solid red">
   <Img src={data.image}  width={"80%"} align="right"/>

  </Box>
  <Flex  flexDirection={"column"} gap="10px">
     <Text fontSize={"2xl"}>{data.title}</Text>
     <Flex>
        <Img src="https://img.gkbcdn.com/s3/bn/2211/1111-636b8eaf2b40c926000ab10b.gif"
         height={"25px"}/>
        <Text color="red">"$600-$50, $300-$20, $100-$10, $30-$3, Extra $10 off via PayPal. Shop now"</Text>
     </Flex>
 
     <Flex justifyContent={"space-between"}  gap="10px" width={"80%"}>
        <Text>4.98</Text>
        <Text>328 Reviews</Text>
        <Text>Brand: Tronsmart</Text>
        <Text>38 Answered Questions</Text>
     </Flex>

     <Flex gap="20px">
        <Text color={"red"} fontWeight="bold" >Flash Deals</Text>
        <Text color={"red"}>Ends In: 1 Days  </Text>
     </Flex>

     <Flex>
        <Text fontSize={"3xl"} fontWeight="bold">₹ {data.price}</Text>
        <s>{data.strike}</s>
        <Text color={"white"} bg="red" fontWeight="bold">₹ {data.discount}</Text>
     </Flex>
      

      <Flex>
      <Button colorScheme='blue' bg="light blue" variant='ghost'>2% OFF New User</Button>
      <Button colorScheme='blue' bg="light blue" variant='ghost'>Get Coupons</Button>
      </Flex>

      <hr/>
   
       <Flex gap="20px">
         <Text>Ship from:</Text>
         <Button colorScheme='blue' bg="light blue" variant='outline'>Spain</Button>
         <Button colorScheme='blue' bg="light blue" variant='outline'>Hungary</Button>
         <Button colorScheme='blue' bg="light blue" variant='outline'>China</Button>
       </Flex>

        <Flex gap="50px">
            <Text>Option:</Text>
            <Img src={data.image} width="50px" border={"1px solid black"}/>
        </Flex>
        
         <Flex gap="50px">
            <Text>QTY:</Text>
             <Counter qty={qty} image={data.image} title={data.title} price={data.price} setQty={setQty}/>
         </Flex>

         <Flex gap={"50px"}>
            <Text>Shipping:</Text>
            <Select placeholder='India' size='xs' w="20%"/>
         </Flex>

         <Flex gap="20px">
              <Button colorScheme='blue' size='lg' variant="outline" onClick={() => setCart(true)}>Add to Cart</Button>
              {cart ? <Cart qty={qty} image={data.image} title={data.title} price={data.price} setQty={setQty}/> : ""}
              <Button colorScheme='blue' size='lg'>Buy Now</Button> 
         </Flex>

   
        <Flex gap="10px">
            <Text><UnlockIcon/> Price Match</Text>
            <Text> <DownloadIcon/> Dropshipping Download</Text>
            <Text> <CopyIcon/> Bulk Order Rebate</Text>
        </Flex>
 
       

  </Flex>
</SimpleGrid> */}
{/* </Box> */}

         <br/>



 <Box  m="auto" width="80%">

  <Flex bg={"#f9f9f9"} p="2rem" m="1rem">
        <Button variant="ghost" onClick={ondesc} bg={description ? "#3182ce" : ""}>Description</Button>

        <Button variant="ghost" onClick={rev} bg={review ? "#3182ce" : ""}>Reviews</Button>

        <Button variant="ghost">QnA</Button>
    </Flex>

    <Box >
    {description ? <Description/> : ""}
    {review ? <Review/> : ""}
    </Box>

 </Box>

</>



  )
}
