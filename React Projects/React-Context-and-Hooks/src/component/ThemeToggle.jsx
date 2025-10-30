import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeToggle = () => {
    const {toggle} = useContext(ThemeContext)
  return <button onClick={toggle}>Toggle the theme</button>;
};

export default ThemeToggle;



// import React, { Component } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';

// class ThemeToggle extends Component {
//   static contextType = ThemeContext;
//   render() { 
//     const { toggleTheme } = this.context;
//     return ( <button onClick={toggleTheme}>Toggle the theme</button>);
//   }
// }
 
// export default ThemeToggle;
