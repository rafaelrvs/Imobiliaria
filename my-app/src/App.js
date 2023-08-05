import ConteudoCentral from './componentes/ConteudoCentral';
import MenuTopo from './componentes/MenuTopo';

function App() {
  return (
    <div className="App">
      <header><MenuTopo/></header>
      <main><ConteudoCentral/></main>
    </div>
  );
}

export default App;
