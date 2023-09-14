import { Link } from 'react-router-dom';
import styled from "styled-components";

export const ContainerFutureProducts = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  h1 {
    text-align: center;
    font-size: 40px;
  }
`;

export const ListProducts = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
`;

export const Product = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 350px;
  margin: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: 0.3s ease-in;
    cursor: pointer;
  }

  img {
    width: 400px;
  }
`;

export const NameProduct = styled.p`
  text-align: center;
  font-weight: bold;
`;

export const DescriptionProduct = styled.p`
  text-align: center;
`;

export const PriceProduct = styled.p`
  text-align: center;
`;

export const AddToCartButton = styled.button`
  background-color: transparent;
  border: 2px solid rgb(19, 19, 19);
  min-width: 100px;
  padding: 10px 10px 5px 5px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s ease-in;

  &:hover {
    background-color: rgb(19, 19, 19);
    color: white;
  }
`;

export const ProductDetailLink = styled(Link)`
    text-decoration: none; 
    background-color: transparent;
    border: 2px solid rgb(19, 19, 19);
    min-width: 100px;
    padding: 5px 10px;
    border-radius: 15px;
    display: inline-block;
    text-align: center;
    transition: 0.3s ease-in;
    color: rgb(19, 19, 19); 

    &:hover {
        background-color: rgb(19, 19, 19);
        color: white;
        cursor: pointer;
    }
`;