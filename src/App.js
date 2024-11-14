import logo from './logo.svg';
import './App.css';
import { PruebaComponente } from './Componentes/PruebaComponente';
import Temporizador from './Componentes/Temporizador'
import ListaPokemon from './Componentes/ListaPokemon';
import ListaNombres from './Componentes/ListaNombres';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PruebaComponente></PruebaComponente>
        <Temporizador tiempoInicial={10}></Temporizador>
        <ListaPokemon></ListaPokemon>
        <ListaNombres></ListaNombres>
      </header>
    </div>
  );
}

export default App;
