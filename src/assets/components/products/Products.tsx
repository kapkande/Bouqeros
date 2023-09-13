import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Iproduct } from "../indterfaceData/IProduct";

const data: Iproduct[] = [

    {
        id: 1,
        title: 'string',
        price: '1',
        description: 'string',
        category: 'string',
        image: 'string',
        rating: {
            rate: 1,
            count: 1,
        }
    }
]

export default function setProducts() {
    const [products, setProducts] = useState<Iproduct[]>(data);
    const [lodading, setLodading] = useState(false);
    const [error, setError] = useState('');
    async function fetchProduct() {

        try {
            setError('')
            setLodading(true)
            const respons = await axios.get<Iproduct[]>(`https://fakestoreapi.com/products`)

            setProducts(respons.data)
            setLodading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }
    console.log(products[0]);
    useEffect(() => {
        fetchProduct()
    }, [])

    return (
    
            {products.map((e) => {
            
            })}




    )
}