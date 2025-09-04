import { Link } from "react-router-dom";
import BaseLayout from "../baseLayout/BaseLayout";

const Home = () => {
  return (
    <BaseLayout>
      <div>
        <div class="bg-gradient-to-t from-sky-400 to-blue-800 p-6 text-white h-dvh flex flex-col justify-center gap-24 ">
          <div class="flex flex-col justify-center items-center gap-10">
            <h1 class="text-6xl font-bold text-white">
              Tablero de pictogramas interactivo
            </h1>
            <h2 class="text-3xl font-bold text-white">
              "Empieza a hablar con imágenes."
            </h2>
          </div>
          <div class="flex justify-center">
            <Link
              to="/Tablero"
              className="text-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-4 py-2 rounded-full border-4 border-blue-700
            hover:from-purple-500 hover:to-pink-400 transition"
            >
              Usar el Tablero
            </Link>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
