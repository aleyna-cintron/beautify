import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';



function ProductDetails () {
    // Storage for item details
    const [itemData, setItemData] = useState([]);

    // Select ID from params
    const {id} = useParams();

    useEffect(() =>{
        async function fetchAPI(){
            const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)


            const data = await response.json();

            setItemData(data);
            console.log(data);
        }
        fetchAPI()
        
    }, []);


    return (
        <div style={styles.container}>
            <div className='productInfo' style={styles.productInfo}>
                <div className='leftSide'>
                    <Typography variant="h5" component="div" style={styles.vollkorn}>
                        {itemData.name}
                    </Typography>
                    <img src={itemData.image_link} alt={itemData.name} style={styles.img}></img>
                    <Typography gutterBottom variant="body1" component="div" style={styles.vollkorn}>
                        Price: ${itemData.price}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div" style={styles.vollkorn}> Rating: {itemData.rating} stars</Typography>
                </div>
                <section className='rightSide' style={styles.rightSide}>
                    <Typography gutterBottom variant="h5" component="div" style={styles.vollkorn}>
                        About this product:
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div" style={styles.roboto}>
                        {itemData.description}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" style={styles.roboto}>
                        Interested in this product? <a href={itemData.website_link}>Click Here</a> to find where to purchase it
                    </Typography>
                </section>
            </div>
        </div>
    )
}
export default ProductDetails

const styles = {
    container: {
        padding: '3rem',
        paddingLeft: '15rem',
        marginTop: '4rem'
    },
    productInfo: {
        display: 'flex',
        flexDirection: 'row'
    },
    img: {
        height: 'auto',
        width: 'auto',
        padding: '2.5rem'
    },
    rightSide: {
        padding:'1rem',
        maxWidth: '40%',
        margin:'auto',
        marginTop: '5rem',
    },
    roboto: {
        fontFamily: "'Roboto', sans-serif",
        color: 'black'
    },
    vollkorn: {
        fontFamily: "'Vollkorn', serif", 
        color: '#340410'
    }
}