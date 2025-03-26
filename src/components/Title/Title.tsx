import React from 'react';

const Title = ({ children }: { children: string }) => {
  return (
    <p className="text-4xl font-bold text-secondary text-center mx-auto my-10">
      {children}
    </p>
  );
};

export default Title;
