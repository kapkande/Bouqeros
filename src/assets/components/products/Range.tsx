import { IProduct } from "../indterfaceData/IProduct";
import styles from "./Products.module.css";
import { useState } from "react";

interface IRangeProps {
    element: IProduct;
    arr: string[];
    onClick: (imageLink: string, id: number) => void;

}
const stick:string = 'stick'
export default function Range({ element, arr, onClick }: IRangeProps) {
    if (!element || !arr) {
        return null;
    }
    const [activeStick, setActiveStick] = useState<{ [id: number]: string }>({});

    const handleClick = (imageLink: string, id: number) => {
        onClick(imageLink, id);
        
        setActiveStick((prev) => ({ ...prev, [id]: imageLink }));
        
    };
    console.log(activeStick);
    return (
        <div className={styles.range}>
            {arr.map((e: string, i: number) => (
                <span
                    className={`${activeStick[i] || stick}`}
                    key={i}
                    onMouseMove={() => handleClick(e, element.id)}
                ></span>
            ))}
        </div>
    );
}
