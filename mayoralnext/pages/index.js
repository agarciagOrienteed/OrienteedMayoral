import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProductList from './ProductList/productList';

export default function Home() {
  return (
    <div className={styles.container}>
      <ProductList/>
    </div>
  )
}
