import React from "react";

interface ChatSliderProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatSlider: React.FC<ChatSliderProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[999] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ opacity: isOpen ? '0.4' : '0' }}
        onClick={onClose}
      ></div>
      {/* Slider */}
      <div
        className={`fixed top-0 right-0 h-full w-[500px] max-w-full bg-white shadow-2xl z-[1000] transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={e => e.stopPropagation()}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        {/* Header */}
        <div className="relative flex items-center justify-between px-6 py-3.5 bg-gradient-to-r from-indigo-50 to-white border-b border-gray-200 rounded-t-lg shadow-sm">
          <div className="flex items-center gap-3">
            <img src="/profile_pic.jpg" alt="Profile" className="w-9 h-9 rounded-full object-cover border-2 border-white shadow" />
            <h2 className="text-xl font-semibold text-indigo-700">Ask My AI About Me</h2>
          </div>
          <button
            onClick={onClose}
            className="text-3xl text-gray-400 hover:text-indigo-600 transition-colors duration-150 focus:outline-none"
            aria-label="Close Chat"
          >
            &times;
          </button>
        </div>
        {/* Content */}
        <div className="p-6 flex flex-col h-[calc(100%-72px)]">
          <div className="flex-1 rounded-lg overflow-hidden">
            <iframe
              src="https://nishantjha101-career-conversations.hf.space"
              frameBorder="0"
              width="100%"
              height="100%"
              className="min-h-[500px] bg-gray-50"
              title="Career Conversations AI"
              style={{ minHeight: 500 }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSlider; 