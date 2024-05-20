import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebPage from './components/WebPage'
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
        <Route path='/' element={<WebPage />} />
      </Routes>
    </Router>
  );
}

export default App;
