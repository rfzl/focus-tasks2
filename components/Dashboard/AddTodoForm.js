// components/Dashboard/AddTodoForm.js
'use client';

import { useState } from 'react';

export default function AddTodoForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Judul tugas tidak boleh kosong');
      return;
    }

    onAdd(title);
    setTitle('');
    setError('');
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Tambah Tugas Baru</h3>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-3 text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Masukkan tugas baru..."
          className="flex-grow shadow appearance-none border rounded-l py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        >
          Tambah
        </button>
      </form>
    </div>
  );
}