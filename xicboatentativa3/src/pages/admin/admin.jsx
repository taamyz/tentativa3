import { useState } from "react";
import { Button, FormGroup, FormWrapper, Input, Label } from "./style";
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { app } from "../../service/firebase";


export function PageAdmin() {

  const [categoryId, setCategoryId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');


  const firestore = getFirestore(app)

  const cadastrarProduto = async () => {
    const novoProduto = {
       categoryId,
       title,
       description,
       image,
       price: parseFloat(price),
       stock: parseInt(stock),
    };
 
    try {
       const docRef = await addDoc(collection(firestore, "produtos"), novoProduto);
       console.log("produto cadastrado com sucesso!", docRef.id);
    } catch (error) {
       console.error("Error adding product: ", error);
    }

    setCategoryId('')
    setTitle('')
    setDescription('')
    setImage('')
    setPrice('')
    setStock('')
 };



  return (
    <FormWrapper>
      <h2>Cadastro de Cafés</h2>
      <FormGroup>
        <Label>Categoria ID:</Label>
        <Input type="text" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Título:</Label>
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Descrição:</Label>
        <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Imagem:</Label>
        <Input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Preço:</Label>
        <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Estoque:</Label>
        <Input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
      </FormGroup>
      <Button onClick={cadastrarProduto}>Cadastrar</Button>
    </FormWrapper>
  )
}