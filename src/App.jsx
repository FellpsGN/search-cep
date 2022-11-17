import { FiSearch } from 'react-icons/fi'
import { useState } from 'react';
import './styles/busca.css';

function App() {
const [cepInitial, setInput] = useState(null)

  function handleSearch(){
    alert("VALOR DO INPUT: " + cepInitial)
  }

  /* Notas de observação: 
  cepInitial é o nome da variavel para o estado, 
  setInput utilizado para modificar o estado de cepInitial
  event do onChange pega o valor do input o entrega ao cepInitial 
  o valor passado (target.value)*/

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text"
        placeholder="Digite seu cep..." 
        value={cepInitial}
        onChange={(event) => setInput(event.target.value)}/>
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 79003222</h2>
        <span>Rua Alguma Pena</span>
        <span>Complemento: Complemento informado</span>
        <span>Vila rosa</span>
        <span>Campo Grande - MS</span>
      </main>
    </div>
  );
}

export default App;
