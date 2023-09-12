import { Route, Routes } from "react-router-dom";
import CircularSlider from "./assets/components/circularSlider/CircularSlider"
import Header from "./assets/components/header/Header"
import Catalog from "./assets/components/catalog/Сatalog";

export default function App() {
    return (
        <main>
            <Header></Header>
            <Routes>
                <Route path="/flowers" element={<CircularSlider />} />
                <Route path="/" element={<Catalog/>} />
            </Routes>
        </main>
    );

}


