import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut,
  CheckSquare,
  User,
  Calendar
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const adminNavItems = [
  { path: '/admin', icon: Home, label: 'Dashboard' },
  { path: '/admin/users', icon: Users, label: 'User Management' },
  { path: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
  { path: '/admin/settings', icon: Settings, label: 'Settings' },
];

const employeeNavItems = [
  { path: '/employee', icon: Home, label: 'Dashboard' },
  { path: '/employee/tasks', icon: CheckSquare, label: 'My Tasks' },
  { path: '/employee/profile', icon: User, label: 'Profile' },
  { path: '/employee/schedule', icon: Calendar, label: 'Schedule' },
];

export function Sidebar() {
  const { user, logout } = useAuth();
  const navItems = user?.role === 'admin' ? adminNavItems : employeeNavItems;

  return (
    <div className="h-full bg-white shadow-xl border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <img
            src={user?.avatar || 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'}
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{user?.name}</h3>
            <p className="text-sm text-gray-500 capitalize">{user?.role}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map(({ path, icon: Icon, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={logout}
          className="flex items-center space-x-3 w-full px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}