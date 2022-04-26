import React, {useEffect, useState} from 'react';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard'

function Search () {
    return (
        <div>
            <h1>Main Search Page</h1>
            <SearchBar></SearchBar>
            <section style={styles.searchContainer}>
                <ProductCard></ProductCard>
            </section>
        </div>
    )
}
export default Search;

const styles = {
    searchContainer: {
        padding: "5rem",
        maxWidth:"80%",
        margin: "auto"
    }
}