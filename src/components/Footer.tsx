import { Heart, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#5e1a3a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">店舗名</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <a href="https://hangout-diet.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Hang out　ハングアウト</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">所在地</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>〒221-0834 神奈川県横浜市神奈川区台町 1-10ルグラン台町501</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">連絡先</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <Phone className="mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>045-624-9634</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; 2025 Hang out. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white text-sm transition">利用規約</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition">プライバシーポリシー</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition">特定商取引に基づく表記</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
