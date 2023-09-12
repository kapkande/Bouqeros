import { Link } from "react-router-dom";
import { useState } from 'react';



export default function Nav() {
    const [activeLink, setActiveLink] = useState("home");
  
    const handleClick = (link: any) => {
      setActiveLink(link);
    };
  
    return (
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={activeLink === "home" ? `nav-active` : ""}
              onClick={() => handleClick("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/flowers"
              className={ activeLink === "flowers" ? "nav-active" : ""}
              onClick={() => handleClick("flowers")}
            >
              Flowers
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  