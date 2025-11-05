import { Heart } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-gray-300">
            Made by Samhita Kancherla
          </p>
          <p className="text-gray-400 mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
