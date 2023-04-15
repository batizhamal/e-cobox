import { Button } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/logo.png";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav id="navbar">
      <a href="/">
        <img className="logo" src={img} alt="logo" />
      </a>
      <ul>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/tasks">
          Tasks
        </Link>
        <Link className="link" to="/">
          Contacts
        </Link>
      </ul>

      {location.pathname !== "/login" && location.pathname !== "/register" ? (
        <Button
          type="primary"
          className="btn"
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </Button>
      ) : null}
    </nav>
  );
};

export default NavBar;
