import AgregarEmpleado from "./empleados/AgregarEmpleado";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Nav from "./plantilla/Nav";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<ListadoEmpleados/>}/>
        <Route exact path='/agregar' element={<AgregarEmpleado/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
