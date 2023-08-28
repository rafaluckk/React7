import React from 'react';
import Image from '../assets/Image.png'

function Vagas() {
  return (
    <section class="container mx-auto text-center">
    <p class="mt-24 text-sm text-red-900 font-medium bg-red-50 inline-block p-1 rounded-lg">vagas abetas!</p>
    <h1 class="mt-4 text-gray-900 font-semibold text-4xl">Estamos procurando por talentos</h1>
    <p class="mt-4 text-gray-500 font-normal text-xl">Somos uma equipe 100% remota com pessoas do Brasil inteiro.</p>
    <div class="mt-16">
      <img class="mx-auto rounded-2xl mb-16" src={Image} alt="imagen"/>
    </div>
  </section>

  );
}

export default Vagas;