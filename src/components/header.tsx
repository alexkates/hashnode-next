import { HeaderNav } from "./header-nav";
import { ModeToggle } from "./mode-toggle";

function Header() {
  return (
    <header className="mb-4 flex items-center justify-between">
      <HeaderNav />
      <ModeToggle />
    </header>
  );
}

export default Header;
