// components/AboutSection.js
export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">关于我</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 backdrop-blur-lg hover:scale-[1.02] transition-transform duration-500">
            <h3 className="text-2xl font-bold mb-6">基本信息</h3>
            <div className="space-y-4">
              <div className="flex">
                <span className="font-medium w-24">中文名:</span>
                <span>张丽娜</span>
              </div>
              <div className="flex">
                <span className="font-medium w-24">年龄:</span>
                <span>29岁</span>
              </div>
              <div className="flex">
                <span className="font-medium w-24">居住地:</span>
                <span>中国上海</span>
              </div>
              <div className="flex">
                <span className="font-medium w-24">工作经验:</span>
                <span>6年大数据开发经验</span>
              </div>
              <div className="flex">
                <span className="font-medium w-24">求职意向:</span>
                <span>数据仓库/大数据开发工程师</span>
              </div>
              <div className="flex">
                <span className="font-medium w-24">状态:</span>
                <span>可立即到岗</span>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-8 backdrop-blur-lg hover:scale-[1.02] transition-transform duration-500">
            <h3 className="text-2xl font-bold mb-6">联系方式</h3>
            <div className="space-y-4">
              <div className="flex">
                <span className="font-medium w-24">电话:</span>
                <span>+86 184-3863-1368</span>
              </div>
              <div className="flex">
                <span className="font-medium w-24">邮箱:</span>
                <span>18438631368@163.com</span>
              </div>
              <div className="flex">
                <span className="font-medium w-24">GitHub:</span>
                <a href="https://github.com/ehcooooo" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  github.com/ehcooooo
                </a>
              </div>
              <div className="flex">
                <span className="font-medium w-24">微信:</span>
                <span>zhangln27</span>
              </div>
              <div className="flex">
                <span className="font-medium w-24">技术博客:</span>
                <span>暂无</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 glass-effect rounded-2xl p-8 max-w-6xl mx-auto backdrop-blur-lg hover:scale-[1.02] transition-transform duration-500">
          <h3 className="text-2xl font-bold mb-6">核心优势</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <span>6年数据开发经验，精通阿里云 DataWorks、MaxCompute 大数据云生态，擅长离线数仓建模、ETL开发、性能调优、数据质量治理完整流程</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <span>深耕市场营销广告商业化、新能源汽车数字化营销领域，可独立完成从需求沟通到数据分层、结果落地交付的全流程</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <span>日均处理亿级数据，稳定支撑业务决策；熟练使用AI工具（通义灵码/Trae）辅助开发，提升研发效率，实现AI+协同开发</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}