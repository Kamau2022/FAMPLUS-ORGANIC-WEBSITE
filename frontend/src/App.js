
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import shop from './pages/shop';
import ShopCategory from './pages/ShopCategory';

function App() {
  return (
    <div>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<shop/>}/>
      <Route path='/shop' element={<ShopCategory category="shop"/>}/>
      <Route path='/fruits' element={<ShopCategory category="fruit"/>}/>
      <Route path='/veges' element={<ShopCategory category="veges"/>}/>
      <Route path='/product' element={<product/>}/>
      <Route path=':productId' element={<product/>}/>    
      <Route path='/cart' element={<cart/>}/>
      <Route path='/login' element={<loginsignup/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
