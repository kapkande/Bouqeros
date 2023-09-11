// import { Flowers } from '../interfaces/Flowers';
// import styles from './SliderItems.module.css';
import flowers from '../../../data';

import './SliderItems.css';
import { ReactEventHandler, useState } from 'react';



export default function CreateSlidersItems() {
    const [active, setActive] = useState(false);
    const [scrollTop, setScrollTop] = useState(null);
    const [position, setPosition] = useState([0, 1, 2, 3]);



    const [num, setNum] = useState(0);

    // for (let i = 0; i < position.length; i++) {
    //     position[i] = i
    // }


    function handleScroll(e: any) {
        if (e.deltaY > 0) {
            position.push(+position.splice(0, 1).join())
            setPosition(position)
            setNum(position[0])
        } else {
            position.unshift(+position.splice(position.length - 1, 1).join())
            setPosition(position)
            setNum(position[0])
        }
    }

    return (
        <div onWheel={handleScroll}>
            {flowers.map((e, i) =>

                <div className={`flowerItem-${position[i]} flower__item`} key={e.id}>
                    <div
                        style={{
                            backgroundImage: `url(${e.src})`
                        }}
                        className='flower__image'>
                    </div>
                    <div className={'flower__infoBlock'}>
                        <div className={'flower__name'}>{e.name}</div>
                        <div className={'flower__info'}>{e.info}</div>
                        <div className={'flower__cost'}>{e.const}</div>
                        <div className={'flower__buttons'}>
                            <button>Buy now</button>
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            )
            }
        </div>




    )
}

// function handleScroll(e: any) {
//     if (e.deltaY > 0) {
//         arr.push(+arr.splice(0, 1).join())
//         setPosition(arr)
//         console.log(position);

//     } else {
//         position.unshift(+position.splice(position.length - 1, 1).join())

//     }

// };