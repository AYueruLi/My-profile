import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const experiences = [
  {
    id: 'xibu',
    company: '西部证券股份有限公司',
    role: '投资银行部实习生 (华南总部)',
    date: '2025.10 - 2026.03',
    tags: '战略规划 / Pitch Book / 资本规划 / 行业分析',
    logo: 'https://logo.clearbit.com/westsecu.com.cn',
    details: [
      {
        title: '战略规划',
        desc: '深度参与某安全监测传感器企业五年期<strong class="text-ink font-semibold">战略规划</strong>项目，通过<strong class="text-ink font-semibold">行业研究</strong>与<strong class="text-ink font-semibold">竞品分析</strong>，协助撰写并最终形成 <strong class="text-ink font-semibold">8253 字</strong>的完整战略规划报告，为企业未来发展路径提供战略支撑。'
      },
      {
        title: 'Pitch Book撰写',
        desc: '协助推进某能源企业分拆赴港股<strong class="text-ink font-semibold">上市（IPO）</strong>项目，负责<strong class="text-ink font-semibold">核心业务梳理</strong>与<strong class="text-ink font-semibold">市场定位分析</strong>，深度参与并完成 <strong class="text-ink font-semibold">Pitch Book</strong> 的制作，完成 <strong class="text-ink font-semibold">4048 字</strong>报告。'
      },
      {
        title: '专题研究',
        desc: '独立开展关于<strong class="text-ink font-semibold">高校科技成果作价投资机制</strong>的专题研究，梳理相关<strong class="text-ink font-semibold">政策法规</strong>与<strong class="text-ink font-semibold">落地案例</strong>，撰写 <strong class="text-ink font-semibold">8909 字</strong>操作指南，并面向企业管理层进行<strong class="text-ink font-semibold">独立汇报</strong>与政策解读。'
      },
      {
        title: '产业咨询',
        desc: '参与地方政府<strong class="text-ink font-semibold">产业咨询</strong>项目，负责搜集<strong class="text-ink font-semibold">宏观经济</strong>与<strong class="text-ink font-semibold">产业数据</strong>，撰写冷水江市产业资本规划方案及湘西州特定行业分析报告，分别完成 <strong class="text-ink font-semibold">6037 字</strong>和 <strong class="text-ink font-semibold">7215 字</strong>研究报告，助力地方<strong class="text-ink font-semibold">产业升级</strong>与<strong class="text-ink font-semibold">资本招商</strong>。'
      }
    ]
  },
  {
    id: 'fangzheng',
    company: '方正证券股份有限公司',
    role: '行业研究部实习生 (策略组)',
    date: '2024.10 - 2024.12',
    tags: '标的整理 / 数据支撑 / 点评撰写',
    logo: 'https://logo.clearbit.com/foundersc.com',
    details: [
      {
        title: '标的筛选',
        desc: '聚焦<strong class="text-ink font-semibold">央国企改革</strong>与<strong class="text-ink font-semibold">并购重组</strong>主题，系统性搜集、梳理并筛选潜在的并购重组标的公司，为策略组提供<strong class="text-ink font-semibold">基础标的池</strong>与<strong class="text-ink font-semibold">投资逻辑支撑</strong>。'
      },
      {
        title: '数据处理',
        desc: '独立负责<strong class="text-ink font-semibold">公募基金持仓</strong>与观点的大数据处理，使用 Excel 等工具清洗并整合 <strong class="text-ink font-semibold">1764 份</strong>公募基金三季报文本数据，通过<strong class="text-ink font-semibold">词频统计</strong>与<strong class="text-ink font-semibold">语义分析</strong>，精准提炼机构投资者的<strong class="text-ink font-semibold">市场共识</strong>与未来<strong class="text-ink font-semibold">投资主线</strong>。'
      },
      {
        title: '行情复盘',
        desc: '持续跟踪 <strong class="text-ink font-semibold">A 股市场动态</strong>，每日复盘<strong class="text-ink font-semibold">大盘走势</strong>、<strong class="text-ink font-semibold">板块轮动</strong>及<strong class="text-ink font-semibold">资金流向</strong>，独立撰写并发布每日<strong class="text-ink font-semibold">市场行情点评</strong>，深度解析市场波动的<strong class="text-ink font-semibold">核心驱动因素</strong>与潜在逻辑。'
      }
    ]
  },
  {
    id: 'hunan',
    company: '中共湖南省委金融委员会办公室',
    role: '政策法规处实习生',
    date: '2024.01 - 2024.02',
    tags: '数据册编制 / 公文修订 / 流程推进',
    logo: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=400&auto=format&fit=crop',
    details: [
      {
        title: '数据统筹',
        desc: '<strong class="text-ink font-semibold">跨部门协同</strong>中国人民银行相关机构，统筹收集并整理全省各地级市银行、证券、保险等核心金融机构的<strong class="text-ink font-semibold">运行数据</strong>，深度参与并完成<strong class="text-ink font-semibold">年度金融数据册</strong>的编制与校对工作。'
      },
      {
        title: '公文修订',
        desc: '负责处室内部重要<strong class="text-ink font-semibold">政策文件</strong>与<strong class="text-ink font-semibold">行政资料</strong>的系统性梳理与<strong class="text-ink font-semibold">时间轴归档</strong>，协助起草并严谨修订各类官方<strong class="text-ink font-semibold">公文初稿</strong>共计 <strong class="text-ink font-semibold">8 篇</strong>，确保行文规范与政策传达的准确性。'
      },
      {
        title: '流程推进',
        desc: '深度参与省级<strong class="text-ink font-semibold">金融监管与服务体系</strong>的日常运转，协助处理<strong class="text-ink font-semibold">行政审批事项</strong>的材料初审与流程流转，有效提升处室<strong class="text-ink font-semibold">政务处理效率</strong>与<strong class="text-ink font-semibold">跨部门沟通</strong>顺畅度。'
      }
    ]
  }
];

