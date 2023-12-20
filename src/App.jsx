import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonDetail from "./pages/PokemonDetail";
import ProyectedRoutes from "./components/ProyectedRoutes";

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Home />}/>
        
         <Route element={<ProyectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />}/>
          <Route path="/pokedex/:id" element={<PokemonDetail />}/>

        </Route>
      </Routes>
    </>
  );
}

export default App;
