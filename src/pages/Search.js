import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Search () {
    const [itemData, setItemData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() =>{
        axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
            .then((res) => {
                setItemData(res.data);
                console.log(itemData)
        })
    }, [])

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
            <h1>Main Search Page</h1>
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
                        {/* <div style={styles.iconContainer}>
                            <button type="submit">
                                <BsSearch style={styles.searchIcon} size={22}></BsSearch>
                            </button>
                        </div> */}
                    </form>
                </div>
            </div>
            <section style={styles.searchContainer}>
                {
                searchInput.length > 1 ? (
                    searchResults.map((item) => {
                        return(
                            <Link to={"productDetails/"+item.id}>
                                <ProductCard 
                                    image={item.image_link} 
                                    key={item.id} 
                                    name={item.name} 
                                    description={item.description}
                                />
                            </Link>
                            
                        )
                    })
                ) : (
                    itemData.map((item) => {
                        return(
                            <Link to={"productDetails/"+item.id}>
                                <ProductCard 
                                    image={item.image_link} 
                                    key={item.id} 
                                    name={item.name} 
                                    description={item.description}
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
        width: "20rem",
        padding: "0.7rem",
        color: "#340410",
    },
    searchBackground: {
        backgroundColor: "#FCEAEE",
        width: "22%",
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
    }
}