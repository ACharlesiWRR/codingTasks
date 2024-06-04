import React from "react";
import assets from "./assets.js";

export default function Header() {
    return (
      <div>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 100px",
            margin: "30px",
            fontSize: "18px",
          }}
        >
          <a href="https://zopeful.com">
            <img
              src={assets.zopeful_logo}
              alt="Zopeful Climate Logo"
              style={{ height: "60px" }}
            ></img>
          </a>
          <div>
            <a
              href="#"
              style={{
                margin: "0 10px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Carbon Removal
            </a>
            <a
              href="#"
              style={{
                margin: "0 10px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Courses
            </a>
            <a
              href="#"
              style={{
                margin: "0 10px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Companies
            </a>
            <a
              href="#"
              style={{
                margin: "0 10px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Blog
            </a>
            <a
              href="#"
              style={{
                margin: "0 10px",
                textDecoration: "none",
                color: "black",
              }}
            >
              About
            </a>
            <a
              href="#"
              style={{
                margin: "0 10px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    );
}

// export default Header;