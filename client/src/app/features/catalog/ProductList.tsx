import { Box } from "@mui/material"
import type { Product } from "../../models/product"
import ProductCard from "./ProductCard"

type ProductListProps = {
  products: Product[]
}
export default function ProductList({products}: ProductListProps){
  return(
    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent:'center'}}>
        {products.map(item => <ProductCard key={item.id} product={item}/>)
        }
      </Box>
  )
}