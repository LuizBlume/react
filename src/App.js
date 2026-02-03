import './App.css';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = 'Luiz';
  const newName = name.toUpperCase();
  function sum(a, b) {
    return a + b;
  }
  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-7UIYLcEK1mAwct1XgW8aSMnvm3ZEQBYgQ&s";
  return (
    <div className="App">
      <h1>Olá {newName}!</h1>
      <h2>Soma dos valores é {sum(1, 2)}</h2>
      <img src={url} alt='Minha imagem teste' />
      <Frase />
      <SayMyName name="Ganso" />
      <SayMyName name={name} />
      <Pessoa name={name} age="18" profession="Programador" photo={url} />
    </div>
  );
}

export default App;
