import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SearchBar = (searchItems) => {
    return (
        <div>
            <div style={styles.searchBackground}>
            <form style={styles.searchForm}>
                <input 
                    onChange={(e) => searchItems(e.target.value)} placeholder="Search" 
                    style={styles.searchBar}
                />
                <div style={styles.iconContainer}>
                    <Link to="/search">
                        <BsSearch style={styles.searchIcon} size={22}></BsSearch>
                    </Link>
                </div>
            </form>
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