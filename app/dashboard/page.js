// app/dashboard/page.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';
import { db } from '@/lib/firebase';
import { collection, addDoc, doc, deleteDoc, updateDoc, onSnapshot, query, where, serverTimestamp } from 'firebase/firestore';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import AddTodoForm from '@/components/Dashboard/AddTodoForm';
import TodoList from '@/components/Dashboard/TodoList';
import StatisticsChart from '@/components/Dashboard/StatisticsChart';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      const todosRef = collection(db, 'todos');
      const q = query(todosRef, where('userId', '==', user.uid));
      
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const todosData = [];
        snapshot.forEach((doc) => {
          todosData.push({ id: doc.id, ...doc.data() });
        });
        setTodos(todosData);
        setIsLoading(false);
      }, (error) => {
        console.error('Error fetching todos:', error);
        setIsLoading(false);
      });
      
      return () => unsubscribe();
    }
  }, [user]);

  const addTodo = async (title) => {
    try {
      await addDoc(collection(db, 'todos'), {
        title,
        completed: false,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const toggleComplete = async (id) => {
    const todoRef = doc(db, 'todos', id);
    const todoToUpdate = todos.find(todo => todo.id === id);
    
    try {
      await updateDoc(todoRef, {
        completed: !todoToUpdate.completed,
      });
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await deleteDoc(doc(db, 'todos', id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const editTodo = async (id, newTitle) => {
    const todoRef = doc(db, 'todos', id);
    
    try {
      await updateDoc(todoRef, {
        title: newTitle,
      });
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (loading || !user) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Memuat...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-2/3 md:pr-6 mb-8 md:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Daftar Tugas</h2>
                
                <AddTodoForm onAdd={addTodo} />
                
                <div className="mb-4">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setFilter('all')}
                      className={`px-3 py-2 rounded-md ${
                        filter === 'all'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Semua
                    </button>
                    <button
                      onClick={() => setFilter('active')}
                      className={`px-3 py-2 rounded-md ${
                        filter === 'active'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Aktif
                    </button>
                    <button
                      onClick={() => setFilter('completed')}
                      className={`px-3 py-2 rounded-md ${
                        filter === 'completed'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Selesai
                    </button>
                  </div>
                </div>
                
                {isLoading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                    <p className="mt-2 text-gray-600">Memuat tugas...</p>
                  </div>
                ) : (
                  <TodoList
                    todos={filteredTodos}
                    onToggleComplete={toggleComplete}
                    onDelete={deleteTodo}
                    onEdit={editTodo}
                  />
                )}
              </div>
            </div>
            
            <div className="w-full md:w-1/3">
              <StatisticsChart todos={todos} />
              
              <div className="bg-white p-4 rounded-lg shadow-sm mt-6">
                <h3 className="text-lg font-semibold mb-4">Tips Produktivitas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mulai dengan tugas tersulit di pagi hari
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Gunakan teknik Pomodoro: Bekerja 25 menit, istirahat 5 menit
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Pecah tugas besar menjadi beberapa tugas kecil
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tetapkan tenggat waktu untuk setiap tugas
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Minimalisir gangguan saat bekerja
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}