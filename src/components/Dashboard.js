import React from 'react';
import { TrendingUp, Users, DollarSign, ShoppingCart } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: TrendingUp, label: 'Total Revenue', value: '$45,231.89', change: '+20.1%' },
    { icon: Users, label: 'Users', value: '12,234', change: '+18.1%' },
    { icon: ShoppingCart, label: 'Sales', value: '1,234', change: '+12.1%' },
    { icon: DollarSign, label: 'Profit', value: '$12,234', change: '+10.1%' }
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard Overview</h1>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">
              <stat.icon size={24} />
            </div>
            <div className="stat-content">
              <h3>{stat.label}</h3>
              <h2>{stat.value}</h2>
              <p className="positive">{stat.change} from last month</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;