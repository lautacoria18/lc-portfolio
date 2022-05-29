
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className='appDiv'>
        <NavBar />
        <Home />
        <Portfolio />
    </div>
  );
}

export default App;
