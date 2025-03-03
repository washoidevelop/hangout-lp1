import React from 'react';

const Results = () => {
  return (
    <section id="results" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          理想の体型へと導く確かな実績
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          多くの女性がわずか2ヶ月で劇的な変化を体感しています。
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
              <h3 className="font-semibold text-lg mb-2">Aさん (32歳)</h3>
              <p className="text-gray-600">
                「産後太りで悩んでいましたが、2ヶ月で-8kg達成！自分に自信が持てるようになりました。」
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
              <h3 className="font-semibold text-lg mb-2">Bさん (28歳)</h3>
              <p className="text-gray-600">
                「ダイエットに何度も失敗してきましたが、ここでは無理なく続けられ、理想の体型になれました！」
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
              <h3 className="font-semibold text-lg mb-2">Cさん (41歳)</h3>
              <p className="text-gray-600">
                「年齢とともに代謝が落ちて諦めていましたが、正しい方法で若々しい体を取り戻せました。」
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;