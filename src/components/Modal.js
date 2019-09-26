import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";





export const ToggleContent = ({ toggle, content }) => {
  const [isShown, setIsShown] = React.useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
}



export default function Modal({children}) {

  const Overlay = {
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    background: 'rgba(0, 0, 0, 0.3)'
  }

  const Dialog = {
    background: 'white',
    borderRadius: '5px',
    padding: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
  }

  
    return(
      <div style={Overlay}>
        <div style={Dialog}>
            {children}
        </div>
      </div>
    )
  
}
