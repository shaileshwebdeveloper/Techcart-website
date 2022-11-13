import { Box, Heading, Button, Text } from "@chakra-ui/react";
import React from "react";
import CommonHeader from "../orderSummary/CommonHeader";
import "../../css/payment.css";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  return (
    <div>
      <CommonHeader />
      <br />
      <Box id="payment_method">
        <Heading as={"h4"}>Payment Method</Heading>
        <br />
        <Box className="pay_opt">
          <Box>
            <form className="">
              <Box padding={"3% 4%"} display={"flex"}>
                <input style={{ marginRight: "20px" }} type="radio" />
                <Box>
                  <img
                    src="https://content1.geekbuying.com/V1.4/en/images/cartImg/paypal.jpg?v=20221110"
                    alt=""
                  />
                  <Text marginTop={"10px"} color={"red"}>
                    $ 10 off $ 200 when paying with PayPal
                  </Text>
                </Box>
              </Box>

              <Box padding={"3% 4%"} display={"flex"}>
                <input style={{ marginRight: "20px" }} type="radio" />
                <Box>
                  <img
                    src="https://content1.geekbuying.com/V1.4/en/images/cartImg/Adyen_Klarna.svg?v=20221110"
                    alt=""
                  />
                  <Text marginTop={"10px"} color={"red"}>
                    $ 10 off $ 200 when paying with PayPal
                  </Text>
                </Box>
              </Box>
              <Box padding={"3% 4%"} display={"flex"}>
                <input style={{ marginRight: "20px" }} type="radio" />
                <Box>
                  <img
                    src="https://content1.geekbuying.com/V1.4/en/images/cartImg/useepaylog.jpg?v=20221110"
                    alt=""
                  />
                  <Text marginTop={"10px"} color={"red"}>
                    $ 10 off $ 200 when paying with PayPal
                  </Text>
                </Box>
              </Box>
            </form>
          </Box>
          {/* Pay Box */}
          <Box className="pay_box">
            <Box>
              <Text>Order No.:</Text>
              <Text fontWeight={"bold"}>5744684</Text>
            </Box>
            <Box>
              <Text>Grand Total: </Text>
              <Text fontWeight={"bold"}>9730.04</Text>
            </Box>
            <hr />
            <Box>
              <Text>Payable Amount:</Text>
              <Text fontWeight={"bold"} color={"red.500"}>
              9730.04
              </Text>
            </Box>
            <br />
            <Button marginBottom={"10px"} width={"100%"} bgColor={"yellow.400"}>
              <img
                id="paypal"
                src="https://www.blumenthalarts.org/assets/img/paypal-logo-26b71255bc.png"
                alt=""
              />
            </Button>
            <Link to="/bank">
              <Button width={"100%"} bgColor={"black"} color={"white"}>
                <Box display={"flex"} alignItems={"center"}>
                  <span class="material-symbols-outlined">credit_card</span>
                  <Text marginLeft={"10px"}>Debit or Credit Card</Text>
                </Box>
              </Button>
            </Link>
            <img
              id="pow_pay"
              src="https://techtolia.com/PayPal/assets/images/powered_by_paypal.png"
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PaymentPage;
