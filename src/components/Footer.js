import React from "react";

function Footer() {
  return (
    <div className="bg-gray-50 mx-auto py-1">
      <main>
        <h1 class="text-center mt-4 text-gray-900 font-medium text-4xl">
          Acompanhe as nossas oportunidades
        </h1>
        <div className="mt-8 text-center">
          <p className="mt-4 text-gray-600 font-normal text-xl">
            Seja o primeiro a saber quando novas vagas serão abertas!
          </p>
          <div className="mt-10">
            <input
              type="email"
              placeholder="Seu email"
              className="p-3 border border-gray-300  px-4 rounded-xl w-80"
            />
            <span className="ml-4 text-white bg-red-900 p-3 rounded-lg font-medium text-base">
              Cadastrar
            </span>
            <p className="mb-24 mt-8 text-gray-500 font-normal text-base">
            © 2022 OptimusTech. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Footer;
