import React from 'react';

export function Card({ children, className, ...props }) {
  return (
    <div className={`bg-gray-800 shadow-lg rounded-lg ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={`px-4 py-5 sm:p-6 text-white ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }) {
  return (
    <div className={`px-4 py-4 sm:px-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={`px-4 py-5 sm:px-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }) {
  return (
    <h3 className={`text-lg font-medium leading-6 text-white ${className}`} {...props}>
      {children}
    </h3>
  );
}

