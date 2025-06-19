import React from 'react';

interface CardProps {
  number: '1' | '2';
  text: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ number, text, children }) => {
  return (
    <div className="overflow-hidden">
      <div
        className="rounded-t-lg p-6 pb-14 text-white"
        style={{
          background: 'linear-gradient(180deg, #6B57FF 0%, rgba(107, 87, 255, 0) 100%)'
        }}
      >
        <div className="text-2xl font-bold mb-2">
          {number}
        </div>
        <div className="text-lg">
          {text}
        </div>
      </div>
      {children && (
        <div className="">
          {children}
        </div>
      )}
    </div>
  );
};

export default Card;