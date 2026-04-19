// components/SkillsSection.js
export default function SkillsSection() {
  const skills = {
    "大数据平台": [
      "阿里云生态 (DataWorks、MaxCompute、Hologres、QuickBI、OSS)",
      "CDH开源生态 (Hadoop、Hive、Impala、HDFS)",
      "Elasticsearch",
      "StarRocks"
    ],
    "数据开发技术": [
      "SQL (MySQL、Hive SQL、pgSQL)",
      "Flink",
      "Kafka",
      "DataX",
      "Python (脏数据清洗)"
    ],
    "数据仓库架构": [
      "ODS/DWD/DWS/ADS/DIM 分层架构设计",
      "星型模型",
      "维度建模",
      "指标口径统一"
    ],
    "可视化与调度": [
      "QuickBI",
      "Tableau",
      "Power BI",
      "Azkaban",
      "DataWorks调度",
      "Linux/Shell脚本"
    ],
    "其他专业能力": [
      "数据清洗、多表关联、窗口函数",
      "SQL性能优化、数据权限管控",
      "自动化报表开发"
    ]
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">专业技能</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="glass-effect rounded-2xl p-6 backdrop-blur-lg hover:scale-[1.02] transition-all duration-500"
            >
              <h3 className="text-xl font-bold mb-4 text-center">{category}</h3>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}