
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className='appDiv'>
        <NavBar />
        <Home />
        <Portfolio />
        <Footer />
    </div>
  );
}

export default App;
