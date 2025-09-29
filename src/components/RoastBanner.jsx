'use client';
import React from 'react';

const RoastBanner = React.forwardRef(({ roast }, ref) => {
  if (!roast) return null;

  return (
    <div ref={ref} className="w-[350px] h-[622px] bg-gradient-to-br from-pink-400 via-purple-400 to-yellow-400 p-1 rounded-2xl shadow-2xl">
      <div className="bg-white rounded-xl h-full flex flex-col p-6 items-center justify-between">
        {roast.imageUrl && (
          <img
            src={roast.imageUrl}
            alt="User selfie"
            className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
          />
        )}
        <p className="text-2xl font-bold text-center my-6">"{roast.text}"</p>
        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          RoastMe.AI 🔥
        </p>
      </div>
    </div>
  );
});

RoastBanner.displayName = 'RoastBanner';
export default RoastBanner;