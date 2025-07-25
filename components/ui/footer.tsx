import Link from 'next/link';
import { Gamepad2, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold text-white">GameVault</span>
            </div>
            <p className="text-gray-400">
              The ultimate gaming subscription platform with thousands of premium games at your fingertips.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Games</h3>
            <ul className="space-y-2">
              <li><Link href="/games" className="text-gray-400 hover:text-white transition-colors">All Games</Link></li>
              <li><Link href="/games?category=action" className="text-gray-400 hover:text-white transition-colors">Action</Link></li>
              <li><Link href="/games?category=rpg" className="text-gray-400 hover:text-white transition-colors">RPG</Link></li>
              <li><Link href="/games?category=strategy" className="text-gray-400 hover:text-white transition-colors">Strategy</Link></li>
              <li><Link href="/games?category=adventure" className="text-gray-400 hover:text-white transition-colors">Adventure</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/system-requirements" className="text-gray-400 hover:text-white transition-colors">System Requirements</Link></li>
              <li><Link href="/download" className="text-gray-400 hover:text-white transition-colors">Download Client</Link></li>
              <li><Link href="/status" className="text-gray-400 hover:text-white transition-colors">Server Status</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/press" className="text-gray-400 hover:text-white transition-colors">Press</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 GameVault. All rights reserved. | Gaming platform for the modern gamer.
          </p>
        </div>
      </div>
    </footer>
  );
}