// Update this page (the content is just a fallback if you fail to update the page)

import { useAuth } from '../contexts/AuthContext';
import { AuthForm } from '../components/auth/AuthForm';

const Index = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      {user ? (
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Welcome, {user.email}</h1>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Out
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Your Dashboard</h2>
            <p className="text-gray-600">You are now signed in. Start building your application here!</p>
          </div>
        </div>
      ) : (
        <AuthForm />
      )}
    </div>
  );
};

export default Index;
