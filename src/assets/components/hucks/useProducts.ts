import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../indterfaceData/IProduct";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading , setLoading ] = useState(false);
    const [error, setError] = useState('');

    async function fetchProduct() {
        try {
            setError('')
            setLoading (true)
            const respons = await axios.get<IProduct[]>(`https://fakestoreapi.com/products`)
            setProducts(respons.data)
            setLoading (false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    return {products, loading, error}
}