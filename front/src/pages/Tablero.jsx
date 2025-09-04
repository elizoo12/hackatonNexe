import { useEffect, useState } from "react";
import "../styles/tablero.css"
import { getButton } from "../services/button";
import "../styles/tablero.css";
import BaseLayout from "../baseLayout/BaseLayout";

const Tablero = () => {

    const [listButton, setListButton] = useState([]);


    useEffect(()=> {

        getButton().then((response) => {
            setListButton(response.data)
        })

    }, [])

    console.log(listButton);
    

    return (

        <>
            <header className="title">
                <h2></h2>

            </header>

            <div className="tablero" >

                {listButton.map((data) => (
                    <div className="box" key={data.id}>

                    <img src={"http://localhost:8080/" + data.rutaImagen} alt="" />
                    <p>{data.nombre}</p> 

                    </div>
                ))}


            </div>

        </>
    );
  return (
    <BaseLayout>
      <div class="h-dvh flex items-center justify-center bg-gradient-to-br from-[#CD5C1D] via-[#a84310] to-[#5c1d0a] p-6">
        <p>Tablero</p>
      </div>
    </BaseLayout>
  );
};

export default Tablero;
