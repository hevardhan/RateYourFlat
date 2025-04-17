import React from 'react';
import Layout from '../../components/Layout';
import { Bell, Lock, User, Moon } from 'lucide-react';

export default function StudentSettings() {
  return (
    <Layout title="Settings">
      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          {[
            { icon: <User className="w-5 h-5" />, title: 'Profile Settings', description: 'Update your personal information' },
            { icon: <Bell className="w-5 h-5" />, title: 'Notifications', description: 'Manage your notification preferences' },
            { icon: <Lock className="w-5 h-5" />, title: 'Privacy', description: 'Control your privacy settings' },
            { icon: <Moon className="w-5 h-5" />, title: 'Appearance', description: 'Customize your app appearance' }
          ].map((setting, index) => (
            <div key={index} className="p-4 flex items-center space-x-3">
              <div className="flex-shrink-0 text-gray-600">{setting.icon}</div>
              <div className="flex-1">
                <h3 className="text-gray-900 font-medium">{setting.title}</h3>
                <p className="text-gray-500 text-sm">{setting.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}