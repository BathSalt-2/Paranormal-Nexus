import React from 'react';
import NavLink from './NavLink';
import { useApp } from '../../context/AppContext';

export default function Navbar() {
  const { user } = useApp();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">ParanormalNexus AI</span>
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Dashboard</NavLink>
              <NavLink href="/analysis">Analysis</NavLink>
              <NavLink href="/reports">Reports</NavLink>
            </div>
          </div>
          <div className="flex items-center">
            {user && (
              <span className="text-sm">
                {user.name} ({user.role})
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}