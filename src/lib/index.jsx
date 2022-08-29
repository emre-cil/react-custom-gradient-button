import React from 'react';
import './style.css';
const GradientButton = ({
  children,
  className,
  color = 'white',
  start = '#aa076b',
  middle = '#61045f',
  end = '#aa076b',
  borderRadius = '0.5rem',
  width = '',
  height = '',
  style = {},
  ...props
}) => {
  return (
    <button
      style={{
        color: color,
        backgroundImage: `linear-gradient(to right, ${start} 0%, ${middle} 51%, ${end} 100%)`,
        borderRadius: borderRadius,
        width: width,
        height: height,
        ...style,
      }}
      tabIndex={0}
      className={`cstm-button-grd ${className ? className : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;
