import React from 'react';
import { Bell, User, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <Search size={20} />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-actions">
        <Bell size={20} />
        <User size={20} />
        <span>Admin</span>
      </div>
    </header>
  );
};

export default Header;