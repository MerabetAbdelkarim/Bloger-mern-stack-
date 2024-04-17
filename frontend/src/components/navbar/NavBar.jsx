import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="header-height-fix"></div>
      <header className="header-nav">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg navbar-light p-0">
                <a className="navbar-brand font-weight-bold mb-0" href="index-2.html" title="Qurno">
                  <img className="img-fluid" width="110" height="35" src="src/assets/assets/images/logo.png" alt="Qurno" />
                </a>
                <button className="search-toggle d-inline-block d-lg-none ms-auto me-1 me-sm-3" data-toggle="search" aria-label="Search Toggle">
                  <span>Search</span>
                  <svg width="22" height="22" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 15.5L19 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navHeader" aria-controls="navHeader" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="ti ti-menu-2 d-inline"></i>
                  <i className="ti ti-x d-none"></i>
                </button>
                <div className="collapse navbar-collapse" id="navHeader">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item ">
                      <NavLink exact className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}  to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}  to="/privacy">Privacy</NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink className="nav-link "  to="/author/1">My account</NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default NavBar;
