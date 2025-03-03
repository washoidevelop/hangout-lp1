import React from 'react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800 mb-4">
            理想の私へ、<br />
            <span className="text-pink-600">2ヶ月で変わる</span>パーソナルジム
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            女性トレーナーと叶える理想のボディライン
          </p>
          <a href="#contact" className="inline-block bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-4 rounded-full transition duration-300 shadow-lg transform hover:-translate-y-1">
            無料カウンセリングを申し込む
          </a>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="女性がトレーナーとトレーニングしている様子" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;