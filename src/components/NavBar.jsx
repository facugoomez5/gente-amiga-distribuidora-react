import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Flex>
      <Box>Distribuidora Gente Amiga</Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Nosotros</MenuItem>
            <MenuItem>Productos</MenuItem>
            <MenuItem>Carrito</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box>
        <CartWidget />
      </Box>
    </Flex>
  );
};

export default NavBar;
