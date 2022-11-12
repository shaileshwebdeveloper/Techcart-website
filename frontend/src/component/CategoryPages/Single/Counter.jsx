import { Button } from "@chakra-ui/react";

export const Counter = ({qty, setQty}) => {
   

  return (
    <>
      <Button disabled={qty === 1} onClick={() => setQty(qty - 1)}>
      -
      </Button> {qty}
      <Button onClick={() => setQty(qty + 1)}>+</Button>

    </>
  );
};