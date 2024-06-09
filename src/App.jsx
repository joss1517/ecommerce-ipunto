import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Viniles Decorativos" />
    </div>
  );
}

export default App
