'use client';

const PermissionModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="card max-w-sm text-center transform transition-all scale-95 hover:scale-100 duration-300">
        <h2 className="text-2xl font-bold mb-4">
          Make this roast public? 🔥
        </h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to share this masterpiece with the world?
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onConfirm}
            className="btn btn-primary"
          >
            Yasss! ✨
          </button>
          <button
            onClick={onClose}
            className="btn btn-secondary"
          >
            Nah, keep it secret
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermissionModal;