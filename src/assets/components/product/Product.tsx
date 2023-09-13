import axios, { AxiosError } from 'axios'
import DescriptionProduct from './Description'
import ImageProduct from './ImageProduct'
import styles from './Product.module.css'
import SliderProduct from './SliderProduct'
import { useEffect, useState } from 'react';
import { Iproduct } from '../indterfaceData/IProduct'

export default function Product(id: number) {
    const [product, setProducts] = useState<Iproduct>();
    const [lodading, setLodading] = useState(false);
    const [error, setError] = useState('');

    async function fetchProduct() {
        try {
            setError('')
            setLodading(true)
            const respons = await axios.get<Iproduct>(`https://fakestoreapi.com/products/1`)
            setProducts(respons.data)
            setLodading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }
    useEffect(() => {
        fetchProduct()
    }, [])


    if (!product) { return }
    const arr: [string, number][] = [[product.image, 0], [product.image, 1], [product.image, 2], [product.image, 3], [product.image, 4], [product.image, 5], [product.image, 6]]


    // console.log(product.image);
    return (
        <div className={styles.product}>
            {lodading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            <SliderProduct arr={arr}></SliderProduct>
            <ImageProduct image={product.image}></ImageProduct>
            <DescriptionProduct product={product}></DescriptionProduct>
        </div>
    )
}