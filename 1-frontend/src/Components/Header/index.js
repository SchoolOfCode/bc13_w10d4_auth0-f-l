import React from "react";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";

const Header = () => {
  return (
    <header>
        <LoginButton />
        <LogoutButton />
    </header>
  );
};

export default Header;