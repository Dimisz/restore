import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import type { Product } from "../../models/product"
import { Link } from "react-router-dom"

type ProductCardProps = {
  product: Product
}
export default function ProductCard({product}: ProductCardProps){
  return(
    <Card
      elevation={3}
      sx={{
        width: 280,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <CardActionArea>
        <CardMedia sx={{height: 240, backgroundSize: 'cover'}}
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography 
            gutterBottom 
            variant='subtitle2'
            sx={{textTransform: 'uppercase'}}
          >
            {product.name}
          </Typography>
          <Typography
            variant="h6"
            sx={{color: 'secondary.main'}}
          
          >${(product.price / 100).toFixed(2)}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{justifyContent: 'space-between'}}
      >
        <Button>Add to cart</Button>
        <Button component={Link} to={`/catalog/${product.id}`}>View</Button>
      </CardActions>
    </Card>
  )
}