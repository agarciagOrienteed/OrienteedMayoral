import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProductList from './ProductList/productList';
import { getData } from '../utils/getData';

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await getData();

  // Pass data to the page via props
  return { props: { data } }
}

export default function Home(props) {

  const { data } = props;
  
  return (
    <div className={styles.container}>
      {console.log(props)}
      <ProductList data={data} />
    </div>
  )
}

