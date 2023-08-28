// src/components/Header.js
import React from 'react';
import Logo from '../assets/logo.svg'

function Header() {
  return (
    <header class="p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <img className='mr-4' src={Logo} alt="Logo"/>
        <h1 class=" text-gray-600 text-lg font-medium">Optimus Tech</h1>
      </div>
      <nav class="space-x-8">
        <a href="0" class="text-gray-500">Home</a>
        <a href="0" class="text-gray-500">Produtos</a>
        <a href="0" class="text-gray-500">Recursos</a>
        <a href="0" class="text-gray-500">Sobre nós</a>
      </nav>

      <nav class="space-x-4">
        <a href="0" class="text-gray-500">Entrar</a>
        <a href="0" class="text-white bg-red-900 p-2 rounded-lg">Cadastrar</a>
      </nav>
    </div>
  </header>
  );
}

export default Header;
