import { Link } from "react-router-dom";
import BaseLayout from "../baseLayout/BaseLayout";

const Home = () => {
  return (
    <BaseLayout>
      <div>
        <div className="h-dvh flex flex-col items-center justify-center bg-gradient-to-br from-[#CD5C1D] via-[#a84310] to-[#5c1d0a] p-6 gap-10">
          <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="text-6xl font-bold text-white">
              Tablero de pictogramas interactivo
            </h1>
            <h2 className="text-3xl font-bold text-white">
              "Empieza a hablar con imágenes."
            </h2>
          </div>

          <Link
            to="/Tablero"
            className="text-xl bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white font-semibold px-6 py-3 rounded-full border-4 border-black
      hover:from-[#FF6347] hover:to-[#FF8C00] transition"
          >
            Usar el Tablero
          </Link>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
