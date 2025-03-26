import React from 'react';

const Title = ({ children }: { children: string }) => {
  return (
    <h1 className="text-4xl font-bold text-secondary text-center mx-auto my-10">
      {children}
    </h1>
  );
};

export default Title;
