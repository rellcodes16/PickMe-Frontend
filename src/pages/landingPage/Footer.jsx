import { FaFacebookF, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-violet-700 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2">
            {/* <div className="bg-violet-700 w-4 h-4 rounded-full"></div> */}
            <h2 className="text-xl font-bold text-white">PickMe</h2>
          </div>
          <div className="mt-4 flex gap-3">
            <button className="bg-white text-violet-700 px-4 py-2 rounded-full font-medium cursor-pointer transition">
              Try PickMe
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-full font-medium cursor-pointer transition">
              Watch Demo
            </button>
          </div>
          <div className="mt-6 flex space-x-4 text-xl text-white">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row lg:flex-row md:space-x-10 text-lg">
          <a href="#" className="cursor-pointer hover:underline">Features</a>
          <a href="#" className="cursor-pointer hover:underline">Pricing</a>
          <a href="#" className="cursor-pointer hover:underline">Privacy Policy</a>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-6 py-4 px-6 flex justify-between text-xs text-white">
        <p>&copy; {new Date().getFullYear()} PickMe Inc. All rights reserved.</p>
        <a href="#" className="cursor-pointer">Terms of Service</a>
      </div>
    </footer>
  );
}
