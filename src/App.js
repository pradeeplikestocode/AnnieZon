import './App.css';
import Header from './components/header';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
            <Route index element={<HomePage />}/>
            <Route path="/product/:id" element={<ProductPage />}/>
            <Route path="*" element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
