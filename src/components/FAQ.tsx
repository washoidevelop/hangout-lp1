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
              <span className="text-lg font-semibold">遺伝子検査はどのように行うのですか？</span>
            </button>
            <div className="px-6 pb-6">
              <p className="text-gray-600">
                専用の綿棒で頬の内側の粘膜を採取するだけの簡単な検査です。痛みは全くなく、わずか5分程度で終了します。採取後は返送用封筒に入れてポストに投函するだけ。約3週間後に詳細な結果レポートをお届けします。
              </p>
            </div>
          </div>
          <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <button className="flex justify-between items-center w-full p-6 text-left">
              <span className="text-lg font-semibold">遺伝子検査で何がわかりますか？</span>
            </button>
            <div className="px-6 pb-6">
              <p className="text-gray-600">
                ダイエットに関連する3つの遺伝子（β3AR、β2AR、UCP1）を解析し、糖質代謝、タンパク質代謝、脂質代謝のリスクを判定します。これにより、あなたの体質を8つのタイプに分類し、最適な食事法や運動法をご提案します。
              </p>
            </div>
          </div>
          <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <button className="flex justify-between items-center w-full p-6 text-left">
              <span className="text-lg font-semibold">トレーニングはどのように行われますか？</span>
            </button>
            <div className="px-6 pb-6">
              <p className="text-gray-600">
                2ヶ月間で全16回（1回75分）のトレーニングセッションを行います。遺伝子検査の結果に基づき、あなたの体質に最適なトレーニングメニューを作成。専門トレーナーが丁寧に指導するので、運動初心者の方でも安心してご参加いただけます。
              </p>
            </div>
          </div>
          <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <button className="flex justify-between items-center w-full p-6 text-left">
              <span className="text-lg font-semibold">体質に合わない食事や運動をしていた場合はどうなりますか？</span>
            </button>
            <div className="px-6 pb-6">
              <p className="text-gray-600">
                体質に合わないダイエット法は効果が出にくいだけでなく、健康を害する可能性もあります。例えば、タンパク質代謝リスクがある方が極端な糖質制限をすると低血糖になりやすいなど。遺伝子検査で自分の体質を知ることで、効率的かつ健康的にダイエットを進めることができます。
              </p>
            </div>
          </div>
          <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <button className="flex justify-between items-center w-full p-6 text-left">
              <span className="text-lg font-semibold">遺伝子検査の結果は一生変わらないのですか？</span>
            </button>
            <div className="px-6 pb-6">
              <p className="text-gray-600">
                はい、遺伝子の並びは一生変わりません。一度検査を受ければ、その結果は一生涯有効です。ただし、現在のカラダは遺伝要因（20〜30%）と環境要因（70〜80%）で作られているため、適切な食事や運動を続けることで、遺伝的なリスクを克服することも可能です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
