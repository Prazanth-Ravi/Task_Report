import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

function Nav() {
  return (
    <div>
      <div className="nav">
        <nav className="nav-bar">
          <ul className="ul">
            <li>
              <Link className="a" to="/">
                Home
              </Link>
            </li>
            <br></br>
            <li>
              <Link className="a" to="/products">
                Products
              </Link>
            </li>
            <br></br>
            <li>
              <Link className="a" to="/cart">
                Cart
              </Link>
            </li>
            <br></br>
            <li>
              <Link className="a" to="/add_product">
                Add Product
              </Link>
            </li>
            <br></br>
          </ul>
        </nav>
      </div>
      <div className="navm">
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>🟰</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link className="a" to="/">
                Home
              </Link>
              <Link className="a" to="/products">
                Products
              </Link>
              <Link className="a" to="/cart">
                Cart
              </Link>
              <Link className="a" to="/add_product">
                Add Product
              </Link>
              </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Nav;
