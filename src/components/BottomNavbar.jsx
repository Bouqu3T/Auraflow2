import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/customize', label: '首页', icon: '🏠' },
    { path: '/questionnaire', label: '问卷', icon: '📋' },
    { path: '/plan', label: '方案', icon: '💎' },
    { path: '/order', label: '订单', icon: '📦' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 py-2 px-4 flex justify-around">
      {navItems.map((item) => (
        <div
          key={item.path}
          className={`flex flex-col items-center cursor-pointer ${location.pathname === item.path ? 'text-crystal-purple' : 'text-gray-400'}`}
          onClick={() => navigate(item.path)}
        >
          <span className="text-xl mb-1">{item.icon}</span>
          <span className="text-xs">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomNavbar;