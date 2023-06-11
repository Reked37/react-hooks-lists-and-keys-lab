import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map((elementLink)=>{
    return <a key= {elementLink} href={"#"+elementLink}>{elementLink}</a>
    })
  }</nav>;
}

export default NavBar;
