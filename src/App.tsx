import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Login } from './components/Login';
import { AdminDashboard } from './pages/AdminDashboard';
import { EmployeeDashboard } from './pages/EmployeeDashboard';
import { UserManagement } from './pages/UserManagement';
import { EmployeeTasks } from './pages/EmployeeTasks';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/login" element={<Login />} />
            
            {/* Admin Routes */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/users" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <UserManagement />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/analytics" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <div className="p-8">
                    <h1 className="text-3xl font-bold">Analytics</h1>
                    <p className="text-gray-600 mt-2">Analytics page coming soon...</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/settings" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <div className="p-8">
                    <h1 className="text-3xl font-bold">Settings</h1>
                    <p className="text-gray-600 mt-2">Settings page coming soon...</p>
                  </div>
                </ProtectedRoute>
              } 
            />

            {/* Employee Routes */}
            <Route 
              path="/employee" 
              element={
                <ProtectedRoute allowedRoles={['employee']}>
                  <EmployeeDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/employee/tasks" 
              element={
                <ProtectedRoute allowedRoles={['employee']}>
                  <EmployeeTasks />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/employee/profile" 
              element={
                <ProtectedRoute allowedRoles={['employee']}>
                  <div className="p-8">
                    <h1 className="text-3xl font-bold">Profile</h1>
                    <p className="text-gray-600 mt-2">Profile page coming soon...</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/employee/schedule" 
              element={
                <ProtectedRoute allowedRoles={['employee']}>
                  <div className="p-8">
                    <h1 className="text-3xl font-bold">Schedule</h1>
                    <p className="text-gray-600 mt-2">Schedule page coming soon...</p>
                  </div>
                </ProtectedRoute>
              } 
            />

            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;