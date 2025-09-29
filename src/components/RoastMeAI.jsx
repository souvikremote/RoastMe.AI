'use client';
import { useState, useEffect } from 'react';
import { getMockRoast } from '@/lib/prompts';
import Timeline from './Timeline';
import PermissionModal from './PermissionModal';

const RoastMeAI = () => {
  const [name, setName] = useState('');
  const [mood, setMood] = useState('playful');
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const [roastResult, setRoastResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [roasts, setRoasts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roastToPublish, setRoastToPublish] = useState(null);

  useEffect(() => {
    try {
      const storedRoasts = localStorage.getItem('roastHistory');
      if (storedRoasts) {
        setRoasts(JSON.parse(storedRoasts));
      }
    } catch (error) {
      console.error("Failed to parse roasts from localStorage", error);
    }
  }, []);

  const updateLocalStorage = (updatedRoasts) => {
    localStorage.setItem('roastHistory', JSON.stringify(updatedRoasts));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleGenerateRoast = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setRoastResult(null);

    setTimeout(() => {
      const roastText = getMockRoast(mood, name);
      const newRoast = {
        id: Date.now().toString(),
        name,
        text: roastText,
        imageUrl,
        date: new Date().toISOString(),
        isPublished: false,
      };

      setRoastResult(newRoast);
      const updatedRoasts = [newRoast, ...roasts];
      setRoasts(updatedRoasts);
      updateLocalStorage(updatedRoasts);

      setIsLoading(false);
    }, 1500);
  };

  const handleDeleteRoast = (id) => {
    const updatedRoasts = roasts.filter(r => r.id !== id);
    setRoasts(updatedRoasts);
    updateLocalStorage(updatedRoasts);
  };

  const handlePublishClick = (id) => {
    setRoastToPublish(id);
    setIsModalOpen(true);
  };

  const handleConfirmPublish = () => {
    const updatedRoasts = roasts.map(r =>
      r.id === roastToPublish ? { ...r, isPublished: true } : r
    );
    setRoasts(updatedRoasts);
    updateLocalStorage(updatedRoasts);
    setIsModalOpen(false);
    setRoastToPublish(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setRoastToPublish(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="card">
        <form onSubmit={handleGenerateRoast} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Enter your name (optional) 🤪"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="input-field"
            >
              <option value="playful">Playful</option>
              <option value="sassy">Sassy</option>
              <option value="cute">Cute</option>
              <option value="roast-hard">Roast Hard 🔥</option>
              <option value="hinglish">Hinglish</option>
            </select>
          </div>
          <div>
            <label htmlFor="selfie-upload" className="block text-sm font-medium text-gray-700 mb-2">
              Upload your selfie (or don't, I'm not your mom)
            </label>
            <input
              id="selfie-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200"
            />
          </div>
          {imageUrl && (
            <div className="text-center">
              <img src={imageUrl} alt="Preview" className="mx-auto h-32 w-32 rounded-lg object-cover shadow-md" />
            </div>
          )}
          <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
            {isLoading ? 'Roasting in progress...' : 'Generate Roast ✨'}
          </button>
        </form>
      </div>

      {isLoading && (
        <div className="text-center mt-8">
          <p className="text-xl font-bold animate-pulse">Cooking up a spicy roast...🌶️</p>
        </div>
      )}

      {roastResult && (
        <div className="mt-10 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-4">Your Fresh Roast!</h2>
          <div className="bg-gradient-to-br from-pink-400 via-purple-400 to-yellow-400 p-1 rounded-2xl shadow-2xl aspect-[9/16] max-w-sm mx-auto">
            <div className="bg-white rounded-xl h-full flex flex-col p-6 items-center justify-between">
              {roastResult.imageUrl && (
                <img src={roastResult.imageUrl} alt="User selfie" className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white" />
              )}
              <p className="text-2xl font-bold text-center my-6">"{roastResult.text}"</p>
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                RoastMe.AI 🔥
              </p>
            </div>
          </div>
        </div>
      )}

      <Timeline roasts={roasts} onDelete={handleDeleteRoast} onPublish={handlePublishClick} />

      <PermissionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmPublish}
      />
    </div>
  );
};

export default RoastMeAI;