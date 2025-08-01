import React, { useState } from 'react';
import { Plus, Filter, Check, Clock, AlertCircle } from 'lucide-react';
import { DashboardLayout } from '../components/Layout/DashboardLayout';

const initialTasks = [
  { id: 1, title: 'Complete quarterly report', description: 'Analyze Q4 performance metrics', status: 'completed', priority: 'high', dueDate: '2025-01-15' },
  { id: 2, title: 'Review project documentation', description: 'Go through technical specifications', status: 'in-progress', priority: 'medium', dueDate: '2025-01-18' },
  { id: 3, title: 'Update client presentation', description: 'Revise slides for Monday meeting', status: 'pending', priority: 'high', dueDate: '2025-01-20' },
  { id: 4, title: 'Team meeting preparation', description: 'Prepare agenda and talking points', status: 'pending', priority: 'low', dueDate: '2025-01-22' },
];

export function EmployeeTasks() {
  const [tasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-emerald-100 text-emerald-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <Check className="w-4 h-4" />;
      case 'in-progress': return <Clock className="w-4 h-4" />;
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
            <p className="text-gray-600 mt-2">Manage your assigned tasks and deadlines</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus className="w-4 h-4" />
            <span>New Task</span>
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-1">
            <Filter className="w-5 h-5 text-gray-400 mr-2" />
            {[
              { key: 'all', label: 'All Tasks', count: tasks.length },
              { key: 'pending', label: 'Pending', count: tasks.filter(t => t.status === 'pending').length },
              { key: 'in-progress', label: 'In Progress', count: tasks.filter(t => t.status === 'in-progress').length },
              { key: 'completed', label: 'Completed', count: tasks.filter(t => t.status === 'completed').length },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === tab.key
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task) => (
            <div key={task.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(task.status)}
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(task.status)}`}>
                    {task.status.replace('-', ' ')}
                  </span>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2">{task.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{task.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Due: {task.dueDate}</span>
                <button 
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    task.status === 'completed' 
                      ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                  disabled={task.status === 'completed'}
                >
                  {task.status === 'completed' ? 'Done' : 'Update'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
            <p className="text-gray-500">No tasks match the selected filter.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}