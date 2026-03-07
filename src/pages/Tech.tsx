import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const techProjects = [
  {
    id: 'zaobao',
    num: '01',
    title: '社群主理人AI早报',
    role: '全栈开发',
    date: '2026.03',
    content: (
      <>
        <p className="mb-4"><strong className="font-semibold text-ink">运营痛点：</strong>主理人每天需手动浏览10+垂直媒体、筛选资讯并制作海报，每日耗时1小时左右，且产出内容质量难以标准化。</p>
        <p className="mb-4"><strong className="font-semibold text-ink">目标：</strong>构建一套“自动化采集+AI 智能总结+权限受控分发”的闭环系统。</p>
        <p className="mb-4"><strong className="font-semibold text-ink">数据流转：</strong>通过RSS订阅，实现全天候自动监控垂直领域动态，利用Supabase搭建后端，取代人工搜集。</p>
        <p className="mb-4"><strong className="font-semibold text-ink">AI 调优：</strong>对接豆包Seed2.0大模型，针对社群受众优化Prompt工程。根据领域不同，使用“第一性原理”将新闻原帖转化为可三段式标准化的早报结构。</p>
        <p className="mb-4"><strong className="font-semibold text-ink">商业化验证：</strong>实现基于邀请码的准入机制，通过数据库RLS权限策略实现用户分层，为后续会员制收费提供底层支持。</p>
        <p className="mb-0"><strong className="font-semibold text-ink">产品落地：</strong>在Vercel部署上线，实现100%自动化产出，人工干预程度为0，工作耗时缩短至2分钟内。</p>
      </>
    ),
    tags: 'VIBE CODING / LOVABLE / 社群运营',
    images: [
      '/images/zaobao/早报-2026-03-07.png',
      '/images/zaobao/早报1.png',
      '/images/zaobao/早报2.png'
    ],
    link: null
  },
  {
    id: 'vibe',
    num: '02',
    title: '财经资讯网页',
    role: '全栈开发',
    date: '2026.03',
    content: (
      <>
        <p className="mb-4"><strong className="font-semibold text-ink">学习痛点：</strong>针对小白难以理解财经术语及传导机制等痛点，通过Vibe Coding开发AI驱动的财经资讯平台。</p>
        <p className="mb-4"><strong className="font-semibold text-ink">目标：</strong>打造具备“自动化生产+降维解读+深度交互”能力的闭环产品，实现早间8:00准时、高质量的资讯交付。</p>
        <p className="mb-4"><strong className="font-semibold text-ink">自动化采集与生成：</strong>集成RSS订阅与豆包Seed 2.0大模型，实现每日共30则国内及海外财经资讯的抓取、AI摘要及解读生成。</p>
        <p className="mb-4"><strong className="font-semibold text-ink">解读体系：</strong>辅助“AI 问答助手”和“复制粘贴 AI 解读”功能，增强用户对站内外内容的解析能力。</p>
        <p className="mb-4"><strong className="font-semibold text-ink">用户留存：</strong>搭建收藏、划线及笔记功能，将单向的信息获取转变为双向的学习沉淀，显著提升用户粘性。</p>
        <p className="mb-0"><strong className="font-semibold text-ink">项目产出：</strong>实现了财经资讯从采集到解读的全链路自动化，大幅降低了用户的金融知识获取门槛。</p>
      </>
    ),
    tags: 'Vibe Coding / Minimax Agent / 财经新闻',
    images: [
      '/images/xiaobai/IMG_1296.jpg',
      '/images/xiaobai/IMG_1298.jpg',
      '/images/xiaobai/IMG_1299.jpg',
      '/images/xiaobai/IMG_1300.jpg'
    ],
    link: null
  },
  {
    id: 'research',
    num: '03',
    title: '国家社科基金项目',
    role: '助理研究员',
    date: '2024.12 - 2025.04',
    content: (
      <>
        <p className="mb-4"><strong className="font-semibold text-base">方向探索：</strong>探索企业供应链视角下的网络安全风险管理的溢出效应，研究企业实施网安风险管理是否会对上下游企业的经营绩效、客户集中度等各方面产生影响，但溢出效应由于上下游已上市企业样本量不足导致结果并不显著。</p>
        <p className="mb-0"><strong className="font-semibold text-base">数据支撑：</strong>为保证网安风险管理数据库结果精确性，抽样1%的企业核对其实施网安风险管理的年份与行为，并使用Stata对53111条数据进行清洗整理，数据表明实施网络安全风险管理的企业数量逐年递增且在2019-2020年增长最多。</p>
      </>
    ),
    tags: 'Stata / 数据分析 / 计量模型',
    images: [],
    link: null
  },
  {
    id: 'mcm',
    num: '04',
    title: '美国大学生数学建模竞赛',
    role: 'Honorable Mention',
    date: '2024.01 - 2024.02',
    content: (
      <>
        <p className="mb-0">通过设计<strong className="font-semibold text-base">跨学科解决方案</strong>以遏制全球非法野生动物贸易。首先使用 <strong className="font-semibold text-base">AHP-EWM</strong> 定位方案目标客户，并构建 <strong className="font-semibold text-base">DNA 追踪</strong>、<strong className="font-semibold text-base">计算机犯罪预测</strong>、<strong className="font-semibold text-base">无人机执法系统</strong>及数据共享平台的端到端反盗猎方案，之后采用<strong className="font-semibold text-base">改进的遗传算法</strong>优化 <strong className="font-semibold text-base">BP 神经网络</strong>预测评估方案有效性，结果显示当项目投资增加 20%时，达到目标的概率为 <strong className="font-semibold text-base">87.9%</strong>，最终形成 8595 字英文论文。</p>
      </>
    ),
    tags: '遗传算法 / BP神经网络 / AHP-EWM',
    images: [],
    link: '/2416809.pdf'
  },
  {
    id: 'tudigong',
    num: '05',
    title: '智慧土地公实践项目',
    role: '创青春乡村振兴赛道国奖 / 负责人',
    date: '2023.10 - 2024.09',
    content: (
      <>
        <p className="mb-4"><strong className="font-semibold text-ink">目的：</strong>为解决基层数据统计技术粒度粗糙、维度单一、难以企及村级单位的问题，实现“遥感+经济”跨学科融合。</p>
        <p className="mb-4"><strong className="font-semibold text-ink">内容：</strong>团队使用遥感技术搭建“经济发展、农业生产、基础设施、社交媒体、医疗卫生”等在内的多维评估体系，并构建乡村综合评价指标，在3093个村庄数据集的检验中准确度高达89.72%，为政府和企业考察基层情况提供数据依据。</p>
        <p className="mb-0"><strong className="font-semibold text-ink">收获：</strong>通过提供POI密度等数据图为5省6地的乡村规划及企业网点建设提供参考，获得了地方统计局等部门的感谢信。</p>
      </>
    ),
    tags: '遥感+经济 / 数据驱动 / 武汉大学优秀社会实践项目',
    images: [
      '/images/tudigong/1.png',
      '/images/tudigong/2.png',
      '/images/tudigong/3.png',
      '/images/tudigong/4.png'
    ],
    link: '/%E6%99%BA%E6%85%A7%E5%9C%9F%E5%9C%B0%E5%85%AC-%E5%B7%B2%E5%8E%8B%E7%BC%A9.pdf'
  }
];

