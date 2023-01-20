// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landing/landing";
import { AppContext } from "./context/appContext";
import { useState } from 'react';



function App() {

  const [isService, setIsService] = useState(false)
  const [isPricing, setIsPricing] = useState(false)
  const [sidebar, setSidebar] = useState(false)


  return (
    <div className="App">
      <AppContext.Provider value={[isService, setIsService, isPricing, setIsPricing,sidebar, setSidebar]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        </AppContext.Provider>

    </div>
  );
}

export default App;
