
import Navbar from "@/components/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const NavbarWrapper = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default NavbarWrapper;
