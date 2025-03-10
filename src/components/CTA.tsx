const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          あなたの体質を知って、理想のカラダへ
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          遺伝子検査で分かる生まれ持った体質。<br />
          あなたに最適なダイエット方法で、効率的に理想のカラダを手に入れませんか？
        </p>
        <a href="#contact" className="inline-block bg-white text-pink-500 text-lg font-semibold px-8 py-4 rounded-full transition duration-300 shadow-lg transform hover:-translate-y-1">
          無料カウンセリングに申し込む
        </a>
      </div>
    </section>
  );
};

export default CTA;
