import type { Product } from "../../models/product";
import ProductList from "./ProductList";
type CatalogProps = {
  products: Product[]
}

export default function Catalog(props: CatalogProps){
  return(
    <ProductList products={props.products} />
  );
}