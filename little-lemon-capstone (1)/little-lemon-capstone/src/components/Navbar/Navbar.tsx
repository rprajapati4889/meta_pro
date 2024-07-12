import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Asset 16@4x.png";
import { TiThMenu } from "react-icons/ti";
import { RiCloseCircleLine } from "react-icons/ri";
import { useState } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const onClickHandler = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav className="app_nav">
      <div className="app_nav_logo">
        <img src={logo} alt="logo" width={200} />
      </div>
      <ul className="app_nav_links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link
          className="link"
          to="/#Menu"
          onClick={() => onClickHandler("Menu")}
        >
          Menu
        </Link>
        <Link
          className="link"
          to="/#Reviews"
          onClick={() => onClickHandler("Reviews")}
        >
          Reviews
        </Link>
        <Link className="link" to="/Reservations">
          Reservations
        </Link>
        <Link
          className="link"
          to="/#About"
          onClick={() => onClickHandler("About")}
        >
          About
        </Link>
      </ul>

      <div className="mobile_nav">
        <TiThMenu
          onClick={() => {
            setToggle(!toggle);
          }}
          className="mobile_menu_icon"
        />
        {toggle && (
          <div>
            <RiCloseCircleLine
              onClick={() => {
                setToggle(!toggle);
              }}
              className="mobile_navbar_cancel"
            />
            <Link
              className="link"
              to="/"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Home
            </Link>
            <Link
              className="link"
              to="/#Menu"
              onClick={() => {
                onClickHandler("Menu");
                setToggle(!toggle);
              }}
            >
              Menu
            </Link>
            <Link
              className="link"
              to="/#Reviews"
              onClick={() => {
                onClickHandler("Reviews");
                setToggle(!toggle);
              }}
            >
              Reviews
            </Link>
            <Link
              className="link"
              to="/Reservations"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Reservations
            </Link>
            <Link
              className="link"
              to="/#About"
              onClick={() => {
                onClickHandler("About");
                setToggle(!toggle);
              }}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
