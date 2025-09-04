import { useState } from "react";
import BaseLayout from "../baseLayout/BaseLayout";
import descargaImg from "../img/descarga.png";

const Medico = () => {


  const [kids,setKids]=useState();



  return (
    <BaseLayout>
      <div className="h-dvh flex flex-col items-center bg-gradient-to-br from-[#CD5C1D] via-[#a84310] to-[#5c1d0a] p-6 gap-8">
        <div className="w-full max-w-7xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Listado de Usuarios
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between bg-gray-100 rounded-xl p-4 shadow hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <img
                  src={descargaImg}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  Nombre del Usuario
                </h2>
              </div>
              <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white px-4 py-2 rounded-full font-semibold border-2 border-[#a84310] hover:from-[#FF6347] hover:to-[#FF8C00] transition">
                Ir al Perfil
              </button>
            </div>

            <div className="flex items-center justify-between bg-gray-100 rounded-xl p-4 shadow hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <img
                  src={descargaImg}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  Nombre del Usuario
                </h2>
              </div>
              <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white px-4 py-2 rounded-full font-semibold border-2 border-[#a84310] hover:from-[#FF6347] hover:to-[#FF8C00] transition">
                Ir al Perfil
              </button>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Medico;
