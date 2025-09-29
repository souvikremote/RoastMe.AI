const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-white/20 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <div className="flex justify-center items-center space-x-6">
          <a href="#" className="hover:text-pink-500 transition-colors">
            Made with 🤡
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-yellow-500 transition-colors">
            Roast responsibly
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-purple-500 transition-colors">
            No feelings hurt
          </a>
        </div>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} RoastMe.AI. All rights reserved. Or whatever.
        </p>
      </div>
    </footer>
  );
};

export default Footer;