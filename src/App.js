import './App.css';
//COMPONENTES
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
