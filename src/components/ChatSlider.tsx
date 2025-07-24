import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from 'react-markdown';

interface ChatSliderProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatSlider: React.FC<ChatSliderProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [streamStarted, setStreamStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput("");
    setLoading(true);
    setStreamStarted(false);
    setHistory(prev => [...prev, { role: "user", content: userMessage }]);

    // Add a placeholder for the assistant's streaming message
    setHistory(prev => [...prev, { role: "assistant", content: "" }]);

    try {
      const response = await fetch("https://personal-website-backend-sand.vercel.app/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history: [...history, { role: "user", content: userMessage }],
        }),
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let assistantMessage = "";

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          if (!streamStarted) setStreamStarted(true);
          assistantMessage += decoder.decode(value, { stream: true });
          setHistory(prev => {
            // Update the last assistant message in history
            const updated = [...prev];
            // Find the last assistant message (should be the last item)
            for (let i = updated.length - 1; i >= 0; i--) {
              if (updated[i].role === "assistant") {
                updated[i] = { ...updated[i], content: assistantMessage };
                break;
              }
            }
            return updated;
          });
        }
      }
    } catch (error) {
      setHistory(prev => [...prev, { role: "assistant", content: "Sorry, I encountered an error." }]);
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
      setStreamStarted(false);
    }
  };

  // Custom bounce animation for loading dots
  const bounceKeyframes = `
@keyframes chat-bounce {
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
}
`;

  return (
    <>
      <style>{bounceKeyframes}</style>
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
          <div className="flex-1 rounded-lg overflow-y-auto bg-gray-50 p-4 space-y-4">
            {history.map((msg, i) => (
              // Only render assistant bubble if it has content
              (msg.role === 'assistant' && !msg.content.trim()) ? null : (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`text-sm px-3 py-2 rounded-2xl max-w-[75%] shadow-sm mb-1
                      ${msg.role === "user"
                        ? "bg-gradient-to-br from-blue-500 to-blue-400 text-white rounded-br-md rounded-tl-2xl rounded-tr-2xl"
                        : "bg-gray-200 text-gray-900 rounded-bl-md rounded-tl-2xl rounded-tr-2xl"}
                    `}
                    style={{ fontSize: '0.85rem', lineHeight: '1.4' }}
                  >
                    {msg.role === 'assistant' ? (
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              )
            ))}
            {loading && !streamStarted && (
              <div className="flex justify-start">
                <div className="text-sm px-3 py-2 rounded-2xl max-w-[75%] shadow-sm mb-1 bg-gray-200 text-gray-400 border flex items-center gap-2 rounded-bl-md rounded-tl-2xl rounded-tr-2xl" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '1em',
                    marginRight: '0.1em',
                    animation: 'chat-bounce 1.2s infinite',
                  }}>•</span>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '1em',
                    marginRight: '0.1em',
                    animation: 'chat-bounce 1.2s infinite',
                    animationDelay: '0.2s',
                  }}>•</span>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '1em',
                    animation: 'chat-bounce 1.2s infinite',
                    animationDelay: '0.4s',
                  }}>•</span>
                  <span className="ml-2"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input
              type="text"
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              disabled={loading || !input.trim()}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSlider; 