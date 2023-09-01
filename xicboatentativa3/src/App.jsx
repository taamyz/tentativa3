
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar/navbar";
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Detail } from './pages/detail/detail'
import { ShopContextProvider } from '../src/context/shop-context';


function App() {

  return (
    <>
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path= "/cart"element={<Cart />}></Route>
            <Route path= "/detail" element={<Detail />}></Route>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
    </>
  )
}

export default App
