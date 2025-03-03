import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* <Heart className="text-pink-500 mr-2" size={24} /> */}
          <span className="text-xl font-bold text-pink-600">遺伝子ダイエット</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-pink-500 transition">特徴</a>
          <a href="#results" className="text-gray-600 hover:text-pink-500 transition">実績</a>
          <a href="#testimonials" className="text-gray-600 hover:text-pink-500 transition">お客様の声</a>
          <a href="#pricing" className="text-gray-600 hover:text-pink-500 transition">料金</a>
          <a href="#faq" className="text-gray-600 hover:text-pink-500 transition">よくある質問</a>
        </nav>
        <a href="#contact" className="hidden md:block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition duration-300 shadow-md">
          お問い合わせ
        </a>
        <button className="md:hidden text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
