import { FaEnvelope, FaLock } from "react-icons/fa";
import FormRowVertical from "../../UI/FormRowVertical";

function Login() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="flex w-full max-w-md shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
        <div className="w-full bg-white p-8">
          <h2 className="text-2xl font-bold text-black text-center mb-6">
            Log In
          </h2>

          <form className="space-y-4">
            <FormRowVertical label="Email" icon={FaEnvelope}>
              <input
                id="email"
                type="email"
                placeholder="Enter your email..."
                className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic w-full"
              />
            </FormRowVertical>

            <FormRowVertical label="Password" icon={FaLock}>
              <input
                id="password"
                type="password"
                placeholder="Enter your password..."
                className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic w-full"
              />
            </FormRowVertical>

            <button
              type="submit"
              className="w-full py-2 rounded-md bg-violet-700 text-white font-semibold hover:bg-violet-800"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <a href="/signup" className="text-violet-700 hover:undesrline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
