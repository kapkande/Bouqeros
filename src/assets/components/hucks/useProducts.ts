import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../indterfaceData/IProduct";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [lodading, setLodading] = useState(false);
    const [error, setError] = useState('');

    async function fetchProduct() {
        try {
            setError('')
            setLodading(true)
            const respons = await axios.get<IProduct[]>(`https://fakestoreapi.com/products`)
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
    return {products, lodading, error}
}