import { useEffect, useState } from "react";
import type { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(e => console.log(`Error fetching data: ${e}`))
  }, []);


  return (
    <div>
      <h1>Restore</h1>
      <ul>
        {products.map(item =>
          <li key={item.name}>{item.name}: ${item.price}</li>)
        }
      </ul>
    </div>
  )
}

export default App
