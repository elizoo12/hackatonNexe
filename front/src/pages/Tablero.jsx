import { useEffect, useState } from "react";
import "../styles/tablero.css"
import { getButton } from "../services/button";

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
};

export default Tablero;