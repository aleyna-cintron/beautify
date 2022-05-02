import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';


const ProductCard = props => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Product Type: {props.product_type}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              description: {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default ProductCard;