'use client';
import Link from 'next/link';
import { FaHome, FaFire, FaLaughSquint, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed h-screen bg-gray-800 text-white transition-all duration-300 ease-in-out z-50 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1 className={`font-bold text-xl transition-opacity duration-300 whitespace-nowrap ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          RoastMe.AI
        </h1>
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-700">
          {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
        </button>
      </div>
      <nav className="mt-10">
        <ul>
          <li>
            <Link href="/" className={`flex items-center p-4 hover:bg-gray-700 ${!isOpen && 'justify-center'}`}>
              <FaHome size={24} />
              <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'ml-4' : 'w-0'}`}>
                <span className="whitespace-nowrap">Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/roastme.ai" className={`flex items-center p-4 hover:bg-gray-700 ${!isOpen && 'justify-center'}`}>
              <FaFire size={24} />
              <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'ml-4' : 'w-0'}`}>
                <span className="whitespace-nowrap">RoastMe.AI</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`absolute bottom-4 left-0 w-full flex justify-center items-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <FaLaughSquint size={40} className="text-yellow-400" />
        <span className="font-bold text-sm ml-4 whitespace-nowrap">
          Have Fun!
        </span>
      </div>
    </div>
  );
};

export default Sidebar;