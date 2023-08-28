import React from "react";
import Julia from '../assets/Avatar.png'

function Saude() {
  return (
    <div className="bg-red-50 container mx-auto py-16 rounded-2xl mb-24">
      <main>
        <p class="text-center text-red-900 font-semibold text-sm">
          Veja o que nossos colaboradores falam sobre nós
        </p>
        <h1 class="text-center mt-4 text-gray-900 font-medium text-4xl">
          OptimusTech se importa com a saúde dos seus colaboradores e sempre
          procura nos dar todo tipo de auxílio possível.
        </h1>
        <div className="mt-8">
          <img className="mx-auto" src={Julia} alt=""/>
          <p className="text-center mt-4 text-gray-900 font-medium text-base">Júlia Castro</p>
          <span className="text-center mt-1 text-gray-500 block">Desenvolvedora Web</span>
        </div>
      </main>
    </div>
  );
}

export default Saude;
