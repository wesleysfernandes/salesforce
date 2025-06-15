import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Salesforce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <Link to="/" className="link-style">
                <li className="nav-item">
                  <a className="nav-link">Início</a>
                </li>
              </Link>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Leads
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item">
                      <Link to="/newlead" className="link-style">
                        Cadastrar
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item">Consultar</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Vendas
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item">Nova</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Consultar</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
