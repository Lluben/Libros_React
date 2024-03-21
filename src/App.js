import {BrowserRouter,Routes,Route} from "react-router-dom"
import Inicio from "./components/inicio"

function App() {
  return (
    <div className="contenedor">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
