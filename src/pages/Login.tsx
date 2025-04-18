import { useNavigate } from 'react-router-dom';
import { UserType } from '../types';

export default function Login() {
  const navigate = useNavigate();

  const handleUserTypeSelect = (type: UserType) => {
    navigate(`/${type}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome to CareerAlly</h2>
        <h3 className="text-lg font-medium text-gray-700 mb-4">Select User Type</h3>
        <div className="space-y-3">
          {(['student', 'college', 'recruiter'] as UserType[]).map((type) => (
            <button
              key={type}
              onClick={() => handleUserTypeSelect(type)}
              className="w-full py-2 px-4 rounded-lg shadow-sm text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 capitalize"
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
