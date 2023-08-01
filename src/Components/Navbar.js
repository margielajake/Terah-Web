import { Terah, Logo, arrow } from "../assets";
import { navLinks } from "../constants/data";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <nav className="flex">
      <div className="flex logo-container">
      <img src={Logo} alt="Logo" className="logo"/>
      <img src={Terah} alt="Terah" className="terah" />
      </div>
      <ul>
        {navLinks.map((nav, index) => {
<li key={nav.id}>
  <a href={`#${nav.id}`}>{nav.title}</a>
</li>
        })}
      </ul>
      <Contact/>
    </nav>
  );
};

export default Navbar;
