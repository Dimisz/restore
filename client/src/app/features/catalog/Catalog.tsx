import type { Product } from "../../models/product";
type CatalogProps = {
  products: Product[]
}

export default function Catalog(props: CatalogProps){
  return(
    <ul>
        {props.products.map(item =>
          <li key={item.id}>{item.name}: ${item.price}</li>)
        }
      </ul>
  );
}