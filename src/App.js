import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <Routes>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/cart' exact>
            <Cart/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
