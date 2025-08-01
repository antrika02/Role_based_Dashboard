import React from 'react';
import { CheckSquare, Clock, Star, TrendingUp } from 'lucide-react';
import { DashboardLayout } from '../components/Layout/DashboardLayout';

const taskStats = [
  { label: 'Completed Tasks', value: '24', change: '+3 today', icon: CheckSquare, color: 'bg-emerald-500' },
  { label: 'Pending Tasks', value: '8', change: '2 due today', icon: Clock, color: 'bg-orange-500' },
  { label: 'Performance Score', value: '94%', change: '+2% this week', icon: Star, color: 'bg-purple-500' },
  { label: 'Productivity', value: '127%', change: '+15% this month', icon: TrendingUp, color: 'bg-blue-500' },
];

const recentTasks = [
  { id: 1, title: 'Complete quarterly report', status: 'completed', priority: 'high', dueDate: '2025-01-15' },
  { id: 2, title: 'Review project documentation', status: 'in-progress', priority: 'medium', dueDate: '2025-01-18' },
  { id: 3, title: 'Update client presentation', status: 'pending', priority: 'high', dueDate: '2025-01-20' },
  { id: 4, title: 'Team meeting preparation', status: 'pending', priority: 'low', dueDate: '2025-01-22' },
];

export function EmployeeDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employee Dashboard</h1>
          <p className="text-gray-600 mt-2">Track your tasks and performance</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {taskStats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-sm text-emerald-600 mt-1">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Tasks */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Tasks</h3>
            <div className="space-y-3">
              {recentTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{task.title}</h4>
                    <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      task.priority === 'high' 
                        ? 'bg-red-100 text-red-800'
                        : task.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {task.priority}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      task.status === 'completed'
                        ? 'bg-emerald-100 text-emerald-800'
                        : task.status === 'in-progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {task.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <h4 className="font-medium text-blue-900">Create New Task</h4>
                <p className="text-sm text-blue-700">Add a task to your list</p>
              </button>
              <button className="w-full text-left p-3 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors">
                <h4 className="font-medium text-emerald-900">Submit Timesheet</h4>
                <p className="text-sm text-emerald-700">Log your work hours</p>
              </button>
              <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <h4 className="font-medium text-purple-900">Request Leave</h4>
                <p className="text-sm text-purple-700">Submit time-off request</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}