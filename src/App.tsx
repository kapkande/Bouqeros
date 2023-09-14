import { Route, Routes } from "react-router-dom";
import CircularSlider from "./assets/components/circularSlider/CircularSlider"
import Header from "./assets/components/header/Header"
import Catalog from "./assets/components/catalog/Сatalog";
// import Product from "./assets/components/product/Product";
import Products from "./assets/components/products/Products";

export default function App() {
    // const id:number = 1
    return (
        <main>
            <Header></Header>
            <Routes>
                {/* <Route path="/flowers" element={<CircularSlider />} /> */}
                
                <Route path="/" element={<Products></Products>} />
                {/* <Route path="/" element={<Product id={1}></Product>} /> */}
            </Routes>
        </main>
    );

}


