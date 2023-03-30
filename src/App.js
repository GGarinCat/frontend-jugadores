
import React from 'react'
import Cards from './components/Cards';
import Formulario from './components/Formulario';
import Menu from './components/Menu';

//crearemos una fn para consumir nuestra API local

//usaremos useEffect

//
const App = () => {
  return (
    <>
    <Menu />
    <Cards />
    <Formulario/>
    </>
  );
};

export default App