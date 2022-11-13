import { Box, Heading, Img, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import CommonHeader from "./orderSummary/CommonHeader";
import "../css/bank.css"
import { useNavigate } from "react-router-dom";

const End = () => {
  const [img, setImg] = useState(
    "https://cdn.dribbble.com/users/447957/screenshots/6899626/payment-animation.gif"
  );
  const [process, FinishProcess] = useState("Processing, Please Wait...");
  const [redirect, setRedirect] = useState("");
  // let [seconds,setSeconds] = useState(3)

  const navigate = useNavigate()

  useEffect(() => {

    setTimeout(() => {
      setImg(
        "https://www.kernelios.com/wp-content/uploads/2018/07/successgif.gif"
      );
      FinishProcess("Payment successful..!!");
      // setSeconds(second)
      setRedirect(`Redirecting to 🏠`)

    }, 4000);


    setTimeout(() => {
      navigate("/")
    }, 6000)

    //  navigate("/")

  },[])

  return (
    <div>
      <CommonHeader />
      <Box className="end">
        <Img id="loading" src={img} alt="" m="auto"/>
        <Heading size={"lg"}>{process} </Heading>
        <br />
      <Text>{redirect}</Text>
      </Box>
      
    </div>
  );
};

export default End;