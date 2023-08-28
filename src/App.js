// src/App.js
import React from 'react';
import Header from './components/Header'; 
import SobreNos from './components/SobreNos';
import Colab from './components/Colab';
import Vagas from './components/Vagas'
import Profission from './components/Profission';
import Saude from './components/Saude';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <SobreNos />
      <Colab />
      <Vagas />
      <Profission />
      <Saude />
      <Footer />

    </div>
  );
}

export default App;
