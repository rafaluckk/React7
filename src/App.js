// src/App.js
import React from 'react';
import Header from './components/Header'; // Use um caminho relativo
import SobreNos from './components/SobreNos';
import Colab from './components/Colab';

function App() {
  return (
    <div>
      <Header />
      <SobreNos />
      <Colab />
    </div>
  );
}

export default App;
