'use client';
import { useState, useRef } from 'react';

const Timeline = ({ roasts, onDelete, onPublish, onShare }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (roasts.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        <p className="text-2xl">🤔</p>
        <p className="mt-2">Your roast history is empty. Go on, roast yourself!</p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        🔥 Your Roast History 🔥
      </h2>
      <ul className="space-y-4">
        {roasts.map((roast) => (
          <li key={roast.id} className="card animate-fade-in overflow-hidden">
            <div
              className="flex justify-between items-center cursor-pointer p-4"
              onClick={() => handleToggle(roast.id)}
              onMouseEnter={() => setExpandedId(roast.id)}
              onMouseLeave={() => setExpandedId(null)}
            >
              <div className="flex items-center gap-4">
                {roast.imageUrl && (
                  <img
                    src={roast.imageUrl}
                    alt="User selfie"
                    className="w-12 h-12 rounded-lg object-cover shadow-sm"
                  />
                )}
                <p className="font-medium truncate">{roast.text}</p>
              </div>
              <span className="text-gray-400 text-sm">
                {new Date(roast.date).toLocaleDateString()}
              </span>
            </div>
            {expandedId === roast.id && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  {roast.imageUrl && (
                    <img
                      src={roast.imageUrl}
                      alt="User selfie"
                      className="w-32 h-32 rounded-xl object-cover shadow-md"
                    />
                  )}
                  <div className="flex-grow text-center md:text-left">
                    <p className="text-lg font-medium">"{roast.text}"</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Roasted on {new Date(roast.date).toLocaleDateString()}
                    </p>
                    <p className="text-xs font-bold text-pink-500 mt-1">RoastMe.AI 🔥</p>
                  </div>
                  <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2 self-center">
                    <button onClick={() => onShare(roast)} className="btn btn-share text-sm py-2 px-4">
                      Share
                    </button>
                    {roast.isPublished ? (
                      <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold mr-2 px-3 py-2 rounded-full">
                        Published ✔️
                      </span>
                    ) : (
                      <button onClick={() => onPublish(roast.id)} className="btn btn-primary text-sm py-2 px-4">
                        Publish
                      </button>
                    )}
                    <button onClick={() => onDelete(roast.id)} className="btn btn-delete text-sm py-2 px-4">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;