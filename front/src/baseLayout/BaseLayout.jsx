import { Link } from "react-router-dom";
import  { activeNavAllPages, handleNavbarSide } from "../../public/js/layoutPage"
import "../styles/baseLayout.css"

const BaseLayout = ({children}) => {
    return (
        <>
            
<header className="header" >
<nav className="navbar" >

    <div className="navbar-sticky">
        <div className="navbar-side">

            <button className="hamburguer" aria-label="Menú de categorias" onClick={handleNavbarSide} >
                <p className="rotate90"></p>
                <p className="rotate45"></p>
                <p className="rotate90"></p>
            </button>

        <div >
            <div className="nav-all-pages-column">
                <Link to={"/Login"} >Login</Link>
            </div>
        </div>

        </div> 
    </div>


    <a className="nameBrand" href="/" >Nexe Fundació</a>

    <div className="nav-right">
        <button className="btn-all-pages" onClick={activeNavAllPages} >Catálogo</button>
        <a href="#footer" >Información</a>
    </div>

    <div className="nav-all-pages">
        <div className="nav-all-pages-column">
            <Link to={"/Login"} >Login</Link>
        </div>
            
    </div>
</nav>
</header>

<main>{children}</main>


<footer className="footer" id="footer">
    <div className="nameBrandFooter"> <a href="/">Nexe Fundació</a></div>
    <div className="row-info">
        <a href="https://nexefundacio.org/avis-legal/" rel="noopener noreferrer">Aviso Legal</a>
        <a href="https://nexefundacio.org/politica-de-cookies/" rel="noopener noreferrer">Politica de Cookies</a>
        <a href="https://nexefundacio.org/politica-privacitat/" rel="noopener noreferrer">Politica de Privacidad</a>
    </div>

    <div className="policy-divulgation">
        <p>© 2022 Tots els drets reservats - Dissenyat per Acrònim Digital Feeling</p>
    </div>
</footer>


<div className="cookies-overlay" id="cookies-overlay">
    <div id="cookies-banner" className="cookies-banner" role="dialog" aria-modal="true" aria-labelledby="nav-cookies">

        <div className="cookies-content">
            <p className="text-title">Usamos Cookies</p>
            <p id="nav-cookies">
                Usamos cookies propias y de terceros para el funcionamiento del sitio, análisis estadístico.
                Más información en nuestra <a href="https://nexefundacio.org/politica-de-cookies" rel="noopener noreferrer" >Política de Cookies</a>
            </p>

            <div className="cookies-buttons">
                <button id="accept-cookies" className="btn-accept">Aceptar</button>
                <button id="decline-cookies" className="btn-decline">Rechazar</button>
            </div>
        </div>
    </div>
</div>



    </>
    );
};

export default BaseLayout;