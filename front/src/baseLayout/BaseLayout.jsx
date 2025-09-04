import { Link } from "react-router-dom";
import "../styles/baseLayout.css";

const BaseLayout = ({ children }) => {
  return (
    <>
      <header class="header">
        <nav class="navbar" role="navigation" aria-label="Menú principal">
          <div class="navbar-sticky">
            <div class="navbar-side">
              <div class="hamburguer" aria-label="Menú de categorias">
                <p class="rotate90"></p>
                <p class="rotate45"></p>
                <p class="rotate90"></p>
              </div>

              <div class="">
                <div class="nav-all-pages-column"></div>

                <div class="nav-all-pages-column"></div>
              </div>
            </div>
          </div>

          <a class="nameBrand" href="/">
            Nexe Fundació
          </a>
          <div class="searcher-row">
            <input
              id="searchInput"
              class="search-input-bar"
              type="search"
              placeholder="Busca por palabra..."
              aria-label="Buscar productos"
            />
            <button
              id="searchBtn"
              class="search-btn"
              type="button"
              aria-label="Buscar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <button class="close-btn" aria-label="Cerrar menú">
              ✖
            </button>
          </div>

          <div class="nav-right">
            <div class="btn-all-pages">Catálogo</div>
            <a href="#footer">Información</a>
          </div>

          <div class="nav-all-pages">
            <div class="nav-all-pages-column"></div>

            <div class="nav-all-pages-column">
              <Link to={"/Login"}>Login</Link>
            </div>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer class="footer" id="footer">
        <div class="nameBrandFooter">
          {" "}
          <a href="/">Nexe Fundació</a>
        </div>
        <div class="row-info">
          <a
            href="https://nexefundacio.org/avis-legal/"
            rel="noopener noreferrer"
          >
            Aviso Legal
          </a>
          <a
            href="https://nexefundacio.org/politica-de-cookies/"
            rel="noopener noreferrer"
          >
            Politica de Cookies
          </a>
          <a
            href="https://nexefundacio.org/politica-privacitat/"
            rel="noopener noreferrer"
          >
            Politica de Privacidad
          </a>
        </div>

        <div class="policy-divulgation">
          <p>
            © 2022 Tots els drets reservats - Dissenyat per Acrònim Digital
            Feeling
          </p>
        </div>
      </footer>

      <div class="cookies-overlay" id="cookies-overlay">
        <div
          id="cookies-banner"
          class="cookies-banner"
          role="dialog"
          aria-modal="true"
          aria-labelledby="nav-cookies"
        >
          <div class="cookies-content">
            <p class="text-title">Usamos Cookies</p>
            <p id="nav-cookies">
              Usamos cookies propias y de terceros para el funcionamiento del
              sitio, análisis estadístico. Más información en nuestra{" "}
              <a
                href="https://nexefundacio.org/politica-de-cookies"
                rel="noopener noreferrer"
              >
                Política de Cookies
              </a>
            </p>

            <div class="cookies-buttons">
              <button id="accept-cookies" class="btn-accept">
                Aceptar
              </button>
              <button id="decline-cookies" class="btn-decline">
                Rechazar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
