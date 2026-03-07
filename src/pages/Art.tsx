import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Film, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Art() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-base text-ink font-sans selection:bg-accent/30 overflow-x-hidden">
      <nav className="fixed w-full top-0 px-[5vw] py-8 flex justify-between z-[100] bg-base/80 backdrop-blur-md border-b border-line/30">
        <Link to="/" className="flex items-center gap-2 font-medium tracking-wide hover:text-accent transition-colors hover-target">
          <ArrowLeft className="w-4 h-4" /> 返回主页
        </Link>
        <div className="font-serif italic text-sub">03 / Aesthetics & Creation</div>
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-ink">艺术与创造</h1>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-line/50 to-transparent max-w-xs hidden md:block"></div>
          </div>
          
          <div className="pl-6 md:pl-8 border-l-2 border-accent/30 relative mt-4">
            <div className="absolute -left-[5px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0"></div>
            <p className="text-sm font-bold text-ink tracking-widest font-serif leading-relaxed max-w-2xl">
              在商业与技术的边界之外，保持对美的感知。
            </p>
          </div>
        </motion.div>

        {/* Project 1: 云胡布喜 (Vertical Scroll) */}
        <section className="px-[5vw] max-w-7xl mx-auto mb-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div className="lg:w-1/3 lg:sticky lg:top-[30vh] h-fit z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-accent font-serif italic text-xl">01</span>
                  <h2 className="text-lg md:text-xl font-serif font-bold text-ink">云胡布喜</h2>
                </div>
                <p className="text-sm font-sans text-sub uppercase tracking-widest mb-8">品牌创始人</p>
                <p className="text-ink/75 text-sm leading-relaxed font-sans mb-8">
                  在非遗传承人工艺理念指引下，开发4项围绕非遗草木染的樱花文创产品。主导产品及品牌设计、公众号运营、多媒介宣发与销售，联合校团委及自强Studio，实现20000+价值转化，获”诗予杯“文创设计大赛二等奖。
                </p>
                <a 
                  href="https://mp.weixin.qq.com/s/kpgzRyPEpZwQ06F3bjNhAQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-ink/20 rounded-full text-sm font-bold text-ink hover:bg-ink hover:text-base transition-all duration-300 group"
                >
                  阅读品牌公众号推送 
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </motion.div>
            </div>
            
            <div className="lg:w-2/3 relative">
              <div className="absolute -inset-4 bg-alt/50 rounded-2xl -z-10"></div>
              <div className="w-full h-[70vh] overflow-y-auto custom-scrollbar rounded-xl shadow-2xl border border-line/20 bg-white relative group">
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-2 z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                  <MousePointer2 className="w-3 h-3 animate-bounce" /> 向下滑动浏览长图
                </div>
                <div className="flex flex-col w-full">
                  {[1, 2, 3, 4].map((num) => (
                    <img 
                      key={num}
                      src={`/images/yunhu/${num}.png`} 
                      alt={`云胡布喜长图片段 ${num}`}
                      className="w-full h-auto block m-0 p-0"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project 2: 平面设计与视频剪辑 (Collage) */}
        <section className="w-full bg-[#f8f7f4] py-24 border-y border-line/20 mb-24 relative overflow-hidden">
          {/* Decorative background text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-black text-line/10 whitespace-nowrap pointer-events-none select-none z-0">
            DESIGN
          </div>
          
          <div className="px-[5vw] max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <motion.div 
                className="md:w-1/2 relative h-[60vh] w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                {/* Collage Image 1 */}
                <motion.div 
                  className="absolute top-0 left-0 w-[80%] h-[70%] rounded-lg overflow-hidden shadow-2xl border-4 border-white z-10"
                  whileHover={{ scale: 1.02, zIndex: 30 }}
                  transition={{ duration: 0.4 }}
                >
                  <img src="/images/design/1.jpg" alt="Design 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
                
                {/* Collage Image 2 */}
                <motion.div 
                  className="absolute bottom-0 right-0 w-[70%] h-[60%] rounded-lg overflow-hidden shadow-xl border-4 border-white z-20"
                  whileHover={{ scale: 1.05, zIndex: 30 }}
                  transition={{ duration: 0.4 }}
                >
                  <img src="/images/design/2.png" alt="Design 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-accent font-serif italic text-xl">02</span>
                  <h2 className="text-lg md:text-xl font-serif font-bold text-ink">平面设计与视频剪辑</h2>
                </div>
                <div className="w-12 h-[2px] bg-accent/50 mb-8"></div>
                <p className="text-ink/75 text-sm leading-relaxed font-sans">
                  熟练使用Canva与剪映，为校园大型活动（如设计学院文创）、创业品牌（云胡布喜产品及品牌设计）制作高质量的视觉物料、海报与视频。
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project 3: 武汉大学珞青声乐团 (Filmstrip) */}
        <section className="w-full bg-[#111] text-[#eee] py-24 relative overflow-hidden">
          <div className="px-[5vw] max-w-7xl mx-auto mb-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-8"
            >
              <div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-accent font-serif italic text-xl">03</span>
                  <h2 className="text-lg md:text-xl font-serif font-bold text-white">武汉大学珞青声乐团</h2>
                </div>
                <p className="text-sm font-sans text-white/50 uppercase tracking-widest mb-6">副团长 / 主唱</p>
                <p className="text-white/75 text-sm leading-relaxed max-w-xl font-sans">
                  受邀主唱湖北团省委创青春大赛主题曲、武汉大学 130 周年校庆大会主唱、武汉大学 22 级开学典礼主唱。用歌声传递力量。
                </p>
              </div>
              
              <a 
                href="https://v.douyin.com/NO1uXNmD5Xw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-sm font-bold text-white hover:bg-white hover:text-black transition-all duration-300 group whitespace-nowrap"
              >
                <Film className="w-4 h-4" /> 观看视频切片
              </a>
            </motion.div>
          </div>

          {/* Horizontal Scrolling Filmstrip */}
          <div className="w-full overflow-x-auto custom-scrollbar pb-8 pt-4 px-[5vw] snap-x snap-mandatory">
            <div className="flex gap-8 w-max">
              {[1, 2, 3, 4, 5].map((num) => (
                <motion.div 
                  key={num}
                  className="relative h-[40vh] md:h-[50vh] aspect-[4/3] shrink-0 snap-center rounded-sm overflow-hidden border-[12px] border-[#1a1a1a] shadow-2xl group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: num * 0.1 }}
                >
                  {/* Film perforations top */}
                  <div className="absolute top-0 left-0 right-0 h-3 flex justify-around items-center bg-[#1a1a1a] z-20">
                    {[...Array(10)].map((_, i) => (
                      <div key={`t-${i}`} className="w-2 h-1.5 bg-[#111] rounded-[1px]"></div>
                    ))}
                  </div>
                  
                  <img 
                    src={`/images/music/${num}.jpg`} 
                    alt={`声乐团 ${num}`}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Film perforations bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-3 flex justify-around items-center bg-[#1a1a1a] z-20">
                    {[...Array(10)].map((_, i) => (
                      <div key={`b-${i}`} className="w-2 h-1.5 bg-[#111] rounded-[1px]"></div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
