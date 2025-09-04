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
            className="text-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-4 py-2 rounded-full border-4 border-blue-700
             hover:from-purple-500 hover:to-pink-400 transition"
          >
            Probar el Tablero
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
