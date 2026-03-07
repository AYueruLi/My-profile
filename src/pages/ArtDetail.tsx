import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function ArtDetail() {
  const { id } = useParams();

  // Mock data fetching based on ID. In a real app, this would come from a CMS or data file.
  const contentMap: Record<string, any> = {
    yunhu: {
      title: "云胡布喜",
      subtitle: "Z世代非遗布艺文创品牌 · 品牌创始人",
      heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
      paragraphs: [
        "在非遗传承人工艺理念指引下，我们团队深入挖掘传统布艺的文化内核，结合现代年轻人的审美趋势，开发了 4 项樱花主题文创产品。",
        "我主导了从产品设计、供应链对接到多媒介宣发与销售渠道拓展的全流程。通过小红书、抖音等社交媒体矩阵的精准营销，我们成功实现了 20000+ 的价值转化。",
        "这个项目不仅让我获得了“互联网+”校赛三等奖及“诗予杯”文创设计大赛二等奖，更重要的是，它让我深刻理解了文化与商业结合的巨大潜力。"
      ],
      inlineImage: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1600&auto=format&fit=crop",
      conclusion: "未来，我们将继续探索更多非遗技艺的现代化表达，让传统文化在Z世代中焕发新的生机。"
    },
    design: {
      title: "平面设计与视觉传达",
      subtitle: "独立设计师",
      heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1600&auto=format&fit=crop",
      paragraphs: [
        "设计不仅仅是视觉的呈现，更是信息的有效传达。我熟练使用 Photoshop (PS) 与 Premiere (PR)，致力于将抽象的概念转化为直观的视觉语言。",
        "在校园期间，我为多个大型活动、创业品牌制作了高质量的视觉物料、海报与宣传视频。从前期的创意构思、草图绘制，到后期的排版设计、色彩搭配，我始终坚持对细节的极致追求。",
        "每一次设计都是一次与受众的对话，我希望通过我的作品，能够准确地传递品牌价值与活动精神。"
      ],
      inlineImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop",
      conclusion: "设计是一门不断学习的艺术，我将持续探索新的视觉表达方式，为更多项目注入美学力量。"
    },
    writing: {
      title: "文字专栏与自媒体",
      subtitle: "微信公众号主理人",
      heroImage: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=1600&auto=format&fit=crop",
      paragraphs: [
        "文字是我记录生活、沉淀认知的重要方式。我运营个人微信公众号，定期发布关于生活思考、行业观察与随笔的文章。",
        "在这个信息碎片化的时代，我坚持进行深度阅读与长图文创作。通过文字输出，我不仅锻炼了自己的逻辑思维与表达能力，也结识了许多志同道合的朋友。",
        "我的文章涵盖了商业分析、科技趋势、人文艺术等多个领域，展现了我多维度的思考力与共情力。"
      ],
      inlineImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop",
      conclusion: "我相信文字的力量，它能够跨越时空，触达人心。我将继续用文字记录这个时代，分享我的见解与感悟。"
    }
  };

  const data = contentMap[id || 'yunhu'] || contentMap['yunhu'];

  return (
    <div className="min-h-screen bg-base text-ink font-sans selection:bg-accent/30">
      <nav className="fixed w-full top-0 px-[5vw] py-8 flex justify-between z-[100] bg-base/80 backdrop-blur-md border-b border-line/30">
        <Link to="/art" className="flex items-center gap-2 font-medium tracking-wide hover:text-accent transition-colors hover-target">
          <ArrowLeft className="w-4 h-4" /> 返回美学与创造
        </Link>
      </nav>

      <main className="pt-[20vh] px-[5vw] pb-[20vh] max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 text-ink">{data.title}</h1>
          <p className="text-2xl text-accent font-medium mb-16">{data.subtitle}</p>
          
          <div className="w-full aspect-[21/9] overflow-hidden rounded-[4px] mb-16 bg-line/20">
            <img 
              src={data.heroImage} 
              alt={data.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="prose prose-lg max-w-none text-ink opacity-90 leading-[2.2] text-justify text-lg space-y-8">
            {data.paragraphs.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
            
            <div className="w-full aspect-[16/9] overflow-hidden rounded-[4px] my-16 bg-line/20">
              <img 
                src={data.inlineImage} 
                alt={`${data.title} details`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="font-medium text-xl italic border-l-4 border-accent pl-6 py-2">{data.conclusion}</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
