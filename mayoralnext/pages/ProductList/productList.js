import React, { useMemo, useState, useEffect } from 'react';
import ProductItem from './ProductItem/productItem';
import styles from '../../styles/ProductList/productList.module.css'
import { productList } from './data';
//import { useProductList } from '../../hook/useProductList';

const ProductList = props => {
    const [itemsView, setItemsView] = useState(productList);

    //TODO: Code to the custom hook

    /*const {
        itemsAMZ
    } = useProductList();*/

    const items = [];

    const [searchState, setSearchState] = useState(true);

    const filter = (searchValue)=>{
        if(searchValue != ""){
            var searchResult = itemsView.filter((element) => {
                if(element.name.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())){
                    return element;
                }
            });
    
            if(searchResult.length > 0){
                setSearchState(true)
                setItemsView(searchResult);
            }else{
                setSearchState(false)
                setItemsView(productList);
            }
        }else {
            setSearchState(true)
            setItemsView(productList);
        }
        
    }

    const handleChange = e => {
        console.log("Search: " + e.target.value);
        filter(e.target.value);
    };

    if(itemsView != null){
        itemsView.map((item, index) => {
            console.log("Item: " + item);
            const propertiesItem = {
                image: item.image,
                name: item.name,
                price: item.price,
                currency: item.currency,
                subtotal: item.subtotal,
                discount: item.discount,
            };
            items.push(propertiesItem);
        });
    }

    const productItems = useMemo(() => {
        return items.map((item, index) => {
            return (<ProductItem image={item.image} name={item.name} price={item.price} currency={item.currency} subtotal={item.subtotal} discount={item.discount} />);
        })
    }, [items]);

    return (
        <div className={styles.root}>
            <div className={styles.searchBarContainer}>
                <input 
                    className={styles.searchBar}
                    type = "search" 
                    placeholder = "Search Product:" 
                    onChange = {handleChange}
                />
                {!searchState ? <div className={styles.error}>No existen valores para esta busqueda</div> : null}
            </div>
            <div className={styles.content}>
                {productItems}
            </div>
        </div>
    );
}

export default ProductList;
