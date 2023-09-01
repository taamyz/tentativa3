import React from "react"
import { useParams } from "react-router-dom"
import { PRODUCTS } from "../shop/products"

function Detail() {
    const { product } = useParams()
    const thisProduct = PRODUCTS.find(prod => prod.id === Number(product))

    if(!thisProduct) {
       return <div>Produto não encontrado!</div>;
    }
    
    return (
        <div>
            <h1>{thisProduct.productName}</h1>
            <img src={thisProduct.productImage} alt={thisProduct.productName} />
            <p>R${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
        </div>
    )
}

export default Detail
