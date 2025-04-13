import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import CountryDetails from './components/CountryDetails';
import CountryList from './components/CountryList';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/country/:countryName" element={<CountryDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
