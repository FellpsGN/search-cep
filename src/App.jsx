import { FiSearch } from 'react-icons/fi'
import './styles/busca.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text"
        placeholder="Digite seu cep..." />
        <button className="buttonSearch">
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
