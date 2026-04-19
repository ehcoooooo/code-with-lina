'use client';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function Learning() {
  const tools = [
    { name: 'DataWorks', desc: '一站式大数据开发平台', icon: '🔧' },
    { name: 'MaxCompute', desc: '大规模分布式计算引擎', icon: '⚡' },
    { name: 'Flink', desc: '流处理框架', icon: '🌊' },
    { name: 'Kafka', desc: '分布式流处理平台', icon: '📨' },
    { name: 'QuickBI', desc: '商业分析工具', icon: '📊' },
    { name: '通义灵码', desc: 'AI 辅助编程工具', icon: '🤖' }
  ];

  const books = [
    { title: '《数据仓库工具箱》', author: 'Ralph Kimball', desc: '维度建模经典著作' },
    { title: '《大数据技术原理与应用》', author: '林子雨', desc: '大数据生态系统核心技术' },
    { title: '《Hadoop 权威指南》', author: 'Tom White', desc: 'Hadoop 生态系统核心技术' }
  ];

  const articles = [
    { title: '数据仓库分层设计最佳实践', desc: '探讨 ODS/DWD/DWS/ADS 分层架构的设计原则', status: '待发布' },
    { title: 'MaxCompute 性能优化实战', desc: 'SQL 优化和资源配置提升查询性能', status: '待发布' },
    { title: '实时数仓构建方案对比', desc: 'Lambda 架构和 Kappa 架构对比', status: '待发布' }
  ];

  return (
    <div className="min-h-screen text-white">
      <div className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="glass rounded-full max-w-2xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <ArrowLeftIcon className="w-5 h-5" />
          </Link>
          <span className="font-bold text-lg">AI Learning Library</span>
        </div>
      </div>

      <main className="pt-24 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text">AI Learning Library</h1>
            <p className="text-white/70">持续学习，不断进化</p>
          </div>

          {/* 工具 */}
          <section className="glass-card rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">🛠️ 常用工具</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool, idx) => (
                <div key={idx} className="glass p-5 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <h3 className="font-semibold">{tool.name}</h3>
                  <p className="text-white/70 text-sm">{tool.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 书籍 */}
          <section className="glass-card rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">📚 推荐书籍</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {books.map((book, idx) => (
                <div key={idx} className="glass p-5 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="text-2xl mb-2">📖</div>
                  <h3 className="font-semibold">{book.title}</h3>
                  <p className="text-white/60 text-sm mb-1">{book.author}</p>
                  <p className="text-white/70 text-sm">{book.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 文章 */}
          <section className="glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">📝 技术文章</h2>
            <div className="space-y-4">
              {articles.map((article, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold mb-1">{article.title}</h3>
                    <p className="text-white/70 text-sm">{article.desc}</p>
                  </div>
                  <span className="glass px-4 py-2 rounded-full text-xs bg-yellow-500/20">{article.status}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-white/50 text-sm mt-6">更多内容正在准备中...</p>
          </section>
        </div>
      </main>

      <footer className="text-center py-8 text-white/50 text-sm">
        <p>© {new Date().getFullYear()} 张丽娜。Made with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}