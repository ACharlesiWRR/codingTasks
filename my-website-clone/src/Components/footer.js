import React from "react";
import assets from "./assets.js";

function Footer() {
  return (
    <div style={{ margin: "40px", fontSize: "24px" }}>
      <a
        href="https://zopeful.com"
        style={{ textDecoration: "none", color: "black" }}
        onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
        onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
        >
        This webpage is based on the zopeful.com homepage
      </a>
    </div>
  );
}

export default Footer;
