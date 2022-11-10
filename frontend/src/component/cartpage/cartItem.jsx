import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

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
            3.5 Inch IPS TYPE-C Secondary Screen CPU GPU RAM HDD Monitoring USB
            Display
          </Text>
        </Box>

        <Box><Text>1928.73</Text></Box>
        <Box display={"flex"}>
          <Button onClick={()=> setCount(count-1)} disabled={count === 0}> - </Button>
          <Button>{count}</Button>
          <Button onClick={()=> setCount(count+1)} disabled={count === 10}> + </Button>
        </Box>
        <Box>
          <Text>{(1928.73 * count).toFixed(2)}</Text>
        </Box>
        <Box>
        <Text>🗑</Text>
        </Box>
            
        </Box>
      </Box>
    </div>
  );
};

export default CartItem;
