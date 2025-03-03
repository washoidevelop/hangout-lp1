import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          毎日の生活に、輝きを取り戻しませんか？
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
              美しくなることで自信が持て、毎日が楽しくなる。それは単なる見た目の変化ではなく、あなた自身の内側からの輝きです。
            </p>
            <p className="text-xl leading-relaxed text-gray-600 mb-6">
              「着たい服が似合わない」「鏡を見るのが怖い」そんな悩みから解放されて、自分らしく輝く毎日を手に入れませんか？
            </p>
            <div className="flex items-center mb-4">
              <CheckCircle className="text-pink-500 mr-3" size={24} />
              <span className="text-lg">自分に自信が持てるようになる</span>
            </div>
            <div className="flex items-center mb-4">
              <CheckCircle className="text-pink-500 mr-3" size={24} />
              <span className="text-lg">健康的な生活習慣が身につく</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-pink-500 mr-3" size={24} />
              <span className="text-lg">ポジティブな気持ちで毎日を過ごせる</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;