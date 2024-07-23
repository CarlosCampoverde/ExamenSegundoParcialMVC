'use client'; // Indica que este componente es un componente del cliente

import Link from 'next/link';
import React from 'react';

const Portada: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-500 text-white">
      <h1 className="text-5xl font-bold mb-4">GoTask</h1>
      <p className="text-xl mb-8">Un gestor de tareas eficiente y fácil de usar</p>
      <Link href="/inicio" className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition duration-300">
        Empezar
      </Link>
    </div>
  );
};

export default Portada;
