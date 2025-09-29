'use client';
import Link from 'next/link';
import { FaHome, FaFire, FaLaughSquint, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`relative bg-gray-800 text-white transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex items-center justify-between p-4">
        <h1 className={`font-bold text-xl transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          RoastMe.AI
        </h1>
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-700">
          {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
        </button>
      </div>
      <nav className="mt-10">
        <ul>
          <li>
            <Link href="/" className="flex items-center p-4 hover:bg-gray-700">
              <FaHome size={24} />
              <span className={`ml-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/roast" className="flex items-center p-4 hover:bg-gray-700">
              <FaFire size={24} />
              <span className={`ml-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>RoastMe.AI</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`absolute bottom-4 left-0 w-full flex justify-center items-center ${isOpen ? '' : 'flex-col'}`}>
        <FaLaughSquint size={isOpen ? 40 : 30} className="text-yellow-400" />
        <span className={`mt-2 font-bold text-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 ml-4' : 'opacity-0'}`}>
          Have Fun!
        </span>
      </div>
    </div>
  );
};

export default Sidebar;