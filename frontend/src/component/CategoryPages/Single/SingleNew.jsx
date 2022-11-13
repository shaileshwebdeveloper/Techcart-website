import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, GridItem, Grid, Img, Select, Text } from '@chakra-ui/react'
import axios from 'axios'
import { Counter } from './Counter'
import { CopyIcon, DownloadIcon, UnlockIcon } from '@chakra-ui/icons'
import { Description } from '../DetailReview/Description'
import { Review } from '../DetailReview/Review'
// import { Ratings } from '../Bestselling/Ratings'
import { Timer } from '../Bestselling/Timer'
import { useNavigate, useParams } from 'react-router-dom';
// import { json } from 'stream/consumers'
import Navbar from "../../Navbar"

export const SingleNew = () => {

   let [qty, setQty] = useState(1);
   const [data, setData] = useState([]);
 
 
   const [description, setDescription] = useState(true);
   const [review, setReview] = useState(false);
 
   const ondesc = () => {
     setDescription(true);
     setReview(false);
   };
 
   const rev = () => {
     setDescription(false);
     setReview(true);
   };
 
   const params = useParams();
  const id =  params.id

  console.log(params.id, "params")


  const addtocart = () => {

  fetch(`https://geekbuyingbackend.onrender.com/product1/addtocart`,{
   method : "POST",
   body : JSON.stringify(data), 
   headers : {
      "Content-Type" : "application/json",
      "Authorization" : `Bearer ${localStorage.getItem("token")}`
   }
  })
  .then((r) => {
       r.json()
  })
  .then((r) => {
     alert(r)
  })
  .catch((e) => {
    console.log(e)
  })
   

}




   useEffect(() => {
      axios
        .get(`https://geekbuyingbackend.onrender.com/product/${id}`)
        .then((r) => {
          setData(r.data);
        })
        .catch((e) => console.log(e));
  

  
    }, [id]);


    console.log("data", data)



   return (
      <>
      <Navbar/>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          margin="auto"
          w="70%"
          h="auto"
          gap="20px"
          pt="3rem"
        >
          {data.map((item) => (
            <>
              <GridItem rowSpan={2} colSpan={1}>
                <Box>
                  <Img src={item.lazy_img_src} width={"100%"} align="right" />
                </Box>
              </GridItem>
  
              <GridItem rowSpan={2} colSpan={2}>
                <Flex flexDirection={"column"} gap="10px">
                  <Text fontSize={"2xl"}>{item.items_p}</Text>
                  <Flex>
                    <Img
                      src="https://img.gkbcdn.com/s3/bn/2211/1111-636b8eaf2b40c926000ab10b.gif"
                      height={"25px"}
                    />
                    <Text color="red">
                      $600-$50, $300-$20, $100-$10, $30-$3, Extra $10 off via
                      PayPal. Shop now
                    </Text>
                  </Flex>
  
                  <Flex justifyContent={"space-between"} gap="10px" width={"80%"}>
                    <Text>4.98</Text>
                    <Text>328 Reviews</Text>
                    <Text>Brand: Tronsmart</Text>
                    <Text>38 Answered Questions</Text>
                  </Flex>
  
                  <Flex gap="20px">
                    <Text color={"red"} fontWeight="bold">
                      Flash Deals
                    </Text>
                    <Text color={"red"}>Ends In: 1 Days</Text>
                    <Timer />
                  </Flex>
  
                  <Flex gap={"15px"}>
                    <Text fontSize={"3xl"} fontWeight="bold">
                      ₹ {item.items_price}
                    </Text>
                    <s style={{ marginTop: "10px" }}>{data.del_price}</s>
                    <Text
                      color={"white"}
                      bg="red"
                      fontWeight="bold"
                      height={"20px"}
                      mt="10px"
                    >
                      ₹ {item.items_off}
                    </Text>
                  </Flex>
  
                  <Flex>
                    <Button colorScheme="blue" bg="light blue" variant="ghost">
                      2% OFF New User
                    </Button>
                    <Button colorScheme="blue" bg="light blue" variant="ghost">
                      Get Coupons
                    </Button>
                  </Flex>
  
                  <hr />
  
                  <Flex gap="20px">
                    <Text>Ship from:</Text>
                    <Button colorScheme="blue" bg="light blue" variant="outline">
                      Spain
                    </Button>
                    <Button colorScheme="blue" bg="light blue" variant="outline">
                      Hungary
                    </Button>
                    <Button colorScheme="blue" bg="light blue" variant="outline">
                      China
                    </Button>
                  </Flex>
  
                  <Flex gap="50px">
                    <Text>Option:</Text>
                    <Img
                      src={item.lazy_img_src}
                      width="50px"
                      border={"1px solid black"}
                    />
                  </Flex>
  
                  <Flex gap="50px">
                    <Text>QTY:</Text>
                    <Counter
                      qty={qty}
                      image={item.lazy_img_src}
                      title={item.items_p}
                      price={item.items_price}
                      setQty={setQty}
                    />
                  </Flex>
  
                  <Flex gap={"50px"}>
                    <Text>Shipping:</Text>
                    <Select placeholder="India" size="xs" w="20%" />
                  </Flex>
  
                  <Flex gap="20px">
                    <Button
                      colorScheme="blue"
                      size="lg"
                      variant="outline"
                      onClick={addtocart}
                    >
                      Add to Cart
                    </Button>
                    
                    <Button colorScheme="blue" size="lg">
                      Buy Now
                    </Button>
                  </Flex>
  
                  <Flex gap="10px">
                    <Text>
                      <UnlockIcon /> Price Match
                    </Text>
                    <Text>
                      {" "}
                      <DownloadIcon /> Dropshipping Download
                    </Text>
                    <Text>
                      {" "}
                      <CopyIcon /> Bulk Order Rebate
                    </Text>
                  </Flex>
                </Flex>
              </GridItem>
            </>
          ))}
        </Grid>
  
        <br />
  
        <Box m="auto" width="80%"   pb="3rem">
          <Flex bg={"#f9f9f9"} p="2rem" m="1rem">
            <Button
              variant="ghost"
              onClick={ondesc}
              bg={description ? "#3182ce" : ""}
            >
              Description
            </Button>
  
            <Button variant="ghost" onClick={rev} bg={review ? "#3182ce" : ""}>
              Reviews
            </Button>
  
            <Button variant="ghost">QnA</Button>
          </Flex>
  
          <Box>
            {description ? <Description /> : ""}
            {review ? <Review /> : ""}
          </Box>
        </Box>
      </>
    );
  };
  