export default function Biz() {
  const [expandedId, setExpandedId] = useState<string | null>('xibu');

  return (
    <div className="min-h-screen bg-base text-ink font-sans selection:bg-accent/30">
      <nav className="fixed w-full top-0 px-[5vw] py-8 flex justify-between z-[100] bg-base/80 backdrop-blur-md border-b border-line/30">
        <Link to="/" className="flex items-center gap-2 font-medium tracking-wide hover:text-accent transition-colors hover-target">
          <ArrowLeft className="w-4 h-4" /> 返回主页
        </Link>
        <div className="font-serif italic text-sub">01 / Business & Insight</div>
      </nav>

      <main className="pt-[15vh] px-[5vw] pb-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 md:gap-6 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-ink">商业与洞察</h1>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-line/50 to-transparent max-w-xs hidden md:block"></div>
          </div>
          
          <div className="pl-6 md:pl-8 border-l-2 border-accent/30 relative mt-4">
            <div className="absolute -left-[5px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0"></div>
            <p className="text-sm font-bold text-ink tracking-widest font-serif leading-relaxed max-w-2xl">
              聚焦行业研究与战略规划，以数据驱动商业决策。
            </p>
          </div>
        </motion.div>

        {/* Interactive Accordion for Experience */}
        <section className="flex flex-col md:flex-row gap-12 mb-24 relative">
          <div className="w-full md:w-3/4">
            <div className="md:hidden flex items-center gap-4 mb-6">
              <h2 className="text-lg font-serif font-medium text-ink/80 tracking-wider">实习经历</h2>
              <div className="h-[1px] flex-1 bg-line/20"></div>
            </div>
            <div className="border-t border-line/50">
              {experiences.map((exp) => (
                <div key={exp.id} className="border-b border-line/50 relative group">
                  <button 
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                    className="w-full py-6 flex items-center justify-between text-left hover-target relative z-10"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                      <h3 className={`text-lg md:text-xl font-serif font-bold transition-colors duration-500 ${expandedId === exp.id ? 'text-accent' : 'text-ink group-hover:text-ink/60'}`}>
                        {exp.company}
                      </h3>
                      <span className="text-sub font-sans text-xs tracking-widest uppercase">{exp.role}</span>
                    </div>
                    <div className="text-sub flex items-center gap-6">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="hidden md:block h-8 w-auto max-w-[120px] object-contain opacity-0 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0" 
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      {expandedId === exp.id ? <Minus className="w-6 h-6 text-accent shrink-0" /> : <Plus className="w-6 h-6 shrink-0" />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pl-6 md:pl-10 border-l border-dashed border-ink/20 ml-2 md:ml-4 relative mt-4">
                          <div className="absolute top-0 -left-[4px] w-2 h-2 rounded-full bg-accent/50"></div>
                          <p className="text-accent font-sans text-sm tracking-widest mb-8">{exp.date}</p>
                          <ul className="space-y-8 mb-10">
                            {exp.details.map((detail, i) => (
                              <li key={i} className="relative group/item">
                                <div className="absolute -left-[27.5px] md:-left-[43.5px] top-1.5 w-2 h-2 rounded-full bg-base border-2 border-ink/20 group-hover/item:border-accent transition-colors duration-300"></div>
                                <div className="flex flex-col gap-2">
                                  <div className="flex items-center gap-3">
                                    <h4 className="text-sm font-bold text-ink tracking-widest">{detail.title}</h4>
                                    <div className="h-[1px] w-6 bg-ink/10"></div>
                                  </div>
                                  <p 
                                    className="text-ink/75 text-sm leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: detail.desc }}
                                  />
                                </div>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {exp.tags.split(' / ').map((tag, i) => (
                              <span key={i} className="text-xs text-sub font-sans uppercase tracking-widest bg-ink/5 border border-ink/10 px-4 py-1.5 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block w-1/4">
            <div className="sticky top-[25vh] text-right">
              <h2 className="text-base font-serif font-bold text-ink/70 tracking-widest uppercase">实习经历</h2>
              <div className="w-8 h-[2px] bg-accent/40 ml-auto mt-3"></div>
            </div>
          </div>
        </section>

        {/* Key Project & Awards */}
        <section className="flex flex-col md:flex-row gap-12 mb-20 relative">
          <div className="w-full md:w-3/4 flex flex-col gap-12 items-start">
            
            {/* Horizontal Stacked Awards */}
            <div className="relative w-full flex flex-col md:flex-row items-start md:h-[450px]">
              {[
                {
                  title: <>全国高校商业精英挑战赛创新创业竞赛<br className="hidden md:block" />流通业经营模拟赛道</>,
                  date: '2024.11',
                  award: '核心成员 · 国家级一等奖',
                  desc: '通过模拟经营与对抗，在供应链管理、市场预测与资金运作中制定最优策略，最终实现企业效益最大化。',
                  tags: ['沙盘模拟', '供应链经营'],
                  link: null
                },
                {
                  title: '正大杯市场调研与分析大赛',
                  date: '2024.01 - 2024.04',
                  award: '核心成员 · 国家级三等奖',
                  desc: '聚焦研学旅游行业热点，通过实地考察与问卷调查，运用 Logit 回归、SEM 等量化驱动因素，提出四维优化路径，最终形成 2.4 万字深度调研报告。',
                  tags: ['Logit回归', 'SEM模型'],
                  link: '/zhengda-report.pdf'
                },
                {
                  title: <>全国高校商业精英挑战赛国际贸易竞赛<br className="hidden md:block" />跨境电商赛道</>,
                  date: '2023.11',
                  award: '核心成员 · 国家级二等奖',
                  desc: '通过推介中医药食同源的理念，品牌重点推出三款产品：胡麻油、藤茶和山楂条，并计划通过亚马逊平台和社交媒体结合的方式，将中国的健康养生文化推广至欧洲市场。',
                  tags: ['品牌出海', '跨境电商'],
                  link: '/Heal_Cuisine_Europe_Plan.pdf'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full md:w-[48%] shrink-0 bg-white/80 backdrop-blur-xl border border-line/20 rounded-2xl px-6 pt-6 pb-4 md:px-8 md:pt-8 md:pb-5 relative overflow-hidden group hover:bg-white transition-all duration-500 shadow-sm hover:shadow-lg flex flex-col justify-between min-h-[320px] md:min-h-[380px] ${index !== 0 ? 'mt-6 md:mt-0 md:-ml-32' : ''}`}
                  style={{ zIndex: 30 - index }}
                  whileHover={{ 
                    y: -10, 
                    zIndex: 40,
                    scale: 1.02
                  }}
                >
                  {/* Decorative background element */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500 z-0"></div>
                  <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-ink/5 rounded-full blur-xl group-hover:bg-ink/10 transition-colors duration-500 z-0"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4 h-6">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                          <span className="text-[10px] font-sans tracking-widest text-accent uppercase bg-accent/5 px-2 py-1 rounded-sm border border-accent/10">Competition</span>
                        </div>
                        <span className="text-[10px] text-sub font-sans tracking-widest">{item.date}</span>
                      </div>
                      
                      <h3 className="text-base md:text-lg font-serif font-bold text-ink mb-2 group-hover:text-accent transition-colors h-[3.5rem] flex items-center">
                        <span>{item.title}</span>
                      </h3>
                      <p className="text-[11px] text-sub mb-4 font-medium h-4 flex items-center">{item.award}</p>
                      
                      <p className="text-ink/70 text-xs leading-relaxed mb-6 h-[4.5rem] overflow-hidden text-justify">
                        {item.desc}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-line/30 mt-auto">
                      <div className="flex gap-2 flex-wrap">
                        {item.tags.map((tag, i) => (
                          <span key={i} className="text-[9px] text-sub font-sans uppercase tracking-wider bg-base px-2 py-1 rounded-sm border border-line/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-ink text-white hover:bg-accent hover:scale-110 transition-all duration-300 hover-target shadow-md shrink-0 ml-2"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="hidden md:block w-1/4">
            <div className="sticky top-[25vh] text-right">
              <h2 className="text-base font-serif font-bold text-ink/70 tracking-widest uppercase">相关成果</h2>
              <div className="w-8 h-[2px] bg-accent/40 ml-auto mt-3"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
