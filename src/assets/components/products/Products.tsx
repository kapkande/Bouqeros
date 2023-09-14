import { useState } from "react";
import { useProducts } from "../hucks/useProducts";
import { IProduct } from "../indterfaceData/IProduct";
import styles from "./Products.module.css";

import './index.css'
import Range from "./Range";
import { products } from "../../../data";

export default function setProducts() {


    // const { products, lodading, error } = useProducts();

    const [activeImage, setActiveImage] = useState('')
    const [idItem, setIdItem] = useState(-1)
    // const [classItem, setClassItem] = useState('products__item');
    console.log( products);
    // function onMouseOver(e:any) {
    //     e.target.classList.add('active')
    // }

    // function onMouseOut(e:any) {
    //     e.target.classList.remove('active')
    // }
    function onClick(imageLink: string, idItem: number) {
        setActiveImage(imageLink)
        setIdItem(idItem)

    }

    console.log(activeImage);
    return (
        <div className={styles.wrapper}>
            {/* {lodading && <h1 className={styles.lodading}>Loading...</h1>}
            {error && <h1>{error}</h1>} */}

            {products && products.map((e: IProduct, i: number) => {
                if (i > 4) { return }
                return (
                    <div
                        key={e.id}
                        className={styles.item}
                    >

                        <div
                            className={styles.imege}
                            style={{
                                backgroundImage: `url(${idItem == e.id ? activeImage : e.image[0]})`
                            }}
                        >
                            <div className={styles.like}></div>
                            <Range arr={e.image} element={e} onClick={onClick} ></Range>
                            {/* {isActive && <h1 className={styles.asd}></h1>} */}
                        </div>
                        <div className={styles.info}>
                            <div className={styles.title}>{e.title}</div>
                            <div className={styles.price}>{e.price}$</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
