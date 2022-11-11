import { Box, Button } from "@chakra-ui/react";
import React from "react";
import PinInput from "react-pin-input";

const OTP = () => {
  return (
    <div>
      <Box className={"otp"}>
        <label htmlFor="">Enter O.T.P :</label>
        <PinInput
          length={4}
          initialValue=""
          //   secret
          onChange={(value, index) => {}}
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
        <Button
          width={"40%"}
          margin={"auto"}
          display={"block"}
          bgColor={"blue.500"}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default OTP;
