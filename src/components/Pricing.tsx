import React from 'react';
import { CheckCircle } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          分かりやすい料金プラン
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          あなたのライフスタイルに合わせて選べる、シンプルな料金体系
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-pink-100 p-6">
              <h3 className="text-2xl font-bold text-center">スタンダードプラン</h3>
              <div className="text-center mt-4">
                <span className="text-4xl font-bold">¥98,000</span>
                <span className="text-gray-600">/2ヶ月</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>週2回のパーソナルトレーニング</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>食事指導・アドバイス</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>専用アプリでのサポート</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>体組成測定・分析</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg mt-8 transition duration-300">
                無料カウンセリングを予約
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105 z-10">
            <div className="bg-pink-500 p-6 text-white">
              <div className="text-center mb-2">
                <span className="bg-white text-pink-500 text-xs font-bold px-3 py-1 rounded-full uppercase">人気No.1</span>
              </div>
              <h3 className="text-2xl font-bold text-center">プレミアムプラン</h3>
              <div className="text-center mt-4">
                <span className="text-4xl font-bold">¥128,000</span>
                <span className="text-white opacity-80">/2ヶ月</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>週3回のパーソナルトレーニング</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>詳細な食事指導・アドバイス</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>専用アプリでの24時間サポート</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>体組成測定・分析（毎週）</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>オリジナルプロテイン1つプレゼント</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg mt-8 transition duration-300 shadow-md">
                無料カウンセリングを予約
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-pink-100 p-6">
              <h3 className="text-2xl font-bold text-center">ライトプラン</h3>
              <div className="text-center mt-4">
                <span className="text-4xl font-bold">¥68,000</span>
                <span className="text-gray-600">/2ヶ月</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>週1回のパーソナルトレーニング</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>基本的な食事アドバイス</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>専用アプリでのサポート（平日）</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>体組成測定・分析（月2回）</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg mt-8 transition duration-300">
                無料カウンセリングを予約
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-center">期間限定キャンペーン</h3>
          <p className="text-center text-gray-600 mb-4">
            今月中にご入会の方は<span className="font-bold text-pink-500">入会金（通常¥30,000）が無料</span>になります！
          </p>
          <p className="text-center text-gray-600">
            さらに、友達紹介で<span className="font-bold text-pink-500">お二人とも¥10,000オフ</span>のスペシャル特典も実施中！
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;