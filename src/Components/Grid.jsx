// Grid.jsx
import React from 'react';

const Grid = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {children}
      </div>
    </div>
  );
};

export default Grid;
