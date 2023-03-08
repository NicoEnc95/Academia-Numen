import Cardlist from "./components/Cardlist";

const db = [
    {
        id: 1,
        img: "https://tienda.movistar.com.ar/media/catalog/product/cache/29ccbb5c02aec1862b4f5a57a55d0f2f/a/1/a13-negro-frente.png",
        marca: "Samsung",
        modelo: "A13 128GB",
        precio: "$"+ 67.999
    },
    {
        id:2,
        img: "https://tienda.movistar.com.ar/media/catalog/product/cache/29ccbb5c02aec1862b4f5a57a55d0f2f/2/0/2021_aruba_basic-pack_graphite-gray_front_2.png",
        marca: "Motorola",
        modelo: "Moto E20",
        precio: "$"+35.999
    },
    {
        id:3,
        img: "https://tienda.movistar.com.ar/media/catalog/product/cache/29ccbb5c02aec1862b4f5a57a55d0f2f/e/d/edge30-gris-frente.png",
        marca:"Motorola",
        modelo: "Edge 30 5G",
        precio: "$" + 114.999 ,
    },

    {
        id:4,
        img: "https://tienda.movistar.com.ar/media/catalog/product/cache/29ccbb5c02aec1862b4f5a57a55d0f2f/g/2/g22-negro-frente_2.png",
        marca: "Motorola",
        modelo: "Moto G2",
        precio: "$" + 63.999
    }
]

function App() {
return (
<><Cardlist
data={db}/></>
);
}

export default App;
