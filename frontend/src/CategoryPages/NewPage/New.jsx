import {
  Box,
  GridItem,
  SimpleGrid,
  Grid,
  Text,
  Img,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import style from "../component/new.module.css";
import { Sidebar } from "./Sidebar";
import axios from "axios";
import { NewFilterComp } from "./NewFilter";




export const New = () => {


  const [data, setData] = useState([])

  const fetchApi = () => {
  return   axios.get("http://localhost:3004/products")
    .then( r => {
      setData(r.data)
    })
    .catch(e => console.log(e))
  }

  fetchApi()


  return (

    <>
    <Grid
      h="auto"
      w="80%"
      m="auto"
      templateRows="repeat(6, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1} bg="#ffff">
       <Sidebar/>
      </GridItem>





      <GridItem colSpan={4} rowSpan={1} bg="#fff" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      p="20px">
           <NewFilterComp/>
      </GridItem>




      <GridItem colSpan={4} rowSpan={5}  >
        <SimpleGrid columns={[2,3,4]} spacing={5} p="5px">
          {data.map((item) => (
            <Box
              key={item.id}
              boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
              style={{ position: "relative", overflow:"hidden" }}
            >
                 <div className={`${style.ribbon} ${style.topright} ${style.blue}`}><span>New</span></div>

              <Img src={item.image} />
              <Text fontSize="md" fontWeight={"300"}>
                {item.title}
              </Text>
              <Text fontWeight={"500"} fontSize="2xl">
                {" "}
                ₹ {item.price}
              </Text>
              <Text fontWeight={"200"} fontSize="sm">
                {" "}
                {item.strike !== null ? <s>{item.strike}</s> : ""}{" "}
                {item.discount !== null ? item.discount : ""}
              </Text>
              <br />
              <Flex  style={{position : "absolute", bottom : 0}} gap={["40", "70px", "100px"]}>
                  <Text color={"grey"}  >♥ {item.ratings}</Text>
                  <Text color="grey"> Free Shipping</Text>
              </Flex>
            </Box>

          ))}
        </SimpleGrid>
      </GridItem>

    </Grid>
    </>
  );
};
