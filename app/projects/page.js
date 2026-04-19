// app/projects/page.js
'use client';
import { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const timelineData = [
    {
      id: 1,
      period: '2024.01 - 2026.04',
      title: '营销数据中台建设',
      titleEn: 'Marketing Data Platform',
      company: '前程无忧',
      companyEn: '51job',
      desc: '基于阿里云 DataWorks 构建营销数据中台，支持日均亿级数据处理，实现数据资产统一管理和高效复用。',
      descEn: 'Built marketing data platform on Alibaba Cloud DataWorks, processing hundreds of millions of records daily.',
      tech: ['DataWorks', 'MaxCompute', 'Hologres', 'QuickBI'],
      result: '单报表运行时长从 1.5 小时优化至 20 分钟',
      resultEn: 'Optimized report runtime from 1.5h to 20min',
      gradient: 'from-blue-500 to-cyan-500',
      side: 'left'
    },
    {
      id: 2,
      period: '2022.04 - 2024.01',
      title: '药企数据平台',
      titleEn: 'Pharma Data Platform',
      company: '镁信健康',
      companyEn: 'MediTrust Health',
      desc: '为 100+ 药企构建统一数据平台，涵盖理赔、发票、处方等核心业务数据，支持 1.6 万 + 药房标签数据产出。',
      descEn: 'Built unified data platform for 100+ pharma companies, covering claims, invoices, and prescription data.',
      tech: ['Azkaban', 'StarRocks', 'Power BI', 'Shell'],
      result: '构建可复用数据模型，效率提升 50%',
      resultEn: 'Reusable data model, 50% efficiency improvement',
      gradient: 'from-purple-500 to-pink-500',
      side: 'right'
    },
    {
      id: 3,
      period: '2021.03 - 2022.04',
      title: '新能源汽车数据体系',
      titleEn: 'NEV Data System',
      company: '数跑科技',
      companyEn: 'Shupao Technology',
      desc: '构建新能源汽车全生命周期数据报表体系，形成 3 大明细宽表，为总部、区域、经销商提供数字化营销支持。',
      descEn: 'Built full-lifecycle data reporting system for NEV, creating 3 major detail tables.',
      tech: ['DataWorks', 'Hologres', 'OSS', 'Tableau'],
      result: '形成 3 大明细宽表，支持数字化营销',
      resultEn: '3 major detail tables supporting digital marketing',
      gradient: 'from-green-500 to-emerald-500',
      side: 'left'
    },
    {
      id: 4,
      period: '2019.07 - 2021.03',
      title: '用户画像数仓',
      titleEn: 'User Persona Warehouse',
      company: '仙豆智能',
      companyEn: 'Xian Dou Intelligent',
      desc: '基于 CDH 生态构建用户画像标准数仓，每日处理用户行为数据，支撑运营精准推送。',
      descEn: 'Built user persona data warehouse on CDH, processing daily user behavior data.',
      tech: ['Hadoop', 'Hive', 'DataX', 'Shell'],
      result: '支撑运营精准推送',
      resultEn: 'Supported precision marketing campaigns',
      gradient: 'from-orange-500 to-red-500',
      side: 'right'
    }
  ];

  const [lang, setLang] = useState('zh');

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">
      {/* 背景文字 */}
      <div className="bg-watermark left">EDUCATION</div>
      <div className="bg-watermark right">WORK</div>

      {/* 顶部导航栏 */}
      <div className="fixed top-6 left-0 right-0 z-50 px-4">
        <div className="glass rounded-full max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </Link>
          <h1 className="text-xl font-semibold gradient-text">Avery's Journey</h1>
          <button
            onClick={() => setLang(prev => prev === 'zh' ? 'en' : 'zh')}
            className="lang-toggle"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </div>

      {/* 主内容区 - 时间线 */}
      <main className="pt-32 pb-20 px-4">
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {timelineData.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot"></div>

              <div
                className={`timeline-content ${item.side} ${selectedProject === item.id ? 'selected' : ''}`}
                onClick={() => setSelectedProject(selectedProject === item.id ? null : item.id)}
              >
                <div className="timeline-period">{item.period}</div>
                <h3 className="timeline-title">{lang === 'zh' ? item.title : item.titleEn}</h3>
                <div className="timeline-company">{lang === 'zh' ? item.company : item.companyEn}</div>
                <p className="timeline-desc">
                  {lang === 'zh' ? item.desc : item.descEn}
                </p>
                <div className={`timeline-tech ${item.side}`}>
                  {item.tech.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
                {selectedProject === item.id && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-sm text-white/70">
                      🎯 {lang === 'zh' ? '成果：' : 'Result: '}
                      {lang === 'zh' ? item.result : item.resultEn}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 页脚 */}
      <footer className="text-center py-8 text-white/40 text-sm font-light">
        <p>© {new Date().getFullYear()} 张丽娜。Made with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}
