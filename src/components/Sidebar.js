import React from 'react';
import { Layout, PieChart, BarChart, Users, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Layout, label: 'Dashboard', active: true },
    { icon: PieChart, label: 'Analytics' },
    { icon: BarChart, label: 'Charts' },
    { icon: Users, label: 'Users' },
    { icon: Settings, label: 'Settings' }
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>Dashboard</h2>
      </div>
      <nav className="nav">
        {menuItems.map((item, index) => (
          <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
            <item.icon size={20} />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;