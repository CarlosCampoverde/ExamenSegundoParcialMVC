'use client'; // Indica que este componente es un componente del cliente

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:flex-row">
        <p className="text-center sm:text-left mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Tu Aplicación de Gestión de Tareas. Todos los derechos reservados.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white transition duration-300"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 2a6 6 0 00-6 6v3H9v4h3v11h4v-11h3.5l.5-4H16V8a2 2 0 012-2h2V2h-2z"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white transition duration-300"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M23 3a10.9 10.9 0 01-3.14 1.48A4.48 4.48 0 0022.5 3a9 9 0 01-2.86 1.1A4.5 4.5 0 0016.7 3c-2.51 0-4.54 2.04-4.54 4.55 0 .36.04.71.1 1.05A12.9 12.9 0 013 4.3a4.55 4.55 0 001.4 6.08A4.46 4.46 0 012 9v.05c0 2.22 1.58 4.06 3.68 4.48A4.51 4.51 0 014 15c-.56 0-1.1-.05-1.62-.16a4.56 4.56 0 004.26 3.15A9.06 9.06 0 0023 8.2a9.09 9.09 0 01-2.6.72A4.58 4.58 0 0023 3z"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white transition duration-300"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4h16v16H4V4zm9 4H8v8h5V8zm3-3h-2v1.5H9V5h5V6.5h2V5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
