import styles from './Product.module.css'
import { useState } from 'react';
export default function SliderProduct({ arr }) {
    //
    const [images, setImages] = useState()
console.log(arr);
    //
    return (
        <div className={styles.sliderProduct}>
            {arr.map((e: any, i: number) => {
                <div
                    className="sliderItem"
                    style={{
                        backgroundImage: `url(${e})`
                    }}
                    key={i}
                >
                </div>
            })}
        </div>
    )
}