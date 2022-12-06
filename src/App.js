import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WeatherContextProvider } from "./context/WeatherContext";
/* Pages */
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <BrowserRouter> 
          <Routes>
            <Route path="out/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </WeatherContextProvider>
       
    </div>
  );
}

export default App;
