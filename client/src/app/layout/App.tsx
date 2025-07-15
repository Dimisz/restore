import { useEffect, useState } from "react";
import type { Product } from "../models/product";
import Catalog from "../features/catalog/Catalog";
import { Button, Container, Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(e => console.log(`Error fetching data: ${e}`))
  }, []);


  return (
    <Container maxWidth='xl'>
      <Typography variant='h4'>Restore</Typography>
      <Catalog products={products}/>
      <Button variant='contained'>Add product</Button>
    </Container>
  )
}

export default App
