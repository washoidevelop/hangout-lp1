import React from 'react';
import { MessageCircle } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          続けられる、選ばれる理由
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-pink-50 p-8 rounded-lg shadow-md">
            <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">無理のない食事指導</h3>
            <p className="text-gray-600">
              極端な食事制限はありません。あなたの生活スタイルに合わせた、続けられる食事プランを提案します。栄養バランスを考えた美味しい食事で、健康的に理想の体型へ。
            </p>
          </div>
          <div className="bg-pink-50 p-8 rounded-lg shadow-md">
            <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">24時間サポート体制</h3>
            <p className="text-gray-600">
              専用アプリで、いつでもトレーナーに質問や相談ができます。食事の写真を送って確認してもらったり、自宅でのトレーニング方法を教えてもらえるので安心です。
            </p>
          </div>
          <div className="bg-pink-50 p-8 rounded-lg shadow-md">
            <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">手ぶらで通える</h3>
            <p className="text-gray-600">
              ウェア、シューズ、タオル、アメニティグッズなど、必要なものは全て無料でご用意。仕事帰りでも気軽に立ち寄れます。シャワールームも完備で快適です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;