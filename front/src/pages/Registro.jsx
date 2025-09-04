import { Link } from "react-router-dom";
import BaseLayout from "../baseLayout/BaseLayout";
import { useRef } from "react";
import { insertTutor } from "../services/tutor";

const Registro = () => {


  const nameRef= useRef();
  const gmailRef=useRef();
  const passwordRef=useRef();


  const Registrar=()=>{
    insertTutor({name:nameRef?.current.value,gmail:gmailRef.current.value,contraseña:passwordRef?.current.value});
  }


  return (
    <BaseLayout>
      <div className="h-dvh flex items-center justify-center bg-gradient-to-br from-[#CD5C1D] via-[#a84310] to-[#5c1d0a] p-6">
        <div className="flex flex-col bg-white/90 backdrop-blur-md text-gray-800 p-8 rounded-2xl shadow-2xl w-96 border border-blue-200">
          <h1 className="text-3xl font-bold text-center text-black mb-6">
            Crear Cuenta
          </h1>

          <form action="#" className="flex flex-col gap-4">
            <label className="font-semibold text-black">
              Nombre de Usuario
            </label>
            <input
            ref={nameRef}
              type="text"
              className="bg-blue-100 focus:bg-white focus:ring-2 focus:ring-orange-700 p-2 rounded-lg outline-none transition"
            />

            <label className="font-semibold text-black">
              Correo Electrónico
            </label>
            <input
            ref={gmailRef}
              type="email"
              className="bg-blue-100 focus:bg-white focus:ring-2 focus:ring-orange-700 p-2 rounded-lg outline-none transition"
            />

            <label className="font-semibold text-black">Contraseña</label>
            <input
            ref={passwordRef}
              type="password"
              className="bg-blue-100 focus:bg-white focus:ring-2 focus:ring-orange-700 p-2 rounded-lg outline-none transition"
            />

            <button
              type="button"
              className="mt-6 bg-gradient-to-r from-[#CD5C1D] to-yellow-500 text-white font-bold py-2 rounded-full border-3 border-black shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out cursor-pointer"

              onClick={()=>{Registrar()}}
            >
              Registrarse
            </button>
          </form>

          <div className="mt-4 w-full text-xl flex justify-center">
            <Link to="/login">
              ¿Ya tienes cuenta?<span> </span>
              <span className="font-bold underline">Inicia sesión</span>
            </Link>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Registro;
