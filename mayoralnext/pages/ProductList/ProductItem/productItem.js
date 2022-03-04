import React from 'react';
import styles from '../../../styles/ProductList/ProductItem/productItem.module.css'

const ProductItem = props => {
    const { image, name, price, currency, subtotal, discount } = props;

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <div><img src={image} className={styles.image} alt="test"/></div>
                <div className={styles.name}>{name}</div>
                <div className={styles.price}>{price}{currency}</div>
                <div className={styles.discount}>{subtotal}{currency}({discount})</div>
                <div className={styles.moreColors}>más colores</div>
                <div className={styles.buttonContent}><button className={styles.button}>AÑADIR</button></div>
            </div>
        </div>
    );
}

export default ProductItem;
