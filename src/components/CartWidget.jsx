import React from "react";
import { Flex, Box, Spacer, Center } from "@chakra-ui/react";
import brand from "../assets/carrito-de-compras.png";

const CartWidget = () => {
  return (
    <Flex alignItems="Center">
      <Box m={1}> <img src={brand} alt="carrito" width="40px"/> </Box>
      <Spacer/>
      <Box m={1}>5</Box>
    </Flex>
  );
};

export default CartWidget;
