const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {/* {['about', 'expertise', 'publications', 'contact'].map((link) => ( */}
          {['about', 'publications', 'contact'].map((link) => (
            <div key={link} className="px-5 py-2">
              <a href={`#${link}`} className="text-base text-gray-500 hover:text-gray-900">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </div>
          ))}
        </nav>
       
        <p className="mt-8 text-center text-base text-gray-400">
          © 2025 Nishant Jha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;