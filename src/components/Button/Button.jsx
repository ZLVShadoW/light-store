import React from 'react';
import cn from './Button.module.scss';

export const Button = ({ children, className, ...props }) => {
   const cl = className ? `${cn.button} ${cn.fs}` : cn.button
   return (
      <button className={cl} {...props}>
         {children}
      </button >
   );
};
