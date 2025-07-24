import { useState } from 'react';

function ToolsPage() {
  const [messages] = useState([
    { role: 'user', content: 'Hello!' }
  ]);
  const [response, setResponse] = useState('');

  async function sendMessage() {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });
    const data = await res.json();
    setResponse(data.choices?.[0]?.message?.content || 'No response');
  }

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
      <div>Response: {response}</div>
    </div>
  );
}

export default ToolsPage;