import React from 'react';

export function Label({ children, ...props }) {
  return (
    <label className="block text-sm font-medium text-gray-500" {...props}>
      {children}
    </label>
  );
}

