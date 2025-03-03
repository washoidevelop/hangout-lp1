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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUUzJTgyJThBJUUzJTgyJTkzJUUzJTgxJTk0fGVufDB8MHwwfHx8Mg%3D%3D" 
              alt="リンゴ型体質" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">リンゴ型</h3>
              <p className="text-gray-600">
                「糖質の代謝が苦手で内臓脂肪が蓄積しやすいタイプ。お腹ぽっこりになりやすく、糖質OFFダイエットが効果的です。」
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542820242-a3699d4f2bfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUU2JUI0JThCJUU2JUEyJUE4fGVufDB8MHwwfHx8Mg%3D%3D" 
              alt="洋ナシ型体質" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">洋ナシ型</h3>
              <p className="text-gray-600">
                「脂質の代謝が苦手で皮下脂肪が蓄積しやすいタイプ。下半身太りになりやすく、低脂質ダイエットと体を温める運動が効果的です。」
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1610137208257-ab0def0c3bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGdyYXBlfGVufDB8MHwwfHx8Mg%3D%3D" 
              alt="マスカット型体質" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">マスカット型</h3>
              <p className="text-gray-600">
                「糖質、脂質、タンパク質の全てにおいてリスクがないバランスタイプ。バランスの良い食事と適度な運動で理想の体型を維持できます。」
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
              alt="バナナ型体質" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">バナナ型</h3>
              <p className="text-gray-600">
                「タンパク質の代謝が苦手で筋肉がつきにくいタイプ。全体的に細いが筋力が弱く、高タンパク質の食事と筋トレが効果的です。」
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1563288525-8f1ee0f874a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVsb258ZW58MHwwfDB8fHwy" 
              alt="メロン型体質" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">メロン型</h3>
              <p className="text-gray-600">
                「糖質と脂質の両方の代謝が苦手なタイプ。全体的に丸みを帯びやすく、低糖質低脂質の食事と有酸素運動が効果的です。」
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
              alt="パイナップル型体質" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">パイナップル型</h3>
              <p className="text-gray-600">
                「糖質とタンパク質の代謝が苦手なタイプ。上半身に脂肪がつきやすく、筋肉もつきにくい。バランスの取れた食事と全身運動が効果的です。」
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
              alt="オレンジ型体質" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">オレンジ型</h3>
              <p className="text-gray-600">
                「脂質とタンパク質の代謝が苦手なタイプ。下半身に脂肪がつきやすく、筋肉もつきにくい。低脂質高炭水化物の食事と下半身トレーニングが効果的です。」
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1596363505729-4190a9506133?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
              alt="ブドウ型体質" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">ブドウ型</h3>
              <p className="text-gray-600">
                「代謝は良いが食習慣が乱れやすいタイプ。不規則な生活で体型が崩れやすく、規則正しい食事と生活リズムの改善が効果的です。」
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
