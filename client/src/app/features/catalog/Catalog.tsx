// import { useEffect, useState } from "react";
// import type { Product } from "../../models/product";
import ProductList from "./ProductList";
import { useFetchProductsQuery } from "../contacts/catalogApi";


export default function Catalog(){
  // const [products, setProducts] = useState<Product[]>([]);
  // useEffect(() => {
  //     fetch('https://localhost:5001/api/products')
  //       .then(response => response.json())
  //       .then(data => setProducts(data))
  //       .catch(e => console.log(`Error fetching data: ${e}`))
  //   }, []);
  // RELACE WITH THE RTK HOOK
  const {data, isLoading} = useFetchProductsQuery();
  if(isLoading || !data) return <div>Loading....</div>

  return(
    <ProductList products={data} />
  );
}