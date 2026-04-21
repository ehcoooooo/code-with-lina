// app/page.js
'use client';
import { useState, useEffect, useCallback } from 'react';
import { UserIcon, CodeBracketIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

// 翻译内容
const translations = {
  zh: {
    name: '张丽娜',
    title: '大数据开发工程师',
    subtitle: '',
    description: '精通阿里云 DataWorks、MaxCompute，擅长离线数仓建模、ETL 开发、性能调优。深耕市场营销广告商业化、新能源汽车数字化营销领域。',
    contact: {
      phone: '+86 184-3863-1368',
      email: '18438631368@163.com',
      location: '中国上海'
    },
    explore: '探索',
    strengths: '核心优势',
    skills: '专业技能',
    experience: '工作经历',
    experienceItems: [
      { company: '前程无忧', companyEn: '51job', position: '', period: '2024.01 - 2026.04', desc: '营销活动数据全流程开发，SQL 性能优化从 1.5 小时至 20 分钟' },
      { company: '镁信健康', companyEn: 'MediTrust Health', position: '', period: '2022.04 - 2024.01', desc: '药企数据中台建设，支持 100+ 药企项目，效率提升 50%' },
      { company: '数跑科技', companyEn: 'Supaur.com', position: '', period: '2021.03 - 2022.04', desc: '新能源汽车数据报表体系，形成 3 大明细宽表' },
      { company: '仙豆智能', companyEn: 'Bean Tech', position: '', period: '2019.07 - 2021.03', desc: '用户画像数仓建设，支撑运营精准推送' },
    ]
  },
  en: {
    name: 'Lina Zhang',
    title: 'Big Data Engineer',
    subtitle: '',
    description: 'Proficient in Alibaba Cloud DataWorks, MaxCompute. Expert in data warehouse modeling, ETL development, and performance tuning. Specialized in marketing advertising and new energy vehicle digital marketing.',
    contact: {
      phone: '+86 184-3863-1368',
      email: '18438631368@163.com',
      location: 'Shanghai, China'
    },
    explore: 'Explore',
    strengths: 'Core Strengths',
    skills: 'Professional Skills',
    experience: 'Work Experience',
    experienceItems: [
      { company: '51job', companyEn: '51job', position: '', period: '2024.01 - 2026.04', desc: 'Marketing campaign data development, optimized SQL performance from 1.5h to 20min' },
      { company: 'MediTrust Health', companyEn: 'MediTrust Health', position: '', period: '2022.04 - 2024.01', desc: 'Pharma data platform, supported 100+ pharma projects, 50% efficiency improvement' },
      { company: '数跑科技', companyEn: 'Supaur.com', position: '', period: '2021.03 - 2022.04', desc: 'New energy vehicle data reporting system, created 3 major detail tables' },
      { company: '仙豆智能', companyEn: 'Bean Tech', position: '', period: '2019.07 - 2021.03', desc: 'User persona data warehouse, supported precision marketing campaigns' },
    ]
  }
};

// 视差背景组件 - Aurora Mesh Gradient
function AuroraBackground() {
  return (
    <div className="aurora-container">
      <div className="aurora-orb aurora-orb-1"></div>
      <div className="aurora-orb aurora-orb-2"></div>
      <div className="aurora-orb aurora-orb-3"></div>
    </div>
  );
}

// 鼠标跟随光晕组件
function CursorGlow() {
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}

// 点击波纹组件
function ClickRipple() {
  const [ripples, setRipples] = useState([]);

  const handleClick = useCallback((e) => {
    const newRipple = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 800);
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [handleClick]);

  return (
    <>
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="click-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}
    </>
  );
}

// Tab 按钮组件
function TabButton({ active, onClick, icon: Icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`nav-button ${active ? 'active' : ''}`}
    >
      <Icon className="w-5 h-5 inline-block mr-1" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

// 联系方式图标按钮 - 带 hover 弹窗
function ContactIconButton({ icon: Icon, tooltipText, href }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <a
        href={href}
        className="contact-icon-btn"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <Icon className="w-5 h-5" />
      </a>
      {showTooltip && (
        <div className="contact-tooltip">
          <div className="tooltip-arrow"></div>
          <span className="tooltip-text">{tooltipText}</span>
        </div>
      )}
    </div>
  );
}

// 首页内容组件 - 左右分栏布局（参考图样式）
function SelfIntro({ onExploreClick, lang }) {
  const t = translations[lang];

  return (
    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 min-h-screen">
      {/* 左侧文字区域 */}
      <div className="flex-1 text-left animate-fade-in-left px-4 lg:pl-12">
        {/* 主标题 - 纤细大字 */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-3 tracking-tight">
          <span className="gradient-text">{t.name}</span>
        </h1>

        {/* 职业描述 */}
        <p className="text-xl md:text-2xl text-white/70 font-light mb-2">
          {t.title}
        </p>

        {/* 简介文字 */}
        <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg mb-8 font-light">
          {t.description}
        </p>

        {/* 联系方式图标组 */}
        <div className="flex items-center gap-4 mb-8">
          <ContactIconButton
            icon={PhoneIcon}
            tooltipText={t.contact.phone}
            href={`tel:${t.contact.phone}`}
          />
          <ContactIconButton
            icon={EnvelopeIcon}
            tooltipText={t.contact.email}
            href={`mailto:${t.contact.email}`}
          />
          <ContactIconButton
            icon={MapPinIcon}
            tooltipText={t.contact.location}
            href="https://maps.google.com/?q=Shanghai,China"
            target="_blank"
          />
        </div>

        {/* Explore 按钮 */}
        <button
          onClick={onExploreClick}
          className="explore-btn"
        >
          {t.explore}
          <span className="explore-arrow">→</span>
        </button>
      </div>

      {/* 右侧人像区域 */}
      <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-right px-4">
        <div className="portrait-container w-full max-w-md relative">
          <img
            src="/images/portrait.jpg"
            alt={t.name}
            className="w-full h-auto object-cover rounded-3xl"
            style={{ aspectRatio: '3/4' }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20 flex items-center justify-center text-6xl absolute inset-0 rounded-3xl" style={{ display: 'none' }}>
            👤
          </div>
        </div>
      </div>
    </div>
  );
}

// 核心优势组件
function CoreStrengths({ lang }) {
  const t = translations[lang];

  return (
    <div className="relative z-10 max-w-5xl mx-auto mt-32 animate-scale-in delay-300 px-4">
      <h2 className="text-3xl font-light text-center mb-12 gradient-text">✨ {t.strengths}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass p-8 rounded-2xl">
          <div className="text-3xl mb-3">🚀</div>
          <h3 className="font-medium mb-2">{lang === 'zh' ? '数据开发经验' : 'Data Development Experience'}</h3>
          <p className="text-white/60 text-sm font-light">{lang === 'zh' ? '6 年大数据开发经验，精通数仓分层建模、全链路 ETL 开发与 SQL 性能调优，具备从需求沟通、数据探查、分层设计到数据落地交付的完整实战能力；熟练掌握数据质量治理、任务运维与资源优化，保障日均亿级数据稳定产出。' : '6 years of big data development experience. Expert in data warehouse layered modeling, full-link ETL development, and SQL performance tuning. Proven track record from requirements gathering, data exploration, layered design to data delivery. Skilled in data quality governance, task operations, and resource optimization, ensuring stable daily output of hundreds of millions of records.'}</p>
        </div>
        <div className="glass p-8 rounded-2xl">
          <div className="text-3xl mb-3">🤖</div>
          <h3 className="font-medium mb-2">{lang === 'zh' ? 'AI 协同开发' : 'AI-Assisted Development'}</h3>
          <p className="text-white/60 text-sm font-light">{lang === 'zh' ? '精通 AI 辅助开发工具，显著提升需求交付效率，如 Claude Code、通义灵码。' : 'Proficient in AI-assisted development tools such as Claude Code and Tongyi Lingma, significantly improving requirement delivery efficiency.'}</p>
        </div>
      </div>
    </div>
  );
}

// 工作经历组件
function WorkExperience({ lang }) {
  const t = translations[lang];

  return (
    <div className="relative z-10 max-w-5xl mx-auto mt-16 mb-20 animate-scale-in delay-400 px-4">
      <h2 className="text-3xl font-light text-center mb-12 gradient-text">💼 {t.experience}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {t.experienceItems.map((job, idx) => (
          <div key={idx} className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-medium text-lg">{lang === 'zh' ? job.company : job.companyEn}</h3>
              </div>
              <span className="glass px-3 py-1 rounded-full text-xs text-white/50">{job.period}</span>
            </div>
            <p className="text-white/50 text-sm font-light">{job.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// 项目展示组件
function VibeCodingProjects({ lang }) {
  const projects = lang === 'zh' ? [
    {
      title: '人才数据服务',
      desc: '基于阿里云 DataWorks 构建营销数据中台，支持日均亿级数据处理，实现数据资产统一管理和高效复用',
      tech: ['DataWorks', 'MaxCompute', 'Hologres', 'QuickBI'],
      period: '2024.01 - 2026.04',
      result: '单报表运行时长从 1.5 小时优化至 20 分钟',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: '药企数据服务',
      desc: '为 100+ 药企构建统一数据平台，涵盖理赔、发票、处方等核心业务数据，支持 1.6 万 + 药房标签数据产出',
      tech: ['Azkaban', 'StarRocks', 'Power BI', 'Shell'],
      period: '2022.04 - 2024.01',
      result: '构建可复用数据模型，效率提升 50%',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: '新能源汽车销售数据服务',
      desc: '构建新能源汽车全生命周期数据报表体系，形成 3 大明细宽表，为总部、区域、经销商提供数字化营销支持',
      tech: ['DataWorks', 'Hologres', 'OSS', 'Tableau'],
      period: '2021.03 - 2022.04',
      result: '形成 3 大明细宽表，支持数字化营销',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: '新能源汽车智能座舱数据服务',
      desc: '基于 CDH 生态构建用户画像标准数仓，每日处理用户行为数据，支撑运营精准推送',
      tech: ['Hadoop', 'Hive', 'DataX', 'Shell'],
      period: '2019.07 - 2021.03',
      result: '支撑运营精准推送',
      gradient: 'from-orange-500 to-red-500'
    }
  ] : [
    {
      title: 'Talent Data Service',
      desc: 'Built marketing data platform on Alibaba Cloud DataWorks, processing hundreds of millions of records daily',
      tech: ['DataWorks', 'MaxCompute', 'Hologres', 'QuickBI'],
      period: '2024.01 - 2026.04',
      result: 'Optimized report runtime from 1.5h to 20min',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Pharma Data Service',
      desc: 'Built unified data platform for 100+ pharma companies, covering claims, invoices, and prescription data',
      tech: ['Azkaban', 'StarRocks', 'Power BI', 'Shell'],
      period: '2022.04 - 2024.01',
      result: 'Reusable data model, 50% efficiency improvement',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'NEV Sales Data Service',
      desc: 'Built full-lifecycle data reporting system for NEV, creating 3 major detail tables for HQ, regions, and dealers',
      tech: ['DataWorks', 'Hologres', 'OSS', 'Tableau'],
      period: '2021.03 - 2022.04',
      result: '3 major detail tables supporting digital marketing',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'NEV Smart Cockpit Data Service',
      desc: 'Built user persona data warehouse on CDH, processing daily user behavior data for precision marketing',
      tech: ['Hadoop', 'Hive', 'DataX', 'Shell'],
      period: '2019.07 - 2021.03',
      result: 'Supported precision marketing campaigns',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="relative z-10 space-y-8 animate-fade-in pt-20 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light mb-4 gradient-text">Vibe Coding Projects</h1>
        <p className="text-white/60 font-light">{lang === 'zh' ? '用代码创造价值，每个项目都是一次成长' : 'Creating value with code, every project is growth'}</p>
      </div>

      <div className="grid gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="glass-card rounded-3xl p-8 overflow-hidden relative">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}></div>
            <div className="flex flex-wrap justify-between items-start mb-4">
              <h2 className="text-2xl font-light">{project.title}</h2>
              <span className="glass px-4 py-2 rounded-full text-sm text-white/50">{project.period}</span>
            </div>
            <p className="text-white/60 mb-6 font-light">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="glass px-3 py-1 rounded-full text-xs text-white/50">{tech}</span>
              ))}
            </div>
            <div className="glass px-4 py-3 rounded-xl bg-white/5">
              <span className="text-sm text-white/70">🎯 {lang === 'zh' ? '成果：' : 'Result: '}{project.result}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 学习库组件
function AILearningLibrary({ lang }) {
  const tools = [
    { name: lang === 'zh' ? '阿里云大数据平台' : 'Alibaba Cloud Big Data Platform', desc: lang === 'zh' ? 'DataWorks + MaxCompute 一站式大数据开发平台' : 'DataWorks + MaxCompute one-stop platform', icon: '☁️' },
    { name: 'MapReduce', desc: lang === 'zh' ? '分布式批处理框架' : 'Distributed batch processing framework', icon: '📊' },
    { name: 'Flink', desc: lang === 'zh' ? '流处理框架' : 'Stream processing framework', icon: '🌊' },
    { name: 'Kafka', desc: lang === 'zh' ? '分布式流处理平台' : 'Distributed streaming platform', icon: '📨' },
    { name: 'QuickBI', desc: lang === 'zh' ? '商业分析工具' : 'Business analytics tool', icon: '📊' },
    { name: lang === 'zh' ? '通义灵码' : 'Tongyi Lingma', desc: lang === 'zh' ? 'AI 辅助编程工具' : 'AI-assisted coding tool', icon: '🤖' },
    { name: 'Claude Code', desc: lang === 'zh' ? 'AI 编程助手' : 'AI programming assistant', icon: '🤖' }
  ];

  const books = [
    { title: lang === 'zh' ? '《数据仓库工具箱》' : 'The Data Warehouse Toolkit', author: 'Ralph Kimball', desc: lang === 'zh' ? '维度建模经典著作' : 'Classic book on dimensional modeling' },
    { title: lang === 'zh' ? '《大数据技术原理与应用》' : 'Big Data Technology Principles and Applications', author: lang === 'zh' ? '林子雨' : 'Lin Ziyu', desc: lang === 'zh' ? '大数据生态系统核心技术' : 'Core technologies of big data ecosystem' },
    { title: lang === 'zh' ? '《Hadoop 权威指南》' : 'Hadoop: The Definitive Guide', author: 'Tom White', desc: lang === 'zh' ? 'Hadoop 生态系统核心技术' : 'Core technologies of Hadoop ecosystem' }
  ];

  const articles = [
    { title: lang === 'zh' ? '数据仓库分层设计最佳实践' : 'Data Warehouse Layered Design Best Practices', desc: lang === 'zh' ? '探讨 ODS/DWD/DWS/ADS 分层架构的设计原则' : 'Design principles of ODS/DWD/DWS/ADS layered architecture', status: lang === 'zh' ? '待发布' : 'Coming Soon' },
    { title: lang === 'zh' ? 'MaxCompute 性能优化实战' : 'MaxCompute Performance Optimization', desc: lang === 'zh' ? 'SQL 优化和资源配置提升查询性能' : 'SQL optimization and resource configuration', status: lang === 'zh' ? '待发布' : 'Coming Soon' },
    { title: lang === 'zh' ? '实时数仓构建方案对比' : 'Real-time Data Warehouse Comparison', desc: lang === 'zh' ? 'Lambda 架构和 Kappa 架构对比' : 'Comparison of Lambda and Kappa architecture', status: lang === 'zh' ? '待发布' : 'Coming Soon' }
  ];

  return (
    <div className="relative z-10 space-y-12 animate-fade-in pt-20 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light mb-4 gradient-text">AI Learning Library</h1>
        <p className="text-white/60 font-light">{lang === 'zh' ? '持续学习，不断进化' : 'Continuous learning, constant evolution'}</p>
      </div>

      <section className="glass-card rounded-3xl p-8">
        <h2 className="text-2xl font-light mb-6">🛠️ {lang === 'zh' ? '常用工具' : 'Tools'}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, idx) => (
            <div key={idx} className="glass p-5 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="text-2xl mb-2">{tool.icon}</div>
              <h3 className="font-medium">{tool.name}</h3>
              <p className="text-white/60 text-sm font-light">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card rounded-3xl p-8">
        <h2 className="text-2xl font-light mb-6">📚 {lang === 'zh' ? '推荐书籍' : 'Books'}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book, idx) => (
            <div key={idx} className="glass p-5 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="text-2xl mb-2">📖</div>
              <h3 className="font-medium">{book.title}</h3>
              <p className="text-white/50 text-sm font-light mb-1">{book.author}</p>
              <p className="text-white/60 text-sm font-light">{book.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card rounded-3xl p-8">
        <h2 className="text-2xl font-light mb-6">📝 {lang === 'zh' ? '技术文章' : 'Articles'}</h2>
        <div className="space-y-4">
          {articles.map((article, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl flex justify-between items-center">
              <div>
                <h3 className="font-medium mb-1">{article.title}</h3>
                <p className="text-white/60 text-sm font-light">{article.desc}</p>
              </div>
              <span className="glass px-4 py-2 rounded-full text-xs bg-yellow-500/20 text-white/60">{article.status}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-white/40 text-sm font-light mt-6">{lang === 'zh' ? '更多内容正在准备中...' : 'More content coming soon...'}</p>
      </section>
    </div>
  );
}

// 主页面组件
export default function Home() {
  const [activeTab, setActiveTab] = useState('intro');
  const [lang, setLang] = useState('zh');

  const handleExploreClick = () => {
    const strengthsSection = document.getElementById('core-strengths');
    if (strengthsSection) {
      strengthsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLang = () => {
    setLang(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <AuroraBackground />
      <CursorGlow />
      <ClickRipple />

      <header className="fixed top-6 left-0 right-0 z-50 px-4">
        <div className="glass rounded-full max-w-4xl mx-auto px-6 py-3 flex justify-center items-center gap-6">
          <div className="flex gap-1 items-center">
            <TabButton active={activeTab === 'intro'} onClick={() => setActiveTab('intro')} icon={UserIcon} label="Self Intro" />
            <TabButton active={activeTab === 'projects'} onClick={() => setActiveTab('projects')} icon={CodeBracketIcon} label="Projects" />
            <TabButton active={activeTab === 'learning'} onClick={() => setActiveTab('learning')} icon={BookOpenIcon} label="AI Library" />
          </div>

          <button onClick={toggleLang} className="lang-toggle">
            <GlobeAltIcon className="w-5 h-5" />
            <span>{lang === 'zh' ? 'EN' : '中文'}</span>
          </button>
        </div>
      </header>

      <main className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'intro' && (
            <>
              <SelfIntro onExploreClick={handleExploreClick} lang={lang} />
              <div id="core-strengths">
                <CoreStrengths lang={lang} />
              </div>
              <WorkExperience lang={lang} />
            </>
          )}
          {activeTab === 'projects' && <VibeCodingProjects lang={lang} />}
          {activeTab === 'learning' && <AILearningLibrary lang={lang} />}
        </div>
      </main>

      <footer className="relative z-10 text-center py-8 text-white/40 text-sm font-light">
        <p>© 2026 Lina Zhang. All rights reserved</p>
      </footer>
    </div>
  );
}
