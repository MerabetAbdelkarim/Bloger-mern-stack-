/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../services/AuthContext";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const { user, isLoggedIn, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const authenticated = !!isLoggedIn;

  const userName = user ? `${user.name} ${user.lastname}` : "";

  const avatarLetter = userName.charAt(0).toUpperCase();

  const links = [
    { label: "Home", to: "/" },
    { label: "Blog", to: "/articles" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/privacy" },
  ];

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="app-navbar">
      <div className="nav-container">

        <div className="brand" onClick={() => { navigate("/"); closeMenu(); }}>
          <span className="brand-mark" />
          <span className="brand-text">Qurno</span>
        </div>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <div className={`nav-main ${menuOpen ? "open" : ""}`}>

          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-actions">

            {!authenticated && (
              <>
                <NavLink className="btn ghost" to="/login" onClick={closeMenu}>
                  Login
                </NavLink>
                <NavLink className="btn solid" to="/register" onClick={closeMenu}>
                  Register
                </NavLink>
              </>
            )}

            {authenticated && (
              <>
                <div className="user-chip" title={userName}>
                  {user?.image ? (
                    <img
                      src={`${import.meta.env.VITE_API_URL}/getimageauthor/avatar/${user.image}`}
                      alt="avatar"
                      className="avatar-image"
                    />
                  ) : (
                    <span className="avatar">{avatarLetter}</span>
                  )}
                  <span className="user-name">{userName}</span>
                </div>

                <NavLink
                  to={"/dashboard"}
                  className="btn ghost"
                  onClick={closeMenu}
                >
                  Dashboard
                </NavLink>

                <button type="button" className="btn solid" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}

          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
