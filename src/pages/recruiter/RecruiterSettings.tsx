import React from 'react';
import Layout from '../../components/Layout';
import { Building, Bell, Shield, Users } from 'lucide-react';

export default function RecruiterSettings() {
  return (
    <Layout title="Settings">
      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          {[
            { icon: <Building className="w-5 h-5" />, title: 'Company Settings', description: 'Update company information' },
            { icon: <Users className="w-5 h-5" />, title: 'Team Management', description: 'Manage recruiter accounts' },
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