const HorizontalGallery = ({ images }: { images: string[] }) => {
  return (
    <div className="flex gap-6 overflow-x-auto custom-scrollbar pb-6 snap-x snap-mandatory">
      {images.map((img, idx) => (
        <motion.div 
          key={idx} 
          className="shrink-0 h-[50vh] md:h-[55vh] rounded-xl overflow-hidden shadow-lg border border-line/20 snap-center bg-white group"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={img} 
            alt={`Screenshot ${idx + 1}`} 
            className="h-full w-auto object-contain p-2 grayscale-[10%] group-hover:grayscale-0 transition-all duration-500" 
            referrerPolicy="no-referrer" 
          />
        </motion.div>
      ))}
    </div>
  );
};

const WideCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl group bg-[#e8e6e1] border border-line/20">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-contain p-4 md:p-8 grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-base/80 backdrop-blur flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:bg-base hover:text-accent z-10"><ChevronLeft /></button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-base/80 backdrop-blur flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:bg-base hover:text-accent z-10"><ChevronRight /></button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <div key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-accent w-6' : 'bg-ink/30'}`} />
        ))}
      </div>
    </div>
  );
};

export default function Tech() {
  return (
    <div className="min-h-screen bg-base text-ink font-sans selection:bg-accent/30 overflow-x-hidden">
      <nav className="fixed w-full top-0 px-[5vw] py-8 flex justify-between z-[100] bg-base/80 backdrop-blur-md border-b border-line/30">
        <Link to="/" className="flex items-center gap-2 font-medium tracking-wide hover:text-accent transition-colors hover-target">
          <ArrowLeft className="w-4 h-4" /> 返回主页
        </Link>
        <div className="font-serif italic text-sub">02 / Tech & Geek</div>
      </nav>

      <main className="pt-[15vh] pb-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-[5vw] max-w-7xl mx-auto mb-16"
        >
          <div className="flex items-center gap-4 md:gap-6 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-ink">科技与数据</h1>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-line/50 to-transparent max-w-xs hidden md:block"></div>
          </div>
          
          <div className="pl-6 md:pl-8 border-l-2 border-accent/30 relative mt-4">
            <div className="absolute -left-[5px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0"></div>
            <p className="text-sm font-bold text-ink tracking-widest font-serif leading-relaxed max-w-2xl">
              跨越学科边界，用代码和模型解决真实问题。
            </p>
          </div>
        </motion.div>

        {/* Project 1: Zaobao (Tall Images) */}
        <section className="px-[5vw] max-w-7xl mx-auto mb-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-end">
            <div className="lg:w-5/12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-accent font-serif italic text-xl">{techProjects[0].num}</span>
                  <h2 className="text-lg md:text-xl font-serif font-bold text-ink">{techProjects[0].title}</h2>
                </div>
                <div className="mb-6">
                  <span className="text-xs px-3 py-1 border border-line/50 rounded-full text-sub font-sans uppercase tracking-wider inline-block">{techProjects[0].tags}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-sans text-sub uppercase tracking-widest">{techProjects[0].role}</span>
                  <span className="text-sm font-sans text-accent">{techProjects[0].date}</span>
                </div>
                <div className="text-ink/75 text-sm leading-relaxed font-sans mb-8">
                  {techProjects[0].content}
                </div>
              </motion.div>
            </div>
            <div className="lg:w-7/12 w-full overflow-hidden">
               <HorizontalGallery images={techProjects[0].images} />
            </div>
          </div>
        </section>

        {/* Project 2: Vibe (Tall Images, Flipped Layout) */}
        <section className="px-[5vw] max-w-7xl mx-auto mb-24">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-end">
            <div className="lg:w-5/12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-accent font-serif italic text-xl">{techProjects[1].num}</span>
                  <h2 className="text-lg md:text-xl font-serif font-bold text-ink">{techProjects[1].title}</h2>
                </div>
                <div className="mb-6">
                  <span className="text-xs px-3 py-1 border border-line/50 rounded-full text-sub font-sans uppercase tracking-wider inline-block">{techProjects[1].tags}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-sans text-sub uppercase tracking-widest">{techProjects[1].role}</span>
                  <span className="text-sm font-sans text-accent">{techProjects[1].date}</span>
                </div>
                <div className="text-ink/75 text-sm leading-relaxed font-sans mb-8">
                  {techProjects[1].content}
                </div>
              </motion.div>
            </div>
            <div className="lg:w-7/12 w-full overflow-hidden">
               <HorizontalGallery images={techProjects[1].images} />
            </div>
          </div>
        </section>

        {/* Project 3 & 4: Research & MCM (Text Only, Dark Section) */}
        <section className="w-full bg-ink text-base py-24 mb-24 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="px-[5vw] max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              {/* Project 3 */}
              <motion.div 
                className="flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-accent font-serif italic text-xl">{techProjects[2].num}</span>
                  <h2 className="text-lg md:text-xl font-serif font-bold text-base">{techProjects[2].title}</h2>
                </div>
                <div className="flex justify-between items-center mb-8 border-b border-base/20 pb-4">
                  <span className="text-sm font-sans text-base/60 uppercase tracking-widest">{techProjects[2].role}</span>
                  <span className="text-sm font-sans text-accent">{techProjects[2].date}</span>
                </div>
                <div className="text-base/75 text-sm leading-relaxed font-sans mb-8">
                  {techProjects[2].content}
                </div>
                <div className="mt-auto pt-8">
                  <span className="text-xs px-4 py-2 border border-base/30 rounded-full text-base/60 font-sans uppercase tracking-wider inline-block">{techProjects[2].tags}</span>
                </div>
              </motion.div>

              {/* Project 4 */}
              <motion.div 
                className="flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-accent font-serif italic text-xl">{techProjects[3].num}</span>
                  <h2 className="text-lg md:text-xl font-serif font-bold text-base">{techProjects[3].title}</h2>
                </div>
                <div className="flex justify-between items-center mb-8 border-b border-base/20 pb-4">
                  <span className="text-sm font-sans text-base/60 uppercase tracking-widest">{techProjects[3].role}</span>
                  <span className="text-sm font-sans text-accent">{techProjects[3].date}</span>
                </div>
                <div className="text-base/75 text-sm leading-relaxed font-sans mb-8">
                  {techProjects[3].content}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-8">
                  <span className="text-xs px-4 py-2 border border-base/30 rounded-full text-base/60 font-sans uppercase tracking-wider">{techProjects[3].tags}</span>
                  {techProjects[3].link && (
                    <a href={techProjects[3].link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent text-sm font-bold hover:text-white transition-colors group">
                      View PDF <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project 5: Tudigong (Wide Images) */}
        <section className="px-[5vw] max-w-7xl mx-auto mb-20">
          <motion.div 
            className="flex flex-col gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="md:w-2/3">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-accent font-serif italic text-xl">{techProjects[4].num}</span>
                  <h2 className="text-lg md:text-xl font-serif font-bold text-ink">{techProjects[4].title}</h2>
                </div>
                <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-6">
                  <span className="text-sm font-sans text-sub uppercase tracking-widest">{techProjects[4].role}</span>
                  <span className="text-sm font-sans text-accent">{techProjects[4].date}</span>
                </div>
                <div className="text-ink/75 text-sm leading-relaxed font-sans">
                  {techProjects[4].content}
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
                <span className="text-xs px-4 py-2 border border-line/50 rounded-full text-sub font-sans uppercase tracking-wider">{techProjects[4].tags}</span>
                {techProjects[4].link && (
                  <a href={techProjects[4].link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-ink text-base rounded-full text-sm font-bold hover:bg-accent hover:text-ink transition-colors group">
                    View PDF <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
            
            <WideCarousel images={techProjects[4].images} />
          </motion.div>
        </section>
      </main>
    </div>
  );
}
