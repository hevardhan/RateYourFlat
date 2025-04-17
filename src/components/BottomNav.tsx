import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MessageSquare, History, Settings, Users, Briefcase } from 'lucide-react';

interface NavItem {
  path: string;
  icon: React.ReactNode;
  label: string;
}

const studentNavItems: NavItem[] = [
  // { path: '/student/chat', icon: <MessageSquare className="w-6 h-6" />, label: 'Chat' },
  { path: '/student/jobs',icon: <Briefcase className="w-6 h-6" />, label: 'Jobs' },
  { path: '/student/history', icon: <History className="w-6 h-6" />, label: 'History' },
  { path: '/student/settings', icon: <Settings className="w-6 h-6" />, label: 'Settings' }
];

const collegeNavItems: NavItem[] = [
  { path: '/college/admin', icon: <Users className="w-6 h-6" />, label: 'Admin' },
  // { path: '/college/chat', icon: <MessageSquare className="w-6 h-6" />, label: 'Chat' },
  { path: '/college/settings', icon: <Settings className="w-6 h-6" />, label: 'Settings' }
];

const recruiterNavItems: NavItem[] = [
  { path: '/recruiter/jobs', icon: <Briefcase className="w-6 h-6" />, label: 'Jobs' },
  { path: '/recruiter/users', icon: <Users className="w-6 h-6" />, label: 'Users' },
  // { path: '/recruiter/chat', icon: <MessageSquare className="w-6 h-6" />, label: 'Chat' },
  { path: '/recruiter/settings', icon: <Settings className="w-6 h-6" />, label: 'Settings' }
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  let navItems: NavItem[] = [];
  if (path.includes('/student')) {
    navItems = studentNavItems;
  } else if (path.includes('/college')) {
    navItems = collegeNavItems;
  } else if (path.includes('/recruiter')) {
    navItems = recruiterNavItems;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center space-y-1 p-2 ${
                location.pathname === item.path
                  ? 'text-blue-500'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}