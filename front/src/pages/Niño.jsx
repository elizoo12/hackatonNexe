import BaseLayout from "../baseLayout/BaseLayout";
import { Link } from "react-router-dom";
import perfilImg from "../img/descarga.png"; // ejemplo de imagen del niño

const Niño = () => {
  return (
    <BaseLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#CD5C1D] via-[#a84310] to-[#5c1d0a] py-12 px-6">
        {/* Contenedor de perfil */}
        <div className="flex flex-col bg-white/90 backdrop-blur-md text-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md gap-6">
          {/* Foto y nombre */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={perfilImg}
              alt="Niño"
              className="w-32 h-32 rounded-full object-cover shadow-md"
            />
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              Juan Pérez
            </h1>
          </div>

          {/* Información personal */}
          <div className="flex flex-col gap-4">
            <div className="bg-gray-100 p-4 rounded-xl shadow-inner">
              <p>
                <span className="font-semibold">Fecha de Nacimiento: </span>{" "}
                12/03/2015
              </p>
              <p>
                <span className="font-semibold">Género: </span> Masculino
              </p>
              <p>
                <span className="font-semibold">Dirección: </span> Calle Falsa
                123, Ciudad
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl shadow-inner">
              <p>
                <span className="font-semibold">Nombre del Responsable: </span>{" "}
                María Pérez
              </p>
              <p>
                <span className="font-semibold">
                  Contacto del Responsable:{" "}
                </span>{" "}
                555-123-4567
              </p>
              <p>
                <span className="font-semibold">Nombre del Especialista: </span>{" "}
                Dr. Luis Gómez
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl shadow-inner">
              <p>
                <span className="font-semibold">Alergias: </span> Ninguna
              </p>
              <p>
                <span className="font-semibold">Intereses: </span> Arte, música
                y deportes
              </p>
              <p>
                <span className="font-semibold">Notas Adicionales: </span>{" "}
                Asiste regularmente a actividades grupales.
              </p>
            </div>
          </div>

          {/* Botón de regreso */}
          <div className="w-full flex justify-center mt-4">
            <Link
              to="/medico"
              className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white font-bold px-6 py-2 rounded-full border-2 border-[#a84310] shadow-md hover:from-[#FF6347] hover:to-[#FF8C00] transition-transform hover:scale-105"
            >
              Volver al Listado
            </Link>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Niño;
