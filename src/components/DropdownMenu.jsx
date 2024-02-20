import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");

  function DropdownItem(props) {
    return (
      <div
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.children}
      </div>
    );
  }
  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "main"}
        classNames="menu-primary"
        unmountOnExit
        timeout={500}
      >
        <div className="menu">
          <DropdownItem goToMenu="settings">Subnav1 1</DropdownItem>
          <DropdownItem goToMenu="settings">Subnav1 2</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        classNames="menu-secondary"
        unmountOnExit
        timeout={500}
      >
        <div className="menu">
          <DropdownItem goToMenu="main">Subsubnav1 1</DropdownItem>
          <DropdownItem goToMenu="main">Subsubnav1 2</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
