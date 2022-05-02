import React, {useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard';
import Typography from '@mui/material/Typography'; 
import { Link } from 'react-router-dom';

function Search () {
    const [itemData, setItemData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() =>{
        async function fetchAPI(){
            const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json')

            const data = await response.json();

            let newProductArr = [];
            for (let i=550; i<750; i++){
                newProductArr.push(data[i])
            }
            setItemData(newProductArr);
        }
        fetchAPI()
        
    }, []);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = itemData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setSearchResults(filteredData)
        }
        else{
            setSearchResults(itemData)
        }
    }

    return (
        <div>
            <Typography variant="h3" component="div" style={styles.h3}>
                Beautify 
            </Typography>
            <div>
                <div style={styles.searchBackground}>
                    <form style={styles.searchForm}>
                        <input 
                            type="search"
                            onChange={(e) =>
                                searchItems(e.target.value)
                            }
                            placeholder="Search" 
                            style={styles.searchBar}
                        />
                    </form>
                </div>
            </div>
            <section style={styles.searchContainer} >
                {
                searchInput.length > 1 ? (
                    searchResults.map((item) => {
                        return(
                            <Link to={"productDetails/"+item.id} style={styles.noTextDecor}>
                                <ProductCard style={styles.noDecor}
                                    image={item.image_link} 
                                    key={item.id} 
                                    name={item.name} 
                                    product_type={item.product_type}
                                    brand={item.brand}    
                                    price={item.price}               
                                    />
                            </Link>
                            
                        )
                    })
                ) : (
                    itemData.map((item) => {
                        return(
                            <Link to={"productDetails/"+item.id} style={styles.noTextDecor} >
                                <ProductCard 
                                    image={item.image_link} 
                                    key={item.id} 
                                    name={item.name} 
                                    product_type={item.product_type}
                                    brand={item.brand} 
                                    price={item.price}
                                />
                            </Link>
                        )
                    })
                )}
            </section>
        </div>
    )
}
export default Search;

const styles = {
    searchContainer: {
        padding: "5rem",
        paddingLeft:"10rem",
        maxWidth:"90%",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent:"space-between",
        gap:'3rem'
        },
    searchBar: {
        width: "25rem",
        padding: "0.7rem",
        color: "#340410",
    },
    searchBackground: {
        backgroundColor: "#FCEAEE",
        width: "25rem",
        margin: "auto",
        padding: "0.3rem",
        display:"flex",
        flexDirection: "row"
    },
    searchIcon: {
        color: "#340410",
    },
    iconContainer: {
        margin: "auto"
    },
    searchForm: {
        display: 'flex',
        justifyContent:"space-around"
    },
    noTextDecor: {
        color: 'inherit', textDecoration: 'inherit'
    },
    h3 : {
        padding:'2rem'
    }
}