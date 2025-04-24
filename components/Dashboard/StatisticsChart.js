// components/Dashboard/StatisticsChart.js
'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function StatisticsChart({ todos }) {
  const completedTasks = todos.filter(todo => todo.completed).length;
  const pendingTasks = todos.length - completedTasks;
  
  const data = [
    { name: 'Selesai', value: completedTasks },
    { name: 'Belum Selesai', value: pendingTasks },
  ];
  
  const COLORS = ['#4CAF50', '#2196F3'];
  
  const calculatePercentage = (value) => {
    return todos.length > 0 ? Math.round((value / todos.length) * 100) : 0;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Statistik Tugas</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-gray-500">Total Tugas</div>
          <div className="text-2xl font-bold">{todos.length}</div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-blue-500">Belum Selesai</div>
          <div className="text-2xl font-bold">{pendingTasks}</div>
          <div className="text-sm text-gray-500">
            {calculatePercentage(pendingTasks)}% dari total
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-green-500">Selesai</div>
          <div className="text-2xl font-bold">{completedTasks}</div>
          <div className="text-sm text-gray-500">
            {calculatePercentage(completedTasks)}% dari total
          </div>
        </div>
      </div>
      
      {todos.length > 0 ? (
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="h-64 flex items-center justify-center text-gray-500">
          Belum ada data tugas untuk ditampilkan
        </div>
      )}
    </div>
  );
}