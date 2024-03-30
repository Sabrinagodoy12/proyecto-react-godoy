import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const url = "https://6608248aa2a5dd477b140db6.mockapi.io/articles";

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setArticulos(data))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
  //   <>
  //     {loading ? (
  //       <div>Loading</div>
  //     ) : (
  //       <div>
  //         {articulos.map((articulo) => (
  //           <>
  //             <h2>{articulo.name}</h2>
  //             <h4>ID: {articulo.id}</h4>
  //           </>
  //         ))}
  //       </div>
  //     )}
  //   </>
  // );
  <>
    <NavBar />
    <ItemListContainer greeting="Proximamente, los productos aquí..." />
  </>
);}

export default App;
