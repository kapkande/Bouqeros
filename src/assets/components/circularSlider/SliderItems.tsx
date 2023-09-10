import { Flowers } from '../interfaces/Flowers';
import flowers from '../../../data';
import styles from './SliderItems.module.css';
import { ReactEventHandler, useState } from 'react';



export default function CreateSlidersItems() {
    const [active, setActive] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = (e: any) => {
        setScrollTop(e.currentTarget.scrollTop);
        console.log(scrollTop);
    };
    console.log(scrollTop);

    return (
        <div onScroll={handleScroll}>
            {flowers.map(e =>
                <div className={styles.item} key={e.id}>
                    <div
                        style={{
                            backgroundImage: `url(${e.src})`
                        }}
                        className={styles.image}>
                    </div>
                    {active &&
                        <div className={styles.infoBlock}>
                            <div className={styles.name}>{e.name}</div>
                            <div className={styles.info}>{e.info}</div>
                            <div className={styles.cost}>{e.const}</div>
                            <div className={styles.buttons}>
                                <button>Buy now</button>
                                <button>Add to cart</button>
                            </div>
                        </div>}
                </div>
            )
            }
        </div>




    )
}

