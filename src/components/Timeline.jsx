'use client';
import { useState } from 'react';

const Timeline = ({ roasts, onDelete, onPublish }) => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (roast) => {
    navigator.clipboard.writeText(roast.text);
    setCopiedId(roast.id);
    setTimeout(() => setCopiedId(null), 2000);
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
      <div className="space-y-8">
        {roasts.map((roast) => (
          <div key={roast.id} className="card flex flex-col md:flex-row gap-6 items-center animate-fade-in">
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
              <button onClick={() => handleCopy(roast)} className="btn btn-secondary text-sm py-2 px-4">
                {copiedId === roast.id ? 'Copied! ✅' : 'Copy'}
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
        ))}
      </div>
    </div>
  );
};

export default Timeline;