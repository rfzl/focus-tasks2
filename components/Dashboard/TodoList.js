// components/Dashboard/TodoList.js
'use client';

import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggleComplete, onDelete, onEdit }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-6 text-gray-500">
        Belum ada tugas. Tambahkan tugas baru untuk memulai.
      </div>
    );
  }

  return (
    <div className="mt-6">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}