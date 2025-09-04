import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div class="bg-gradient-to-t from-sky-400 to-blue-800 p-6 text-white h-dvh flex flex-col justify-center gap-25 ">
        <div class="flex flex-col justify-center items-center gap-1">
          <h1 class=" font-bold text-white text-8xl p-2.5">Fundació Nexe</h1>
          <h2 class="text-4xl font-bold text-white">
            Tablero de pictogramas interactivo
          </h2>
        </div>
        <div class="flex justify-center">
          <Link
            to="/tablero"
            className="relative group inline-block text-xl font-bold px-8 py-3 rounded-full border-4 border-blue-700 overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            {/* Capa de gradiente con transición */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ease-in-out group-hover:from-pink-400 group-hover:to-purple-500"></span>

            {/* Capa semi-transparente para mejorar contraste del texto */}
            <span className="absolute inset-0 bg-white/10 group-hover:bg-black/10 transition-all duration-500 ease-in-out"></span>

            {/* Texto encima */}
            <span className=" text-white drop-shadow-md transition-colors duration-500 ease-in-out group-hover:text-white">
              Probar el Tablero
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
