import './App.css';
import Testimonio from './componentes/Testimonio';
import INFORMACION from './base-de-datos/datos'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {INFORMACION.map((datosPersona, indice)=>
          <Testimonio key={indice} props={datosPersona} />
        )}
      </div>
    </div>
  );
}

export default App;
