// components/HeroSection.js
export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-lg hover:scale-[1.02] transition-transform duration-500">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            张丽娜
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            大数据开发工程师
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            6年数据开发经验，专注于数据仓库建设和大数据处理，致力于用数据驱动业务价值
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="glass-effect rounded-full px-6 py-2 backdrop-blur-sm">
              <span className="font-medium">6年经验</span>
            </div>
            <div className="glass-effect rounded-full px-6 py-2 backdrop-blur-sm">
              <span className="font-medium">可立即到岗</span>
            </div>
            <div className="glass-effect rounded-full px-6 py-2 backdrop-blur-sm">
              <span className="font-medium">上海</span>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:18438631368@163.com"
              className="glass-effect rounded-full px-6 py-3 font-medium hover:scale-105 transition-transform"
            >
              联系我
            </a>
            <a
              href="#experience"
              className="glass-effect rounded-full px-6 py-3 font-medium hover:scale-105 transition-transform"
            >
              查看项目
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}