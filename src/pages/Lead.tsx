import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Plus, Minus, Heart, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Lead() {
  const [activeSection, setActiveSection] = useState<string | null>('social');

  const sections = [
    {
      id: 'social',
      title: '社会活动',
      icon: <Users className="w-5 h-5" />,
      content: [
        {
          title: "前往凤冈县二中支教",
          desc: "前往贵州省凤冈县二中支教，作为高三临时班主任兼年级语文老师，带去知识和陪伴，用实际行动影响学生。",
          link: "https://mp.weixin.qq.com/s/NM-Xml6fisbZcrA5ifxXMw",
          linkText: "查看支教推文"
        },
        {
          title: "PPT 分享沙龙",
          desc: "以“相生相克，中庸守道”为活动主题，以阴阳五行为活动元素，涵盖破冰游戏、嘉宾分享等环节，分享内容涵盖AI、算命、求职妙招、足球产业等话题。",
          link: "https://mp.weixin.qq.com/s/Szvrrlaa-sCWhGUvRgI8cQ",
          linkText: "查看活动回顾"
        },
        {
          title: "志愿服务",
          desc: "积极投身各类志愿服务活动，累计志愿服务时长<strong class=\"text-ink font-semibold\">超160小时</strong>，在奉献中实现自我价值。"
        }
      ]
    },
    {
      id: 'campus',
      title: '校园生活',
      icon: <Award className="w-5 h-5" />,
      content: [
        {
          title: "武汉大学校学生会外联部职委-秘书组负责人",
          time: "2022.09 - 2024.06",
          desc: `对接<strong class="text-ink font-semibold">腾讯文档</strong>在校内举办简历大赛，负责前期活动宣传文案，保障活动顺利进行，约<strong class="text-ink font-semibold">200人</strong>参与初赛并提交有效文档。<br/>
          带领<strong class="text-ink font-semibold">7人小组</strong>，参与组织包含金秋艺术节在内的<strong class="text-ink font-semibold">8场</strong>学校大型活动，主负责前期活动宣传、流程审批、现场秩序安排及人员协调。<br/>
          与校园周边商家建联，拉取<strong class="text-ink font-semibold">2000元</strong>外联赞助经费。`
        },
        {
          title: "自强 Studio 品牌策划部成员",
          time: "2022.09 - 2023.06",
          desc: `主策划“<strong class="text-ink font-semibold">珞珈攻略4.0</strong>”品牌游园会，负责游园会主线及活动策划、前期宣发及现场协调，发布活动推文<strong class="text-ink font-semibold">1500+人</strong>阅读，线下<strong class="text-ink font-semibold">300+支</strong>队伍参加。`
        }
      ]
    },
    {
      id: 'honors',
      title: '荣誉及爱好',
      icon: <Heart className="w-5 h-5" />,
      content: [
        {
          type: 'list',
          title: '荣誉奖项',
          items: [
            "国家奖学金",
            "甲等奖学金",
            "阮立平奖学金",
            "黄训腾奖学金",
            "湖南省优秀学生干部",
            "武汉大学校级优秀学生干部",
            "武汉大学社会实践优秀个人"
          ]
        },
        {
          type: 'list',
          title: '个人爱好',
          items: [
            "网球训练 6 年",
            "钢琴业余十级"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-base text-ink font-sans selection:bg-accent/30">
      <nav className="fixed w-full top-0 px-[5vw] py-8 flex justify-between z-[100] bg-base/80 backdrop-blur-md border-b border-line/30">
        <Link to="/" className="flex items-center gap-2 font-medium tracking-wide hover:text-accent transition-colors hover-target">
          <ArrowLeft className="w-4 h-4" /> 返回主页
        </Link>
        <div className="font-serif italic text-sub">04 / Connection & Gravity</div>
      </nav>

      <main className="pt-[20vh] px-[5vw] pb-[10vh] max-w-[100rem] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Navigation / Interactive Menu */}
        <div className="lg:w-1/3 lg:sticky lg:top-[25vh] lg:h-fit z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-ink">社会与个体</h1>
            </div>
            
            <div className="pl-6 border-l-2 border-accent/30 relative mt-4 mb-12">
              <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0"></div>
              <p className="text-sm font-bold text-ink tracking-widest font-serif leading-relaxed">
                在集体中寻找共鸣，在热爱中积蓄能量。
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`group flex items-center justify-between p-4 rounded-[4px] border transition-all duration-300 text-left hover-target ${
                    activeSection === section.id 
                      ? 'bg-ink text-base border-ink shadow-lg scale-[1.02]' 
                      : 'bg-white/50 border-line/30 text-ink/70 hover:border-accent/50 hover:text-ink'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`p-2 rounded-full ${activeSection === section.id ? 'bg-white/10' : 'bg-line/10 group-hover:bg-accent/10'}`}>
                      {section.icon}
                    </span>
                    <span className="font-serif font-bold tracking-wide">{section.title}</span>
                  </div>
                  {activeSection === section.id && <ArrowUpRight className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Content Area */}
        <div className="lg:w-2/3 min-h-[60vh]">
          <AnimatePresence mode="wait">
            {sections.map((section) => (
              activeSection === section.id && (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col gap-8"
                >
                  {section.content.map((item: any, index: number) => (
                    <div 
                      key={index}
                      className="group relative bg-white/40 backdrop-blur-sm border border-line/20 rounded-[4px] p-6 md:p-8 hover:bg-white/80 transition-all duration-500 hover:shadow-md"
                    >
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                        <div className="absolute top-0 right-0 w-2 h-2 bg-accent/20 group-hover:bg-accent transition-colors duration-500"></div>
                      </div>

                      {item.type === 'list' ? (
                        <div>
                          <h3 className="text-lg font-serif font-bold text-ink mb-6 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-accent"></span>
                            {item.title}
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {item.items.map((subItem: string, i: number) => (
                              <span 
                                key={i}
                                className="px-4 py-2 bg-line/5 border border-line/20 rounded-full text-sm text-ink/80 hover:border-accent/30 hover:text-ink transition-colors cursor-default"
                              >
                                {subItem}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <h3 className="text-lg font-serif font-bold text-ink group-hover:text-accent transition-colors">
                              {item.title}
                            </h3>
                            {item.time && (
                              <span className="text-xs font-sans text-sub tracking-widest uppercase bg-line/10 px-2 py-1 rounded-sm">
                                {item.time}
                              </span>
                            )}
                          </div>
                          
                          <p 
                            className="text-sm text-ink/80 leading-relaxed text-justify font-sans"
                            dangerouslySetInnerHTML={{ __html: item.desc }}
                          />
                          
                          {item.link && (
                            <div className="mt-2">
                              <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline hover-target uppercase tracking-wider"
                              >
                                {item.linkText || '查看详情'} <ArrowUpRight className="w-3 h-3" />
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

      </main>
    </div>
  );
}
