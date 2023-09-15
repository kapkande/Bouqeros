import { useState } from "react";
import { useProducts } from "../hucks/useProducts";
import { IProduct } from "../indterfaceData/IProduct";
import styles from "./Products.module.css";

import Range from "./Range";
import { products } from "../../../data";

interface IProductsProps { }

export default function Products(props: IProductsProps) {
    const [activeImages, setActiveImages] = useState<{ [id: number]: string }>({});

    function handleClick(imageLink: string, id: number) {
        setActiveImages((prev) => ({ ...prev, [id]: imageLink }));
    }
console.log(activeImages);
    return (
        <div className={styles.wrapper}>
            {products.slice(0, 5).map((product: IProduct) => (
                <div key={product.id} className={styles.item}>
                    <div
                        className={styles.image}
                        style={{
                            backgroundImage: `url(${activeImages[product.id] || product.image[0]})`,
                        }}
                    >
                        <div className={styles.like}></div>
                        <Range
                            element={product}
                            arr={product.image}
                            onClick={handleClick}
                            
                        />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.title}>{product.title}</div>
                        <div className={styles.price}>{product.price}$</div>
                    </div>
                </div>
            ))}
        </div>
    );
}