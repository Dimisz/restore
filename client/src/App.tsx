const products = [
  {name: "product1", price: 100.00},
  {name: "product2", price: 200.00},
];

function App() {

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
