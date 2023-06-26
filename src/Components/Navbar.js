import { Terah, Logo, arrow } from "../assets";
import { navLinks } from "../constants/data";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-4">
      <div className="flex h-4">
        <img src={Logo} alt="Logo" />
        <img src={Terah} alt="Terah" />
      </div>
      <ul className="flex">
        {navLinks.map((nav) => (
          <li key={nav.id} className="mr-4">
            <a href={nav.id}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex">
        <div className="flex items-center mr-4">
          <a href="" className="underline flex">
            Create a free account
            <img src={arrow} alt="" className="w-6" />
          </a>
        </div>
        <Contact />
      </div>
    </nav>
  );
};

export default Navbar;
