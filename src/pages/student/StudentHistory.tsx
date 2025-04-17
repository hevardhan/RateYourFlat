import React from 'react';
import Layout from '../../components/Layout';
import { History } from 'lucide-react';

export default function StudentHistory() {
  const chatHistory = [
    { id: 1, title: 'Career Advice', date: '2024-03-15' },
    { id: 2, title: 'Resume Review', date: '2024-03-14' },
    { id: 3, title: 'Interview Tips', date: '2024-03-13' }
  ];

  return (
    <Layout title="Chat History">
      <div className="space-y-4">
        {chatHistory.map((chat) => (
          <div key={chat.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-3">
              <History className="w-5 h-5 text-gray-600" />
              <div>
                <h3 className="font-medium text-gray-900">{chat.title}</h3>
                <p className="text-sm text-gray-500">{chat.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}