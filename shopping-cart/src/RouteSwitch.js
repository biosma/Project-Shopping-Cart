import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
/* import Checkout from "./Checkout" */

const RouteSwitch = () => {
    return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouteSwitch;