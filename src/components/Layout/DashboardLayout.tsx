import React, { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex">
      <div className="w-64 fixed h-full">
        <Sidebar />
      </div>
      <div className="flex-1 ml-64">
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}