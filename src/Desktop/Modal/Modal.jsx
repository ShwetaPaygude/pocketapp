import React ,{ useEffect,useState } from "react";
import "./desktopModalStyles.css";

const Modal =({isOpen,onClose,setGroupNames,setColor})=>{
    const [input,setInput]=useState("");
    const [selectedcolor,setSelectedColor]=useState("");
    const [clickedColors,setClickedColors]=useState({});
    const [colorError,setColorError]=useState("");


const handleColorSelection = (color) => {
    setColor(color);
    setSelectedColor(color);
    setColorError(" ");
  };
  const handleClick = (color) => {
    const updatedClickedColors = {};
    Object.keys(clickedColors).forEach((key) => {
      updatedClickedColors[key] = false;
    });
    updatedClickedColors[color] = true;
    setClickedColors(updatedClickedColors);
  };
}

