import React from 'react';
import { MessageCircle } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          遺伝子検査付きダイエットコースの特徴
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-pink-50 p-8 rounded-lg shadow-md">
            <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">科学的根拠に基づくアプローチ</h3>
            <p className="text-gray-600">
              遺伝子検査で分かる3つの代謝リスク（糖質・タンパク質・脂質）から、あなたの体質を8タイプに分類。科学的根拠に基づいた、あなただけのダイエット方法をご提案します。
            </p>
          </div>
          <div className="bg-pink-50 p-8 rounded-lg shadow-md">
            <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">専門トレーナーによる指導</h3>
            <p className="text-gray-600">
              2ヶ月間で全16回（1回75分）のトレーニングセッション。あなたの体質に合わせた効果的なトレーニング方法と食事指導で、効率的に理想のカラダへと導きます。
            </p>
          </div>
          <div className="bg-pink-50 p-8 rounded-lg shadow-md">
            <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">遺伝子検査キット付き</h3>
            <p className="text-gray-600">
              専用の綿棒で頬の粘膜を採取するだけの簡単検査。痛みもなく、わずか5分で終了。約3週間後に詳細な結果レポートをお届けし、あなたの体質に合わせたプログラムをスタートします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
