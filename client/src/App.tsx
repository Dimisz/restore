import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState<{name: string, price: number}[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(e => console.log(`Error fetching data: ${e}`))
  }, []);

  const addProduct = () => {
    setProducts(prevState => [...prevState, {name: `product${prevState.length+1}`, price: 100.00*(prevState.length+1)}])
  }

  return (
    <div>
      <h1>Restore</h1>
      <ul>
        {products.map(item =>
          <li key={item.name}>{item.name}: ${item.price}</li>)
        }
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default App
