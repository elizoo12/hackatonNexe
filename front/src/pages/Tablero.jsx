import { useEffect, useRef, useState } from "react";
import "../styles/tablero.css"
import { getButton } from "../services/button";
import "../styles/tablero.css";
import BaseLayout from "../baseLayout/BaseLayout";

const Tablero = () => {

    const [listButton, setListButton] = useState([]);
    const audioRef=useRef();


    useEffect(()=> {

        getButton().then((response) => {
            setListButton(response.data)
        })

    }, [])

    console.log(listButton);
    

    return (

        <>
        <div className="h-full flex items-center justify-center bg-gradient-to-br from-[#CD5C1D] via-[#a84310] to-[#5c1d0a] p-6">
            <header className="title">
                <h2></h2>

            </header>

            <div className="tablero" style={{background:'white'}} >
                      
                {listButton.map((data) => (
                    <div style={{margin:'10px', border:'2px solid black', cursor:'pointer'}}className="box" key={data.id} onClick={(e) => {e.currentTarget.querySelector("audio").play(); }}>

                    <img src={"http://localhost:8083/" + data.rutaImagen} alt="" style={{width:'200px', height:'200px', margin:'auto'}} />
                    <p style={{textAlign:'center', fontWeight:'bold', textTransform:'uppercase'}}>{data.nombre}</p> 
                    <audio src={"http://localhost:8083/" + data.rutaSonido}></audio>
                    </div>
                ))}


            </div>
</div>
        </>
    );
  
};

export default Tablero;
