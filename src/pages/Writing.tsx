import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Writing() {
  const articles = [
    {
      title: "关于商业分析的底层逻辑思考",
      date: "2025.10",
      platform: "公众号",
      link: "#"
    },
    {
      title: "Vibe Coding：非技术背景如何独立开发产品",
      date: "2025.08",
      platform: "公众号",
      link: "#"
    },
    {
      title: "跨界学习的复利效应",
      date: "2025.05",
      platform: "公众号",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-base text-ink font-sans selection:bg-accent/30 px-[5vw] py-12 md:py-24">
      <nav className="mb-16 md:mb-24">
        <Link to="/" className="inline-flex items-center gap-2 text-ink/60 hover:text-accent transition-colors hover-target font-medium">
          <ArrowLeft className="w-4 h-4" /> 返回首页
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Writing & Thinking</h1>
          <p className="text-ink/60 text-sm md:text-base max-w-2xl leading-relaxed mb-16">
            记录我在商业、技术、美学与生活中的思考碎片。写作是我重塑认知、对抗熵增的重要方式。
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-line/30 hover:border-accent/50 transition-colors hover-target"
            >
              <div className="flex flex-col gap-2 mb-4 md:mb-0">
                <h2 className="text-xl md:text-2xl font-serif font-medium group-hover:text-accent transition-colors">
                  {article.title}
                </h2>
                <div className="flex items-center gap-4 text-xs font-sans text-ink/40 uppercase tracking-wider">
                  <span>{article.date}</span>
                  <span>{article.platform}</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-line/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300 shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </main>
    </div>
  );
}
