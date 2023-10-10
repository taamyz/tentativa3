import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from "./components/navbar/navbar";
import { ShopContextProvider } from '../src/context/shop-context';
import AppRoutes from './Routes';

function App() {
  return (
    <ShopContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <AppRoutes />
        </Router>
      </div>
    </ShopContextProvider>
  );
}

export default App;