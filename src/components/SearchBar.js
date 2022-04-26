import React from 'react';
import { BsSearch } from 'react-icons/bs'
const SearchBar = () => {
    return (
        <div>
            <div style={styles.searchBackground}>
            <input type="text" placeholder="Search" style={styles.searchBar}/>
            <div style={styles.iconContainer}>
                <BsSearch style={styles.searchIcon} size={23}></BsSearch>
            </div>
            
            </div>
        </div>
    );
}

export default SearchBar

const styles = {
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
        display:"flex"
    },
    searchIcon: {
        color: "#340410",
    },
    iconContainer: {
        margin: "auto"
    }
}