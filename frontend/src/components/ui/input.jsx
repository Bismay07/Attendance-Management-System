import React, { forwardRef } from 'react';

export const Input = forwardRef(({ onChange, value, className, ...props }, ref) => {
  return (
    <input
      ref={ref} // Attach the ref here
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
});

Input.displayName = 'Input'; // Optional: Helps with debugging