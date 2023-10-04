import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from './netflix_logo.png'


function Nav() {
  // we use usestate to work on event handlers

  const [show, handleShow] = useState(false); //initially false

// scroll is the event type in the removeEventListner method, and as a dependency we add handleShow to make sure it's the right version of handleShow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, [handleShow]);

    // useEffect(() => {
    //   window.addEventListener("scroll", () => {
    //     if (window.scrollY > 100) {
    //       handleShow(true);
    //     } else {handleShow(false)};
    //   });
    //   return () => {
    //     window.removeEventListener("scroll");
    //   };
    // }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src={logo}
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Nav;

// [url=https://logowik.com/netflix-vector-logo-3135.html][img]https://logowik.com/content/uploads/images/750_netflix.jpg[/img][/url]