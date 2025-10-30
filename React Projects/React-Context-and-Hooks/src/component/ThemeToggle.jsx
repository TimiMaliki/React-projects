import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeToggle = () => {
    const {toggle} = useContext(ThemeContext)
  return <button onClick={toggle}>Toggle the theme</button>;
};

export default ThemeToggle;



