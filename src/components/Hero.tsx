const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800 mb-4">
            <p>話題沸騰中！</p>
            <p className="text-pink-600 mt-2 md:mt-4">遺伝子検査付き</p>
            <p className="mt-2 md:mt-4">ダイエットコース</p>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            あなたの体質に合わせた最適なダイエット方法で理想のカラダへ
          </p>
          <a href="#contact" className="inline-block bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-4 rounded-full transition duration-300 shadow-lg transform hover:-translate-y-1">
            無料カウンセリングを申し込む
          </a>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://138185232.cdn6.editmysite.com/uploads/1/3/8/1/138185232/s608041418989070159_p2_i13_w1280.jpeg?width=2400&optimize=medium" 
            alt="女性がトレーナーとトレーニングしている様子" 
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
