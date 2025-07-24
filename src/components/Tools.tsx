import { useEffect, useState } from 'react';
import axios from 'axios';

interface Response {
  message: string;
}

function ToolsPage() {
  const [data, setData] = useState<Response | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://nishant-personal-website-backend.wasmer.app/');
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1>React + Wasmer Go Backend</h1>
      {data && <p>Backend says: {data.message}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default ToolsPage;