// components/ExperienceSection.js
export default function ExperienceSection() {
  const experiences = [
    {
      company: "前程无忧",
      position: "大数据开发工程师",
      period: "2024.01 - 2026.04",
      responsibilities: [
        "负责营销活动B/C端数据全流程开发，基于Kafka+Flink构建实时数据入仓，处理日均亿级数据",
        "严格遵循ODS/DWD/DWS/ADS分层规范，完成数据清洗、去重、标准化、宽表聚合，统一业务口径",
        "通过QuickBI搭建看板并配置自动化邮件订阅，支撑业务日常复盘；高并发场景通过Hologres整库同步实现数据实时集成",
        "聚焦数仓建设、数据质量保障、SQL性能优化，将单报表运行时长从1.5小时优化至20分钟",
        "使用AI工具辅助提升编码效率，保障数据链路7×24小时稳定运行，数据准确率达99%"
      ],
      technologies: "阿里云生态（DataWorks、MaxCompute、QuickBI、Hologres、ES）、MySQL、Hive SQL、MongoDB"
    },
    {
      company: "镁信健康",
      position: "大数据开发工程师",
      period: "2022.04 - 2024.01",
      responsibilities: [
        "负责药企全业务线数据开发与数据中台建设，覆盖理赔、发票、处方、药房、用户等核心领域，支持100+药企项目、1.6万+药房标签数据稳定产出",
        "遵循标准数仓分层架构，完成全量/增量ETL加工，构建可复用数据模型，效率提升50%",
        "使用Azkaban完成日/周/月任务调度，通过Power BI报表工具交付，同时负责紧急提数、任务异常处理、脚本优化等工作",
        "将业务数据统一接入ODS层，构建DWD明细层、DWS公共聚合层、DIM维度表，最终通过ADS层输出业务报表，实现全链路数据规范化"
      ],
      technologies: "开源大数据平台（DataX、Azkaban、DBeaver、shell脚本）、PostgreSQL、StarRocks、MySQL"
    },
    {
      company: "数跑科技",
      position: "大数据开发工程师",
      period: "2021.03 - 2022.04",
      responsibilities: [
        "负责新能源汽车ToB/ToC全链路数据报表体系建设，基于阿里云DataWorks+Hologres构建数据链路",
        "合并车辆全周期售前、售后、售中等数据，形成3大明细宽表，为总部、区域、经销商提供数字化营销支持",
        "负责数据准备、处理、迭代维护全流程，处理数据加解密/脱敏、离线/实时任务开发，支持tableau报表、大屏数据分析"
      ],
      technologies: "阿里云大数据生态（Hive SQL、DataWorks、Hologres、OSS）、MySQL、MongoDB"
    },
    {
      company: "仙豆智能",
      position: "大数据开发工程师",
      period: "2019.07 - 2021.03",
      responsibilities: [
        "基于CDH开源大数据生态，对用户标签、车主画像、行为分析数据开发，形成标准用户画像数仓",
        "每日用户流量、访问、反馈数据通过DataX接入Hive，按多维度清洗、建模、聚合，支撑运营精准推送",
        "使用shell调度、集群监控、Yarn资源优化，保障每日数据稳定产出，处理数据量过大、集群资源崩溃等问题"
      ],
      technologies: "CDH开源大数据Hadoop生态、HDFS、MySQL、DataX、Hive SQL"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">工作经历</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 backdrop-blur-lg hover:scale-[1.01] transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{exp.company}</h3>
                  <p className="text-xl text-blue-500">{exp.position}</p>
                </div>
                <span className="mt-2 md:mt-0 glass-effect rounded-full px-4 py-1 text-sm">
                  {exp.period}
                </span>
              </div>

              <h4 className="text-lg font-semibold mb-4">核心职责</h4>
              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-700">
                <h4 className="font-semibold mb-2">技术栈</h4>
                <p>{exp.technologies}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}