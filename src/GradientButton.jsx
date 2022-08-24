import React from 'react';
import classes from './GradientButton.module.css';
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
      }}
      className={`${classes.gradientButton} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;
