'use client'; // Indica que este componente es un componente del cliente

import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-cyan-300">
            GoTask
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="hover:bg-cyan-500 px-3 py-2 rounded transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/do-task"
              className="hover:bg-cyan-500 px-3 py-2 rounded transition duration-300"
            >
              Agregar Tarea
            </Link>
          </li>
          <li>
            <Link
              href="/lista-de-tareas"
              className="hover:bg-cyan-500 px-3 py-2 rounded transition duration-300"
            >
              Lista de Tareas
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
