import React from 'react';
import "../Css/Button.css";


interface ButtonProps {
  name: string;
  icon:  string;
  onClick?: () => void;
  link?: string;
}

function Button(props: ButtonProps) {
  return (
    <>
      <a href={props.link} target="_blank">
        <button className='button-container' onClick={props.onClick}>
          <i className={props.icon} />
          {props.name}
        </button>
      </a>
    </>
  )
}

export default Button