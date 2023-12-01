import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Error from './components/NotFound/Error';
import Cvmaker from './components/Cvmaker/Cvmaker';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/cvmaker" element={<Cvmaker/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
