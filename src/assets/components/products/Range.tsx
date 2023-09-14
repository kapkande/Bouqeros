import { IProduct } from "../indterfaceData/IProduct";
import styles from "./Products.module.css";
import { useState } from "react";

interface IRangeProps {
    element: IProduct;
    arr: string[];
    onClick: any
}

export default function Range({ element, arr, onClick  }: IRangeProps) {
    if (!element) { return }

   
    function handleClick(imageLink:string) {
        // console.log(element.id);
        onClick(imageLink, element.id);
      }

    if (!arr) { return }

    return (
        <div className={styles.range}>
            {arr.map((e: string, i: number) => {
                return <span className={styles.stick} key={i}
                    onClick={() => { handleClick(e) }}
                ></span>
            })}
        </div>
    )
}