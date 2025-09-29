import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-white/20">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors">
              RoastMe.AI 🔥
            </Link>
            <p className="hidden md:block bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text font-semibold">
              The Gen-Z Roaster Bot 🤖
            </p>
          </div>
          <button className="btn btn-primary">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;