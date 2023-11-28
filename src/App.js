import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './components/style.css';
import Header from './components/Header';
import Cart from './components/Cart'
import Home from './components/Home'
 
import PrdouctDetail from './components/Product_Details'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/cart' exact element={<Cart />}></Route>
          <Route path='/:id' exact element={<PrdouctDetail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
