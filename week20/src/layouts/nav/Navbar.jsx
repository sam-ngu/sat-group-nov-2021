import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import ShadeButton from "../../components/button/ShadeButton";

export default function Navbar() {
  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Project",
      link: "/project",
    },
    {
      title: "About",
      link: "/about",
    },
  ];

  const liStyle = {
    listStyle: "none",
  };

  const location = useLocation();
  const navigate = useNavigate();

  function isActive(link){
    return location.pathname === link;
  }

  function redirect(link){
    // navigate(link);
  }

  return (
    <nav>
      <ul className="flex items-center justify-center">
        <li style={liStyle}>LOGO</li>

        {navItems.map((item) => {
          return (
            <li key={item.link} style={liStyle}>
              <ShadeButton onClick={redirect(item.link)} isActive={isActive(item.link)}>

                <NavLink  className="font-base" to={item.link}>
                  {item.title}
                </NavLink>
              </ShadeButton>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
