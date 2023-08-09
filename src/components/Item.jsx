import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  ButtonGroup,
  Button
} from "@chakra-ui/react";

const Item = ({nombre, descripcion, stock}) => {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Stack mt="6" spacing="3">
            <h1 size="md">{nombre}</h1>
            <h2>
              {descripcion}
            </h2>
            <p color="blue.600" fontSize="2xl">
              {stock}
            </p>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default Item;
