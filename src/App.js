import './App.css';
import OutraLista from './components/OutraLista';
function App() {
  const meusItens = ['React', 'Vue', 'Angular', 'PHP'];
  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  );
}

export default App;
