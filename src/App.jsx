import { FiSearch } from 'react-icons/fi'
import { useState } from 'react';
import api from './services/api';
import './styles/busca.css';

function App() {
  const [cepInitial, setInput] = useState('')
  const [cepFinded, setCep] = useState({});

  async function handleSearch(){
    if (cepInitial === null || cepInitial === ''){
      alert("Preencha o campo com algum CEP!");
    }
    
    try{
      const response = await api.get(`${cepInitial}/json`);
      setCep(response.data);
      setInput("");
    }

    catch{
      alert("Erro ao buscar CEP!");
      setInput("");
    }
  }

  /* Notas de observação: 
  cepInitial é o nome da variavel para o estado, 
  setInput utilizado para modificar o estado de cepInitial
  event do onChange pega o valor do input o entrega ao cepInitial 
  o valor passado (target.value)*/

  return (
    <div className="container">
      <h1 className="title">Busca CEP</h1>

      <div className="containerInput">
        <input type="text"
        placeholder="Digite seu cep..." 
        value={cepInitial}
        onChange={(event) => setInput(event.target.value)}/>
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      {Object.keys(cepInitial).length > 0 || (
        <main className="main">
          <h2>CEP: {cepFinded.cep} </h2>
          <span>{cepFinded.logradouro}</span>
          <span>Complemento: {cepFinded.complemento}</span>
          <span>Cidade: {cepFinded.bairro}</span>
          <span>{cepFinded.localidade} - {cepFinded.uf}</span>
        </main>
      )}
      
    </div>
  );
}

export default App;
