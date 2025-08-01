import React from 'react';
import { Users, TrendingUp, DollarSign, Activity } from 'lucide-react';
import { DashboardLayout } from '../components/Layout/DashboardLayout';

const stats = [
  { label: 'Total Users', value: '2,847', change: '+12%', icon: Users, color: 'bg-blue-500' },
  { label: 'Revenue', value: '$45,210', change: '+8%', icon: DollarSign, color: 'bg-emerald-500' },
  { label: 'Growth Rate', value: '23.5%', change: '+2.3%', icon: TrendingUp, color: 'bg-purple-500' },
  { label: 'Active Projects', value: '127', change: '+5%', icon: Activity, color: 'bg-orange-500' },
];

export function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Monitor and manage your organization</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-sm text-emerald-600 mt-1">{stat.change} from last month</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Users</h3>
            <div className="space-y-3">
              {[
                { name: 'Alice Johnson', email: 'alice@company.com', role: 'Employee', status: 'Active' },
                { name: 'Bob Smith', email: 'bob@company.com', role: 'Manager', status: 'Active' },
                { name: 'Carol Davis', email: 'carol@company.com', role: 'Employee', status: 'Inactive' },
              ].map((user) => (
                <div key={user.email} className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{user.role}</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      user.status === 'Active' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
            <div className="space-y-4">
              {[
                { service: 'Database', status: 'Operational', uptime: '99.9%' },
                { service: 'API Services', status: 'Operational', uptime: '99.8%' },
                { service: 'File Storage', status: 'Maintenance', uptime: '98.5%' },
              ].map((service) => (
                <div key={service.service} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{service.service}</p>
                    <p className="text-sm text-gray-500">Uptime: {service.uptime}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    service.status === 'Operational' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {service.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}