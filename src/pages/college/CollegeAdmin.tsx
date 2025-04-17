import React from 'react';
import Layout from '../../components/Layout';
import { Users, BarChart, FileText } from 'lucide-react';

export default function CollegeAdmin() {
  const adminActions = [
    { icon: <Users className="w-6 h-6" />, title: 'Student Management', description: 'Manage student profiles and permissions' },
    { icon: <BarChart className="w-6 h-6" />, title: 'Analytics', description: 'View detailed analytics and reports' },
    { icon: <FileText className="w-6 h-6" />, title: 'Reports', description: 'Generate and download reports' }
  ];

  return (
    <Layout title="Admin Panel">
      <div className="space-y-6">
        {adminActions.map((action, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 text-gray-600">{action.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">{action.title}</h3>
                <p className="text-gray-500">{action.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}