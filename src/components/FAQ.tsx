import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          あなたの疑問にお答えします
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <button className="flex justify-between items-center w-full p-6 text-left">
              <span className="text-lg font-semibold">トレーニング経験がなくても大丈夫ですか？</span>
            </button>
            <div className="px-6 pb-6">
              <p className="text-gray-600">
                はい、まったく問題ありません。トレーニング未経験の方がほとんどです。一人ひとりのレベルに合わせたプログラムを作成し、基本的な動作から丁寧に指導します。
              </p>
            </div>
          </div>
          <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <button className="flex justify-between items-center w-full p-6 text-left">
              <span className="text-lg font-semibold">どのくらいの期間で効果が出ますか？</span>
            </button>
            <div className="px-6 pb-6">
              <p className="text-gray-600">
                個人差はありますが、多くの方が2週間程度で体の変化を実感し始めます。2ヶ月のプログラムを終えると、見た目にも明らかな変化が現れます。継続的なトレーニングと食事管理が重要です。
              </p>
            </div>
          </div>
          <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <button className="flex justify-between items-center w-full p-6 text-left">
              <span className="text-lg font-semibold">予約のキャンセルはできますか？</span>
            </button>
            <div className="px-6 pb-6">
              <p className="text-gray-600">
                24時間前までのキャンセルであれば、振替レッスンをご用意します。急な体調不良などの場合もできる限り対応しますので、お気軽にご連絡ください。
              </p>
            </div>
          </div>
          <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <button className="flex justify-between items-center w-full p-6 text-left">
              <span className="text-lg font-semibold">食事制限は厳しいですか？</span>
            </button>
            <div className="px-6 pb-6">
              <p className="text-gray-600">
                極端な食事制限は行いません。あなたの生活スタイルに合わせた、続けられる食事プランをご提案します。時には外食やお酒も楽しみながら、長期的に続けられる食習慣を身につけていただきます。
              </p>
            </div>
          </div>
          <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <button className="flex justify-between items-center w-full p-6 text-left">
              <span className="text-lg font-semibold">どんな服装で行けばいいですか？</span>
            </button>
            <div className="px-6 pb-6">
              <p className="text-gray-600">
                動きやすい服装であれば問題ありません。ウェアやシューズのレンタルも無料で行っていますので、手ぶらでお越しいただけます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;