import { useState } from "react";

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-item">
      <button className="icon-button" onMouseEnter={() => setOpen(!open)}>
        {props.icon}
      </button>
      {open && props.children}
    </div>
  );
}

export default NavItem;
