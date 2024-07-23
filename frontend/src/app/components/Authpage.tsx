/* import React from 'react';
import Login from '../components/Login';  // Ajusta la ruta según la estructura de tus carpetas
import Register from '../components/Register';  // Ajusta la ruta según la estructura de tus carpetas

const AuthPage: React.FC = () => {
  const [showLogin, setShowLogin] = React.useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {showLogin ? 'Iniciar Sesión' : 'Registrar Nueva Cuenta'}
        </h1>
        {showLogin ? <Login /> : <Register />}
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowLogin(!showLogin)}
            className="text-blue-500 hover:underline"
          >
            {showLogin ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia sesión'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
 */