import DropdownMenu from "./DropdownMenu";
import NavItem from "./NavItem";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <NavItem icon="Nav 1">
        <DropdownMenu />
      </NavItem>
      <NavItem icon="Nav 2">
        <DropdownMenu />
      </NavItem>
      <NavItem icon="Nav 3">
        <DropdownMenu />
      </NavItem>
      <NavItem icon="Nav 4">
        <DropdownMenu />
      </NavItem>
    </div>
  );
}
