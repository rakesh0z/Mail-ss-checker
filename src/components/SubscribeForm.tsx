import React, { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8080/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const text = await res.text();
      if (res.ok) {
        setMessage(`✅ ${text}`);
        setEmail('');
      } else {
        setMessage(`❌ ${text}`);
      }
    } catch (err) {
      setMessage('❌ Server not reachable');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg border rounded">
      <h2 className="text-xl font-semibold mb-4">Subscribe to Senior Sense</h2>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
    </div>
  );
};

export default SubscribeForm;
