const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          遺伝子検査ダイエットの無料カウンセリング
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          あなたの体質や目標に合わせたプランをご提案します
        </p>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img 
              src="https://hangout-diet.com/wp-content/uploads/slider/11_s.jpeg" 
              alt="女性がトレーナーとリラックスしてカウンセリングを受けている様子" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <form className="bg-pink-50 p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">お名前</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="山田 花子"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">メールアドレス</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="example@email.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">電話番号</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="090-1234-5678"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="date" className="block text-gray-700 font-medium mb-2">希望日時</label>
                <input 
                  type="date" 
                  id="date" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">ご質問・ご要望（任意）</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="ご質問やご要望があればお書きください"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md"
              >
                無料カウンセリングを予約する
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
