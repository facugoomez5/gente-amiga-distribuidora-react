import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  Heading,
  Text,
  Image
} from "@chakra-ui/react";

const Item = ({nombre, descripcion, stock, img, precio}) => {
  return (
    <>
      <Card maxW="sm" className="tarjeta">
        <CardBody>
          <Image
            src={img}
            alt="imagen"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{nombre}</Heading>
            <Text>
              {descripcion}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              ${precio}
            </Text>
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
