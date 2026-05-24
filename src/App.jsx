import { BrowserRouter } from "react-router-dom";
import PageContainer from "./container/pageContainer";
import Navbar from "./components/navbar/navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/home";
import ProductDetail from "./pages/productDetail";
import Cart from "./pages/cart";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <BrowserRouter>
        <PageContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </PageContainer>
      </BrowserRouter>
    </div>
  );
};

export default App;
