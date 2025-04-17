import { useNavigate } from 'react-router-dom';
import { UserType } from '../types';

export default function Login() {
  const navigate = useNavigate();


  const handleUserTypeSelect = (type: UserType) => {
    navigate(`/${type}`);
  };

  return (
            

      
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Select User Type</h3>
              <div className="space-y-2">
                {(['student', 'college', 'recruiter'] as UserType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => handleUserTypeSelect(type)}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 capitalize"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

  );
}