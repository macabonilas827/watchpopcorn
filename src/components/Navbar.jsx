import Search from "./Search";
import Logo from "./Logo";
import Result from "./Result";

const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <Logo />
        <Search />
        <Result />
      </nav>
    </>
  );
};
export default Navbar;
