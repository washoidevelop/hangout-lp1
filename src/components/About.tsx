import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          遺伝子検査で自分の体質を知り、理想のカラダへ
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="女性が鏡の前で笑顔で服を選んでいる様子" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-16">
            <p className="text-xl leading-relaxed text-gray-600 mb-6">
              一生変わらない遺伝子の並びを知ることが、理想の自分への大きな一歩となります。あなたの生まれ持った体質を知り、それに合わせた食事や運動を行うことで効率的なカラダづくりが可能になります。
            </p>
            <p className="text-xl leading-relaxed text-gray-600 mb-6">
              「何度もダイエットに失敗している」「努力の成果が感じられない」そんな悩みを持つ方に、科学的根拠に基づいたアプローチをご提案します。
            </p>
            <div className="flex items-center mb-4">
              <CheckCircle className="text-pink-500 mr-3" size={24} />
              <span className="text-lg">遺伝子検査で自分の体質を科学的に解明</span>
            </div>
            <div className="flex items-center mb-4">
              <CheckCircle className="text-pink-500 mr-3" size={24} />
              <span className="text-lg">体質に合わせた食事・運動プランの提案</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-pink-500 mr-3" size={24} />
              <span className="text-lg">2ヶ月間の専門トレーナーによるサポート</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
