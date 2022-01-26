import React from 'react';
import cl from './Button.module.scss';

export const Button = ({ children, ...props }) => {
   return (
      <button className={cl.button} {...props}>
         {children}
      </button >
   );
};
