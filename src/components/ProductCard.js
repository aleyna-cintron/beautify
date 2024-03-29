import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';


const ProductCard = props => {
    return (
        <Card sx={{ width: 345, height: 345}} style={styles.card}>
        <CardActionArea>
          <CardMedia style={styles.img}
            component="img"
            height="140"
            image={props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={styles.vollkorn}>
              {props.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" style={styles.roboto}>
              Price: ${props.price}
            </Typography>
            <Typography variant="body1" color="text.secondary" style={styles.roboto}>
              Product Type: {props.product_type}
            </Typography>
            <Typography variant="body1" color="text.secondary" style={styles.roboto}>
              Brand: {props.brand}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default ProductCard;

const styles = {
  card: {
    overflow: 'hidden'
  },
  img: {
    width: 'auto',
    margin: 'auto'
  },
  roboto: {
    fontFamily: "'Roboto', sans-serif",
    color: 'black', 
  },
  vollkorn: {
    fontFamily: "'Vollkorn', serif",
    color: '#340410', 
  }
}