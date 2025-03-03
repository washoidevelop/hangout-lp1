import { Heart } from 'lucide-react';

const SafetyPoints = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          遺伝子検査で分かる3つの体質
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-16 mb-10 md:mb-0 order-2 md:order-1">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Heart className="text-pink-500 mr-2" size={20} />
                糖質代謝リスク（β3AR）
              </h3>
              <p className="text-gray-600">
                糖質の代謝が苦手で、余った糖が内臓脂肪として蓄積されやすい体質です。ウエスト周りから太りやすく、生活習慣病のリスクも。適切な糖質コントロールが重要です。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Heart className="text-pink-500 mr-2" size={20} />
                タンパク質リスク（β2AR）
              </h3>
              <p className="text-gray-600">
                タンパク質の分解が早く、筋肉がつきにくい体質です。基礎代謝が高いため糖や脂肪の分解は得意ですが、筋肉不足になりやすく、ぷよぷよとした体型になりがちです。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Heart className="text-pink-500 mr-2" size={20} />
                脂質代謝リスク（UCP1）
              </h3>
              <p className="text-gray-600">
                脂肪を燃焼させる効率が悪く、皮下脂肪が蓄積されやすい体質です。特に下半身に脂肪がつきやすく、基礎体温も低めになりがちです。体を温めることが重要です。
              </p>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1578496479273-878c39a9d5e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUU5JTgxJUJBJUU0JUJDJTlEJUU1JUFEJTkwfGVufDB8MHwwfHx8Mg%3D%3D" 
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
