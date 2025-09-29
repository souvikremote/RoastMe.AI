'use client';
import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import RoastBanner from './RoastBanner';

const ShareModal = ({ isOpen, onClose, roast }) => {
  const bannerRef = useRef(null);

  const handleDownload = () => {
    if (bannerRef.current === null) {
      return;
    }

    toPng(bannerRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'roast-me-ai.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Oops, something went wrong!', err);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Share Your Roast!</h2>
        <p className="text-gray-600 mb-6">Download the banner below and share it with your friends (or enemies).</p>

        <div className="flex justify-center mb-6">
          <RoastBanner roast={roast} ref={bannerRef} />
        </div>

        <div className="flex justify-center space-x-4">
          <button onClick={handleDownload} className="btn btn-primary">
            Download Image
          </button>
          <button onClick={onClose} className="btn btn-secondary">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;