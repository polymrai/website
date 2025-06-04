import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Left aligned with padding */}
          <div className="flex items-center pl-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="polymr.ai" 
                className="h-26"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-600 hover:text-purple-600 transition-colors ${isActive('/') ? 'text-purple-600' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/demo" 
              className={`text-gray-600 hover:text-purple-600 transition-colors ${isActive('/demo') ? 'text-purple-600' : ''}`}
            >
              Request a Demo
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-600 hover:text-purple-600 transition-colors">
                Product
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/product" className="w-full px-4 py-2 hover:bg-gray-100">
                    Features
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solution-overview" className="w-full px-4 py-2 hover:bg-gray-100">
                    Solution Overview
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/pricing" 
              className={`text-gray-600 hover:text-purple-600 transition-colors ${isActive('/pricing') ? 'text-purple-600' : ''}`}
            >
              Pricing
            </Link>
            <Link 
              to="/clients" 
              className={`text-gray-600 hover:text-purple-600 transition-colors ${isActive('/clients') ? 'text-purple-600' : ''}`}
            >
              Clients
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-600 hover:text-purple-600 transition-colors">
                About Us
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/about" className="w-full px-4 py-2 hover:bg-gray-100">
                    About polymr.ai
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://www.linkedin.com/in/naman-mukerji-329539223/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 hover:bg-gray-100"
                  >
                    Naman Mukerji
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://www.linkedin.com/in/tanmay-neema-099659346/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 hover:bg-gray-100"
                  >
                    Tanmay Neema
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/contact" 
              className={`text-gray-600 hover:text-purple-600 transition-colors ${isActive('/contact') ? 'text-purple-600' : ''}`}
            >
              Contact
            </Link>
            <Link 
              to="/login" 
              className={`text-gray-600 hover:text-purple-600 transition-colors ${isActive('/login') ? 'text-purple-600' : ''}`}
            >
              Login / Create Account
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/demo" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                Request a Demo
              </Link>
              <Link to="/product" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                Product Features
              </Link>
              <Link to="/solution-overview" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                Solution Overview
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Link to="/clients" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                Clients
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/login" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                Login / Create Account
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
