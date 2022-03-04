import React, { useMemo, useState, useEffect } from 'react';
import ProductItem from './ProductItem/productItem';
import styles from '../../styles/ProductList/productList.module.css'
import testImage from './1columna.png';
import { productList } from './data';
//import { useProductList } from '../../hook/useProductList';

const ProductList = props => {
    const [itemsAMZ, setItemsAMZ] = useState(productList);

    //TODO: Code to the custom hook

    /*const {
        itemsAMZ
    } = useProductList();*/

    const items = [];

    if(itemsAMZ != null){
        itemsAMZ.map((item, index) => {
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
            <div className={styles.content}>
                {productItems}
            </div>
        </div>
    );
}

export default ProductList;
