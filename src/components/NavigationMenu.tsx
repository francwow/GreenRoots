import { HeaderProps } from "../types/Types";
import { navItems } from "./navItems";
import { Link } from "react-router-dom";

const NavigationMenu = (props: HeaderProps) => {
  return (
    <nav className="main-nav container-flex-row">
      <ul className="nav-container container-flex-row">
        {navItems.map((item) => {
          return (
            <li key={item.name} className="nav-list-item">
              <Link
                onMouseEnter={() => {
                  props.setHoverLink(true);
                }}
                onMouseLeave={() => {
                  props.setHoverLink(false);
                }}
                to={item.href}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationMenu;