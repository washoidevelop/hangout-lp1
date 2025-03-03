import React from 'react';
import { Heart, Instagram, Facebook, Twitter, Clock, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Heart className="text-pink-400 mr-2" size={24} />
              <span className="text-xl font-bold">遺伝子ダイエット</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              遺伝子検査付きダイエットコース。あなたの体質に合わせた最適なダイエット方法で理想のカラダへ導きます。
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">営業時間</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <Clock className="mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>平日: 7:00 - 22:00</span>
                </li>
                <li className="flex items-start">
                  <Clock className="mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>土日祝: 9:00 - 20:00</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">アクセス</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>東京都渋谷区神宮前6-12-10</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>渋谷駅から徒歩5分</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <Phone className="mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>03-1234-5678</span>
                </li>
                <li className="flex items-start">
                  <Mail className="mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>info@mydensi.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2025 株式会社レイクビー. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">プライバシーポリシー</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">利用規約</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">会社概要</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
