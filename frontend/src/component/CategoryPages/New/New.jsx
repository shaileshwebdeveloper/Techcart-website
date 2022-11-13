import {
  Box,
  GridItem,
  SimpleGrid,
  Grid,
  Text,
  Img,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Sidebar } from "../New/Sidebar";
import { FilterComp } from "../New/FilterComp";
import axios from "axios";
import {  useNavigate } from 'react-router-dom'
// import { Buttons } from "./Buttons";
import style from "./new.module.css"
import { Buttons } from "../Bestselling/Buttons";
import Navbar from "../../Navbar"



export const NewPage = () => {


  const [data, setData] = useState([])

  const navigate = useNavigate();

  const [page, SetPage] = useState(1)

  const pageChange = (e) => {
    SetPage(e.target.innerText)
    // console.log(page)
  }

  // const fetchApi = () => {
  // return   axios.get(`https://greekbuying.herokuapp.com/products2?_page=${page}&_limit=12`)
  //   .then( r => {
  //     setData(r.data)
  //   })
  //   .catch(e => console.log(e))
  // }
  
  // console.log(data)

  useEffect(() => {

    // https://geekbuyingbackend.onrender.com/product?page=1&limit=6
 
    axios.get(`https://geekbuyingbackend.onrender.com/product?page=${page}&limit=${12}`)
    .then( r => {
      setData(r.data)
    })
    .catch(e => console.log(e))

  }, [page])
  
console.log("data", data)




  return (

    <>

    <Navbar/>

    <Grid
      h="auto"
      w="80%"
      m="auto"
      templateRows="repeat(6, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      p="1.5rem 0px"
    >
      <GridItem rowSpan={2} colSpan={1} bg="#ffff">
       <Sidebar/>
      </GridItem>


      <GridItem colSpan={4} rowSpan={1} bg="#fff" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      p="20px">
           <FilterComp/>
      </GridItem>




      <GridItem colSpan={4} rowSpan={5}  >
        <SimpleGrid columns={[2,3,4]} spacing={5} p="5px">
          {data.map((item) => (
            <Box
              key={item.id}
              boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
              style={{ position: "relative", overflow:"hidden" }}
              onClick={() => navigate((`/new/${item._id}`))}
            >
                 <div className={`${style.ribbon} ${style.topright} ${style.blue}`}><span>New</span></div>

              <Img src={item.lazy_img_src} />
              {/* <Text fontSize="md" fontWeight={"300"}> */}
              <Text fontSize="md" fontWeight={"400"} style={{overflow : "hidden", lineHeight : "1.5rem", height: "3em"}} >
                {item.items_p}
              </Text>
              <Text fontWeight={"500"} fontSize="2xl" align={"left"} p="5px">
                {" "}
                 {item.items_price}
              </Text>
              <Text fontWeight={"200"} fontSize="sm" align={"left"} p="5px">
                {" "}
                {item.el_price !== null ? <s>{item.el_price}</s> : ""}{" "}
                {item.items_off !== null ? item.items_off : ""}
              </Text>
              <br />
              <Flex  style={{position : "absolute", bottom : 0}} gap={["40", "50px", "60px"]}>
                  <Text color={"grey"} p="5px">♥ {item.favit_count}</Text>
                  <Text color="grey"> Free Shipping</Text>
              </Flex>
            </Box>

          

          ))}
        </SimpleGrid>
      </GridItem>

    </Grid>

    <Buttons onclick = {pageChange}/>


    </>
  );
};
