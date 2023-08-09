import React from "react";
import ItemList from "./ItemList";
import {Flex } from "@chakra-ui/react";


const ItemListContainer = () => {

const productos = [
  {
    id: 1,
    nombre: "Sandwich",
    descripcion: "Descripcion del producto 1",
    precio: 500,
    img: "/src/assets/sandwich.jpg",
    stock: 5,
  },
  {
    id: 2,
    nombre: "Box Regalo",
    descripcion: "Descripcion del producto 2",
    precio: 600,
    img: "/src/assets/boxRegalo.jpg.jpg",
    stock: 5,
  },
  {
    id: 3,
    nombre: "Picada",
    descripcion: "descripcion del producto 3",
    precio: 900,
    img: "/src/assets/picada1.jpg.jpg",
    stock: 5,
  },
  {
    id: 4,
    nombre: "Sandwich",
    descripcion: "Descripcion del producto 4",
    precio: 400,
    img: "/src/assets/postre.jpg.jpg",
    stock: 5,
  },
];

const getProductos = new Promise((resolve, reject) => {
  if (productos.length > 0) {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  } else {
    reject(new error("No hay productos cargados"));
  }
});

getProductos
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

  return (
    <>
      <Flex>
        <ItemList productos={productos}/>
      </Flex>
    </>
  );
};

export default ItemListContainer;
