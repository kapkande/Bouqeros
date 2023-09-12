import CreateSlidersItems from "./SliderItems"
import './SliderItems.css';
   

export default function CircularSlider() {
    return (
        <div className='flowers'>
            <div className="wrap">
                <CreateSlidersItems></CreateSlidersItems>
            </div>
        </div>
    )
}