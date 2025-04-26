import { FaEnvelope, FaLock } from "react-icons/fa";
import FormRowVertical from "../../UI/FormRowVertical";
import { useState } from "react";
import { useLogin } from "../../app/hooks/useLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: login, isLoading, error, isSuccess } = useLogin();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  if(isSuccess){
    navigate('/app/organizations')
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="flex w-full max-w-md shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
        <div className="w-full bg-white p-8">
          <h2 className="text-2xl font-bold text-black text-center mb-6">
            Log In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormRowVertical label="Email" icon={FaEnvelope}>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic w-full"
              />
            </FormRowVertical>

            <FormRowVertical label="Password" icon={FaLock}>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password..."
                className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic w-full"
              />
            </FormRowVertical>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 rounded-md bg-violet-700 text-white font-semibold hover:bg-violet-800"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
            {error && (
  <p className="text-red-600 text-sm text-center">
    {error.response?.data?.message || 'Login failed. Please try again.'}
  </p>
)}

          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <a href="/signup" className="text-violet-700 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
