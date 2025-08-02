import React, { useState } from 'react';

const AdminSendUpdate: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');

    try {
      const res = await fetch('http://localhost:8080/api/email/send-update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`
      });

      if (res.ok) {
        setStatus('Update sent to all subscribers!');
        setSubject('');
        setMessage('');
      } else {
        setStatus('Failed to send update.');
      }
    } catch (error) {
      setStatus('Server not reachable.');
    }
  };

  return (
    <div className="p-4 mt-6 bg-gray-50 dark:bg-gray-800 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Admin: Send Update</h2>
      <form onSubmit={handleSend} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="px-3 py-2 border rounded text-black"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
          className="px-3 py-2 border rounded text-black"
        />
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white py-2 rounded">
          Send Update
        </button>
      </form>
      {status && <p className="mt-2 text-blue-600 dark:text-blue-400">{status}</p>}
    </div>
  );
};

export default AdminSendUpdate;
