import {
  Box,
  GridItem,
  SimpleGrid,
  Grid,
  Text,
  Img,
  Flex,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "./new.module.css";
import { Sidebar } from "./Sidebar";
import { FilterComp } from "./FilterComp";
import axios from "axios";
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { getBikes } from "../../../Redux/Bikes/action";
import { useDispatch, useSelector } from 'react-redux'
import { Buttons } from "../Bestselling/Buttons";
import { SingleNew } from "../Single/SingleNew";



export const New = () => {


  const [data, setData] = useState([])

  let bikes = useSelector((state) => state.BikeReducer.bikes);
  const [searchParams] =useSearchParams()
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [length, setLength] = useState(12)
  bikes = bikes.slice(0,length);

  useEffect(() => {
    if (location || bikes.length === 0) {
        const sortBy = searchParams.get('sortBy')
        let getBikesParams = {
            params: {
                state: searchParams.getAll('state'),
                _sort: sortBy && 'price',
                _order: sortBy,
                brand: searchParams.getAll('brand')
            },
        };
      dispatch(getBikes(getBikesParams));
    }
  }, [location.search, length]);
  




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
           <FilterComp/>
      </GridItem>




      <GridItem colSpan={4} rowSpan={5}  >
        <SimpleGrid columns={[2,3,4]} spacing={5} p="5px">
          {bikes.map((item) => (
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
              <Text fontWeight={"500"} fontSize="2xl">
                {" "}
                ₹ {item.items_price}
              </Text>
              <Text fontWeight={"200"} fontSize="sm">
                {" "}
                {item.el_price !== null ? <s>{item.el_price}</s> : ""}{" "}
                {item.items_off !== null ? item.items_off : ""}
              </Text>
              <br />
              <Flex  style={{position : "absolute", bottom : 0}} gap={["40", "70px", "75px"]}>
                  <Text color={"grey"}>♥ {item.favit_count}</Text>
                  <Text color="grey"> Free Shipping</Text>
              </Flex>
            </Box>

          

          ))}
        </SimpleGrid>
      </GridItem>

    </Grid>

    <Button colorScheme="teal" variant="outline" margin="auto" mt="1rem" onClick={() => setLength(length + 3)}>
              {length}
      </Button>

    </>
  );
};
