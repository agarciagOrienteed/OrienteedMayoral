import React, { useMemo, useState, useEffect } from 'react';
import styles from '../../styles/ProductList/productList.module.css'

const SearchBar = props => {

    const { productList, setItemsView } = props;

    const [searchField, setSearchField] = useState("");

    const filteredPersons = productList.filter(
        product => {
          return (
            product
            .name
            .toLowerCase()
            .includes(searchField.toLowerCase())
          );
        }
      );

      const handleChange = e => {
        setSearchField(e.target.value);
        console.log(e.target.value);
      };

    const filteredProducts = useMemo(() => {
        setItemsView();
    }, [searchField, productList]);

    return (
        <div className={styles.searchBarContainer}>
            <input 
                className={styles.searchBar}
                type = "search" 
                placeholder = "Search Product:" 
                onChange = {handleChange}
            />
        </div>
    );
}

export default SearchBar;
