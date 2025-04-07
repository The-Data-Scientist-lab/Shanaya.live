
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-purple-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl text-purple-700">Shanaya<span className="text-gold-500">Live</span></span>
            </div>
            <p className="text-gray-500 max-w-xs">
              Premium video call services with Shanaya. Choose your perfect package and connect in high definition.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 hover:bg-purple-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 hover:bg-purple-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 hover:bg-purple-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">Video Calls</a></li>
              <li><a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">Chat Sessions</a></li>
              <li><a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">Premium Content</a></li>
              <li><a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ShanayaLive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
