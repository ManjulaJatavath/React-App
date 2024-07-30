import React from 'react';

interface GreetingProps {
  firstname: string;
  lastname ?:string
}

const Greeting: React.FC<GreetingProps> = ({ firstname,lastname}) => {
  return (
    <div>
      <h1>Hello, {firstname}</h1>
    </div>
  );
};

export default Greeting;
