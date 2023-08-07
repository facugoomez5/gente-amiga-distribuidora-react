import React from "react";
import { Flex, Box, Spacer } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <Flex>
      <Box m={1}>Carrito</Box>
      <Spacer/>
      <Box m={1}>5</Box>
    </Flex>
  );
};

export default CartWidget;
