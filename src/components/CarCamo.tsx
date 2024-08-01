import React from 'react';

interface CarComponentProps {
  make: string;
  model: string;
  year?: number; // Optional 
  start: () => void;
}

const CarCamo: React.FC<CarComponentProps> = ({ make, model,start }) => {
    return (
      <div>
        <h1>Car Details</h1>
        <p>Make: {make}</p>
        <p>Model: {model}</p>
        <button onClick={start}>Start Car</button>
      </div>
    );
  };
  
  export default CarCamo;
