import React from 'react';
import { Heart } from 'lucide-react';

const SafetyPoints = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          女性が安心して通える理由
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-16 mb-10 md:mb-0 order-2 md:order-1">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Heart className="text-pink-500 mr-2" size={20} />
                女性専用の空間
              </h3>
              <p className="text-gray-600">
                完全個室のプライベート空間で、周りの目を気にせずトレーニングに集中できます。女性専用だから安心して通えます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Heart className="text-pink-500 mr-2" size={20} />
                女性トレーナーが担当
              </h3>
              <p className="text-gray-600">
                全てのトレーナーが女性。女性特有の悩みや不安も相談しやすく、親身になってサポートします。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Heart className="text-pink-500 mr-2" size={20} />
                清潔でおしゃれな設備
              </h3>
              <p className="text-gray-600">
                シャワールームやパウダールームも完備。トレーニング後もすぐに外出できる環境を整えています。
              </p>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="女性専用の綺麗な個室トレーニングルーム" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyPoints;