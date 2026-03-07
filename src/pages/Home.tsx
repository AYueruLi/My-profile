import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, MessageCircle, BookOpen, Mail, ArrowRight, Phone, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="relative font-medium text-ink transition-colors hover:text-accent group">
    <span className="relative z-10">{children}</span>
    <span className="absolute bottom-[2px] left-0 w-full h-[8px] bg-accent/20 -z-10 rounded-sm group-hover:bg-accent/30 transition-colors" />
  </span>
);

export default function Home() {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 300], [0, -100]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const introY = useTransform(scrollY, [0, 400], [0, -50]);
  const introOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="min-h-screen bg-base text-ink font-sans selection:bg-accent/30 overflow-x-hidden">
      <nav className="fixed w-full top-0 px-[5vw] py-6 flex justify-end gap-8 z-[100] bg-base/80 backdrop-blur-md border-b border-line/10">
        {/* Navigation links can be added here if needed */}
      </nav>

      {/* Hero Section - Clean, Logical, Center-Radiating Layout */}
      <section className="min-h-[90vh] flex flex-col items-center justify-start pt-[6vh] md:pt-[8vh] px-[10vw] pb-[10vh] relative">
        
        {/* Background Decorative Elements (Optional, for depth) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />
        
        {/* High-end Design Elements: Vertical Line & Text */}
        <div className="hidden md:flex absolute left-[4vw] top-0 bottom-0 flex-col items-center z-0 opacity-40">
          <div className="w-[1px] h-[15vh] bg-ink/30"></div>
          <div 
            className="rotate-180 text-[10px] tracking-[0.3em] uppercase font-sans my-8 text-ink/60"
            style={{ writingMode: 'vertical-rl' }}
          >
            Portfolio 2026
          </div>
          <div className="w-[1px] flex-1 bg-ink/30"></div>
        </div>

        {/* Decorative Dots */}
        <div className="absolute top-[25%] right-[12%] w-2 h-2 rounded-full bg-accent/40 animate-pulse hidden md:block" />
        <div className="absolute bottom-[20%] left-[15%] w-1.5 h-1.5 rounded-full bg-ink/30 hidden md:block" />

        {/* Top: Title & Slogan */}
        <motion.div 
          style={{ y: titleY, opacity: titleOpacity }}
          className="flex flex-col items-center justify-center mt-4 mb-12 md:mt-8 md:mb-20 z-20 w-full px-4"
        >
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-serif text-ink/80 tracking-wider ml-2 md:ml-8 lg:ml-12 relative whitespace-nowrap"
            >
              <span className="italic text-accent font-medium text-4xl md:text-5xl lg:text-[64px]">Rationally</span>
              <span className="text-2xl md:text-3xl lg:text-[40px] ml-3 md:ml-4">deconstruct the world,</span>
              <span className="absolute left-full bottom-1 ml-4 text-lg md:text-xl font-serif text-ink/60 font-normal hidden md:inline-block">理性解构世界</span>
            </motion.div>
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="font-serif text-ink/80 tracking-wider ml-12 md:ml-32 lg:ml-64 relative whitespace-nowrap"
            >
              <span className="absolute right-full bottom-1 mr-4 text-lg md:text-xl font-serif text-ink/60 font-normal hidden md:inline-block">感性重塑体验</span>
              <span className="italic text-accent font-medium text-4xl md:text-5xl lg:text-[64px]">emotionally</span>
              <span className="text-2xl md:text-3xl lg:text-[40px] ml-3 md:ml-4">reshape the experience</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Middle: Image (Left) - Text & Socials (Right) */}
        <motion.div 
          style={{ y: introY, opacity: introOpacity }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full max-w-[1000px] z-20"
        >
          
          {/* Left: Organic Blob Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative shrink-0"
          >
            <motion.div
              animate={{
                borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.08)] border-4 border-base relative z-10 bg-line/10"
            >
              <img 
                src="https://raw.githubusercontent.com/AYueruLi/My-web/526b790a4ba966e7f641566f65dd3904e9d0d446/%E4%B8%AA%E4%BA%BA%E7%85%A7%E7%89%87.jpg" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale-[15%] scale-105 hover:grayscale-0 hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Subtle ring behind the blob */}
            <div className="absolute inset-[-10%] border border-line/20 rounded-full animate-[spin_20s_linear_infinite] -z-10" />
          </motion.div>

          {/* Right: Text Block & Socials */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start text-center md:text-left max-w-[650px]"
          >
            <p className="text-[13px] md:text-[15px] leading-[1.8] md:leading-[1.8] text-ink/80 font-light tracking-[0.05em]">
              你好！我是李玥儒。从<Highlight>武汉大学</Highlight>保研至<Highlight>复旦大学金融学</Highlight>。
              <br />
              致力于在<Highlight>商业的创新解读</Highlight>与<Highlight>技术的严密逻辑</Highlight>之间寻找最优解。
              <br />
              从在<Highlight>投行实习</Highlight>中主导撰写万字研究及战略规划报告、利用<Highlight>量化模型</Highlight>解决实际问题，到成立<Highlight>非遗文创品牌</Highlight>、基于日常生活的痛点<Highlight>全栈开发Vibe Coding产品</Highlight>到坚持<Highlight>艺术与文学创作</Highlight>，我始终保持对<Highlight>跨界学习</Highlight>的敏锐度。
            </p>
            
            {/* Social Links */}
            <div className="mt-8 flex flex-col gap-3 md:gap-4">
              <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
                <ContactLink icon={<Phone className="w-3.5 h-3.5" />} text="手机：18874182756" href="tel:18874182756" />
                <ContactLink icon={<MessageCircle className="w-3.5 h-3.5" />} text="微信：lyr18874182756" onClick={(e: any) => { e.preventDefault(); alert('微信号：lyr18874182756'); }} />
                <ContactLink icon={<PenTool className="w-3.5 h-3.5" />} text="个人公众号：玥蛙喝可乐" href="#" onClick={(e: any) => { e.preventDefault(); }} />
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
                <ContactLink icon={<Mail className="w-3.5 h-3.5" />} text="邮箱：805059573@qq.com" href="mailto:805059573@qq.com" />
                <ContactLink icon={<BookOpen className="w-3.5 h-3.5" />} text="小红书：917026775" href="https://xhslink.com/m/8dxfEUS49Ue" target="_blank" />
              </div>
            </div>
          </motion.div>

        </motion.div>

      </section>

      {/* Bento Grid Section - Wider, less whitespace */}
      <section id="facets" className="py-[5vh] w-full px-[2vw] md:px-[4vw] mx-auto pb-[15vh]">
        <div className="mb-12 overflow-hidden text-center md:text-left px-[2vw]">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-4xl text-ink"
          >
            经历切片 / Facets
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[250px] md:auto-rows-[350px] gap-3 md:gap-4">
          <BentoCard 
            to="/biz"
            className="md:col-span-12 lg:col-span-7"
            title="商业与洞察"
            tags={["Investment Banking", "Industry Research", "Strategy Planning"]}
            imgSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
          />
          <BentoCard 
            to="/tech"
            className="md:col-span-12 lg:col-span-5"
            title="科技与数据"
            tags={["Vibe Coding", "Data Driven", "Model Building"]}
            imgSrc="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop"
          />
          <BentoCard 
            to="/art"
            className="md:col-span-12 lg:col-span-5"
            title="艺术与创造"
            tags={["Intangible Heritage", "Entrepreneurship", "Artistic Activities"]}
            imgSrc="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1600&auto=format&fit=crop"
          />
          <BentoCard 
            to="/lead"
            className="md:col-span-12 lg:col-span-7"
            title="社会与个体"
            tags={["Leadership", "Volunteer", "Hobbies"]}
            imgSrc="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop"
          />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-line/30 text-center text-sub text-sm flex flex-col items-center justify-center">
        <p className="mb-4 font-serif">© 2026 Yueru Li. All rights reserved.</p>
        <div className="w-12 h-1 bg-accent rounded-full opacity-50"></div>
      </footer>
    </div>
  );
}

function ContactLink({ icon, text, href, onClick, target }: any) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="flex items-center gap-1.5 text-ink/60 text-xs font-sans tracking-widest transition-colors hover:text-accent hover-target"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

function BentoCard({ to, className, title, tags, imgSrc }: any) {
  return (
    <Link 
      to={to}
      className={`relative overflow-hidden rounded-[4px] flex flex-col justify-end p-8 md:p-10 text-white bg-black group hover-target ${className}`}
    >
      <img 
        src={imgSrc} 
        alt={title} 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] z-[1] group-hover:scale-110 group-hover:opacity-30"
        referrerPolicy="no-referrer"
      />
      <div className="relative z-[2] translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4 flex justify-between items-center">
          {title}
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
        </h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string, i: number) => (
            <span key={i} className="text-[10px] md:text-[0.65rem] px-3 py-1 border border-white/30 rounded-full backdrop-blur-sm uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
