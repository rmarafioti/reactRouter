import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">HOME </NavLink>
      <NavLink to="/blue">BLUE </NavLink>
      <NavLink to="/red">RED </NavLink>
    </nav>
  );
}
