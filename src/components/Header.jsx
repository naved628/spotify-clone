import { FaHome, FaSearch, FaDownload } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-black text-white flex justify-between items-center p-4">
      {/* Left Section: Logo and Home */}
      <div className="flex items-center gap-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
          alt="Spotify Logo"
          className="h-6"
        />
        <button className="flex items-center gap-2 text-gray-300 hover:text-white">
          <FaHome size={20} />
        </button>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-96">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="What do you want to play?"
          className="bg-transparent outline-none text-white px-2 w-full"
        />
        <FaDownload className="text-gray-400" />
      </div>

      {/* Right Section: Links and Buttons */}
      <div className="flex items-center gap-6 text-gray-400">
        <a href="#" className="hover:text-white">Premium</a>
        <a href="#" className="hover:text-white">Support</a>
        <a href="#" className="hover:text-white">Download</a>
        <div className="border-l border-gray-600 h-6"></div>
        <button className="flex items-center gap-1 hover:text-white">
          <FaDownload />
          Install App
        </button>
        <a href="#" className="hover:text-white">Sign up</a>
        <button className="bg-white text-black px-4 py-2 rounded-full font-bold">
          Log in
        </button>
      </div>
    </header>
  );
};

export default Header;
