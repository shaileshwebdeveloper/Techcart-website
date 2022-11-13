import { Box, Input,Button } from "@chakra-ui/react";
import React, { useState } from "react";
import CommonHeader from "../orderSummary/CommonHeader";
import "../../css/bank.css";
import PinInput from "react-pin-input";
import { Link } from "react-router-dom";

const card = {
  cardNumber: "",
  mmyy: "",
  cvv: "",
};

const Bank = () => {
  const [otp, setOtp] = useState(false);
  const [user, setuser] = useState(card);


  // ===> Input handler ==>

  const handleInput = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };



  // ====> Form handler ===>

  const handleOtp = (e) => {
    e.preventDefault();

    const otp = Math.floor(Math.random(1000) * 9999);

    if (user.cardNumber && user.mmyy && user.cvv) {
      alert(`Your OTP is ${otp}`);
      setOtp(true);
    } else {
      alert("Please enter a valid details...");
    }
  };



  

  return (
    <div>
      <CommonHeader />
      <Box border="1px solid red">
        <img
          className="bank_bg"
          src="https://www.purpleno.in/wp-content/uploads/2019/07/payment-gateway.jpg"
          alt=""
        />
      </Box>
      <Box className="bank_form_div">
        <form onSubmit={handleOtp} className="bank_form">
          <label htmlFor="">
            <span>*</span>Enter Your 16 Digit Card Number
          </label>
          <Box display={"flex"}>
            <Input
              name="cardNumber"
              onChange={handleInput}
              marginTop={"10px"}
              maxLength={16}
              type={"text"}
            />
          </Box>
          <br />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box width={"45%"}>
              <label htmlFor="">
                <span>*</span>MM/YY
              </label>
              <Input
                name="mmyy"
                onChange={handleInput}
                marginTop={"10px"}
                type="text"
                maxLength={5}
              />
            </Box>
            <Box width={"45%"}>
              <label htmlFor="">
                <span>*</span>CVV
              </label>
              <Input
                name="cvv"
                onChange={handleInput}
                marginTop={"10px"}
                type="password"
                maxLength={3}
              />
            </Box>
          </Box>
          <br />
          <Input
            type="submit"
            value="Send O.T.P"
            width={"40%"}
            margin={"auto"}
            display={"block"}
            bgColor={"blue.500"}
          />
        </form>
      </Box>

      {otp && (
        <Box className={"otp"} >
          <label htmlFor="">Enter O.T.P :</label>
          <PinInput
            length={4}
            initialValue=""
            //   secret
            type="numeric"
            inputMode="number"
            style={{ padding: "10px" }}
            inputStyle={{
              borderColor: "white",
              borderRadius: "5px",
              margin: "10px",
            }}
            inputFocusStyle={{ borderColor: "black" }}
            onComplete={(value, index) => {}}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
          <Link to={"/end"}>
          <Button
            width={"40%"}
            margin={"auto"}
            display={"block"}
            bgColor={"blue.500"}
          >
            Submit
          </Button></Link>
        </Box>
      )}
    </div>
  );
};

export default Bank;
