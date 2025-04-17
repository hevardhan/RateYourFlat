import React from 'react';
import Layout from '../../components/Layout';
import { Building, Users, Shield, Bell } from 'lucide-react';

export default function CollegeSettings() {
  return (
    <Layout title="Settings">
      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          {[
            { icon: <Building className="w-5 h-5" />, title: 'Institution Settings', description: 'Update college information' },
            { icon: <Users className="w-5 h-5" />, title: 'User Management', description: 'Manage staff accounts and roles' },
            { icon: <Shield className="w-5 h-5" />, title: 'Security', description: 'Configure security settings' },
            { icon: <Bell className="w-5 h-5" />, title: 'Notifications', description: 'Manage notification preferences' }
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