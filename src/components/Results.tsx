import React from 'react';

const Results = () => {
  return (
    <section id="results" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          あなたの体質タイプを8つに分類
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          遺伝子検査の結果から、あなたに最適な食事・運動法をご提案します。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex">
              <div className="w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="ビフォー" 
                  className="h-full object-cover"
                />
              </div>
              <div className="w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="アフター" 
                  className="h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">リンゴ型</h3>
              <p className="text-gray-600">
                「糖質の代謝が苦手で内臓脂肪が蓄積しやすいタイプ。お腹ぽっこりになりやすく、糖質OFFダイエットが効果的です。」
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex">
              <div className="w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1517344908704-fb14e43a0a13?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="ビフォー" 
                  className="h-full object-cover"
                />
              </div>
              <div className="w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="アフター" 
                  className="h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">洋ナシ型</h3>
              <p className="text-gray-600">
                「脂質の代謝が苦手で皮下脂肪が蓄積しやすいタイプ。下半身太りになりやすく、低脂質ダイエットと体を温める運動が効果的です。」
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex">
              <div className="w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1517344800994-80b20463999c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="ビフォー" 
                  className="h-full object-cover"
                />
              </div>
              <div className="w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="アフター" 
                  className="h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">マスカット型</h3>
              <p className="text-gray-600">
                「糖質、脂質、タンパク質の全てにおいてリスクがないバランスタイプ。バランスの良い食事と適度な運動で理想の体型を維持できます。」
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
