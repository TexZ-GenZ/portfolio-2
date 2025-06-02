import { Heart, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-primary-600 dark:text-primary-400">
              &copy; {currentYear} Priyanshu Samal. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-primary-600 dark:text-primary-400 flex items-center">
              Built with <Heart size={16} className="mx-1 text-primary-500" /> and modern web technologies
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-gray-700 rounded-full text-primary-600 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;