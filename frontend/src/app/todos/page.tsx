'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { ThemeToggle } from '@/components/ThemeToggle';

interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    fetchTodos();
  }, [user, router]);

  const fetchTodos = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/todos', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        credentials: 'include',
      });

      if (!res.ok) throw new Error('Failed to fetch todos');

      const data = await res.json();
      setTodos(data);
    } catch {
      setError('Failed to fetch todos');
    }
  };

  const handleCreateTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        credentials: 'include',
        body: JSON.stringify({ title, description }),
      });

      if (!res.ok) throw new Error('Failed to create todo');

      const newTodo = await res.json();
      setTodos([newTodo, ...todos]);
      setTitle('');
      setDescription('');
    } catch {
      setError('Failed to create todo');
    }
  };

  const handleToggleComplete = async (id: number, completed: boolean) => {
    try {
      const res = await fetch(`http://localhost:3001/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        credentials: 'include',
        body: JSON.stringify({ completed: !completed }),
      });

      if (!res.ok) throw new Error('Failed to update todo');

      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !completed } : todo
        )
      );
    } catch {
      setError('Failed to update todo');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3001/api/todos/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        credentials: 'include',
      });

      if (!res.ok) throw new Error('Failed to delete todo');

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch {
      setError('Failed to delete todo');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Todos</h1>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={logout}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>

        <form onSubmit={handleCreateTodo} className="mt-8 space-y-4">
          <div>
            <input
              type="text"
              placeholder="Todo title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Todo
          </button>
        </form>

        {error && (
          <div className="mt-4 text-red-500 text-sm text-center">{error}</div>
        )}

        <div className="mt-8 space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id, todo.completed)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-700 rounded"
                />
                <div>
                  <h3
                    className={`text-lg font-medium ${
                      todo.completed 
                        ? 'line-through text-gray-400 dark:text-gray-500' 
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {todo.title}
                  </h3>
                  {todo.description && (
                    <p className="text-gray-500 dark:text-gray-400">{todo.description}</p>
                  )}
                </div>
              </div>
              <button
                onClick={() => handleDelete(todo.id)}
                className="ml-4 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 