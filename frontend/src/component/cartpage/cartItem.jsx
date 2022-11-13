import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import CartPage from "./CartPage";

const CartItem = () => {
    
  const [count, setCount] = useState(1);

  return (
    <div>
      <Box display={"flex"}>
        <input type="checkbox" />
        <Box className="cartitem">
        <Box>
          <img
            src="https://img.gkbcdn.com/p/2022-05-30/3-5-Inch-IPS-TYPE-C-Secondary-Screen-CPU-GPU-RAM-HDD-Monitoring-501430-0._w280_.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Text>
          Lenovo R1 Smartwatch 1.3'' TFT Screen 7 Sport Modes, Sleeping & Heart Rate Monitor, DIY Design Watch, IP68 Waterproof - Grey
          </Text>
        </Box>

        <Box><Text>4865.02</Text></Box>
        <Box display={"flex"}>
          <Button onClick={()=> setCount(count-1)} disabled={count === 0}> - </Button>
          <Button>{count}</Button>
          <Button onClick={()=> setCount(count+1)} disabled={count === 10}> + </Button>
        </Box>
        <Box>
          <Text>{(4865.02 * count).toFixed(2)}</Text>
        </Box>
        <Box>
        <Text>🗑</Text>
        </Box>
            
        </Box>
        {/* <CartPage count={count}/> */}
      </Box>
    </div>
  );
};

export default CartItem;
