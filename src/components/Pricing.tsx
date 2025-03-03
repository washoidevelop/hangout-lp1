import { CheckCircle } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          遺伝子検査付きダイエットコース
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          あなたの体質に合わせた最適なダイエット方法で理想のカラダへ
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105 z-10">
            <div className="bg-pink-500 p-6 text-white">
              <h3 className="text-2xl font-bold text-center">料金プラン</h3>
              <div className="text-center mt-4">
                <span className="text-4xl font-bold">¥189,200</span>
                <span className="text-white opacity-80">/2ヶ月</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>遺伝子検査キット（3遺伝子解析）</span>
                </li>
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
                  <span>体組成測定・分析（毎週）</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>オリジナルサプリメント1つプレゼント</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg mt-8 transition duration-300 shadow-md">
                無料カウンセリングを予約
              </a>
            </div>
          </div>
        </div>
        {/* <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">期間限定キャンペーン</h3>
          <p className="text-center text-gray-600 mb-4">
            今月中にご入会の方は<span className="font-bold text-pink-500">入会金（通常¥30,000）が無料</span>になります！
          </p>
          <p className="text-center text-gray-600">
            さらに、友達紹介で<span className="font-bold text-pink-500">お二人とも¥15,000オフ</span>のスペシャル特典も実施中！
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;
