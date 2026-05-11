/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Youtube, 
  Instagram, 
  ExternalLink, 
  Play, 
  Film, 
  Camera, 
  Monitor, 
  Scissors,
  ArrowRight,
  Tv,
  Star
} from "lucide-react";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts';

const SOCIAL_LINKS = [
  { 
    name: "YouTube", 
    url: "https://youtube.com/@esphoto-e9g", 
    icon: <Youtube className="w-5 h-5" />,
    label: "影音作品專區"
  },
  { 
    name: "Instagram", 
    icon: <Instagram className="w-5 h-5" />,
    url: "https://www.instagram.com/cboxun_0211",
    label: "生活點滴"
  },
  { 
    name: "Behance", 
    icon: <Tv className="w-5 h-5" />,
    url: "https://www.behance.net/evanchen30",
    label: "作品案例"
  }
];

const STAR_PROJECTS = [
  {
    title: "節目拍攝剪輯",
    category: "STAR PROJECT 01",
    image: "https://i.postimg.cc/FzQpSVX7/jie-tu-2026-05-12-04-30-55.png",
    id: "p1",
    desc: "專業節目錄製與後期剪輯，精準掌握訪談節奏與視覺層次。",
    link: "https://www.behance.net/gallery/226155329/2025"
  },
  {
    title: "精選短影音系列",
    category: "STAR PROJECT 02",
    image: "https://i.postimg.cc/ThsW-VT51/jie-tu-2026-05-12-04-30-01.png",
    id: "p2",
    desc: "快節奏、高張力的社群短影音剪輯，在數秒內創造強烈視覺衝擊。",
    link: "https://www.behance.net/gallery/226147927/IG-8"
  },
  {
    title: "活動紀錄平面拍攝",
    category: "STAR PROJECT 03",
    image: "https://i.postimg.cc/zv0hfCJ6/jie-tu-2026-05-12-05-14-27.png",
    id: "p3",
    desc: "專業快門捕捉活動核心靈魂，定格瞬間最真實的情感與氛圍。",
    link: "https://www.behance.net/gallery/222348957/2024-"
  }
];

const SKILL_DATA = [
  { subject: '動態剪輯', A: 95, fullMark: 100 },
  { subject: '專業快門', A: 90, fullMark: 100 },
  { subject: '色彩科學', A: 85, fullMark: 100 },
  { subject: '敘事流動', A: 92, fullMark: 100 },
  { subject: '聲音設計', A: 80, fullMark: 100 },
  { subject: '後期特效', A: 88, fullMark: 100 },
];

const FUNNEL_DATA = [
  { name: '素材整理', value: 100, color: '#3c3228' },
  { name: '粗剪構思', value: 80, color: '#5a4a3a' },
  { name: '視覺細琢', value: 60, color: '#8c4226' },
  { name: '靈魂注入', value: 40, color: '#a34e2c' },
];

export default function App() {
  return (
    <div className="min-h-screen earth-gradient overflow-x-hidden text-stone-300">
      {/* Mobile-First Optimized Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex justify-between items-center glass border-b border-white/5">
        <div className="flex flex-col">
          <span className="font-display font-black text-lg md:text-2xl tracking-tighter text-white">陳柏勳 EVAN CHEN</span>
          <span className="text-[7px] md:text-sm text-accent font-medium leading-tight">終點之前，以專業快門與剪輯視野，捕捉無所畏懼的視覺靈魂</span>
        </div>
        
        <div className="flex items-center gap-3 text-right">
          <div className="group relative">
             <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-accent overflow-hidden shadow-lg shadow-accent/20 transition-transform hover:scale-110">
               <img src="https://i.postimg.cc/v86C609X/0E4A6813.jpg" alt="Evan Chen Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
             </div>
          </div>
        </div>
      </nav>

      {/* Desktop Floating Avatar */}
      <div className="hidden md:block fixed top-24 right-8 z-40">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-48 h-48 rounded-2xl border-2 border-accent/30 overflow-hidden shadow-2xl glass p-1"
        >
          <img src="https://i.postimg.cc/v86C609X/0E4A6813.jpg" alt="Evan Chen Profile" className="w-full h-full object-cover rounded-xl" referrerPolicy="no-referrer" />
        </motion.div>
      </div>

      {/* Hero Section */}
      <header className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8 order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="space-y-4">
              
              <h1 className="text-6xl md:text-[100px] font-black leading-[0.9] text-white uppercase italic tracking-tighter">
                陳柏勳<br /> 
                <span className="text-accent">EVAN CHEN</span>
              </h1>
              
              <p className="text-stone-500 text-xs md:text-sm font-bold tracking-[0.2em] leading-relaxed max-w-xl mx-auto lg:mx-0 uppercase">
                終點之前，以專業快門與剪輯視野，捕捉無所畏懼的視覺靈魂
              </p>
            </div>
            
            <p className="text-stone-400 text-sm md:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              「捕捉無所畏懼的視覺靈魂」—— 陳柏勳 EVAN CHEN。透過精準的節奏感與敏銳的靈魂捕捉，為您的每段影像賦予不可磨滅的深度。
            </p>
            
            <div className="flex gap-4 pt-4 justify-center lg:justify-start">
              <a href="#work" id="main-cta" className="px-8 py-4 bg-accent text-white text-xs font-bold uppercase tracking-widest rounded flex items-center gap-2 shadow-lg shadow-accent/20 transition-transform hover:scale-105">
                STAR 專案 <Star className="w-3 h-3 fill-current" />
              </a>
              <a href="#contact" className="px-8 py-4 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-white/5 transition-all">
                聯繫我
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 shrink-0"
          >
            <div className="relative group p-1 glass rounded-3xl border-2 border-accent/20 shadow-2xl">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://i.postimg.cc/v86C609X/0E4A6813.jpg" 
                  alt="陳柏勳 Evan Chen Profile" 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 blur-3xl -z-10 rounded-full animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-stone-500/10 blur-3xl -z-10 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Star Projects */}
      <main id="work" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-lg text-accent font-bold tracking-[0.3em] uppercase mb-2">Portfolio</h2>
          <h3 className="text-3xl font-black text-white italic">精選 STAR 專案</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STAR_PROJECTS.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-stone-900 rounded-2xl overflow-hidden glass border-white/5 block"
            >
              <div className="h-[250px] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                   <div className="px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-[8px] font-black text-white tracking-widest group-hover:scale-110 transition-transform">
                     {project.category}
                   </div>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-xl font-bold group-hover:text-accent transition-colors">{project.title}</h4>
                <p className="text-stone-500 text-xs leading-relaxed">{project.desc}</p>
                <div className="pt-2 flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  點擊觀看詳細 <Play className="w-2 h-2 fill-current" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </main>

      {/* Skills Radar & Funnel Section */}
      <section className="py-20 px-4 bg-stone-900/40 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-3xl font-black text-white uppercase italic">核心技能戰力</h2>
              <p className="text-stone-500 text-sm">數據化呈現全方位的剪輯與攝影能力指標。</p>
            </div>
            
            <div className="h-[350px] w-full glass rounded-3xl p-4 flex items-center justify-center overflow-hidden">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_DATA}>
                  <PolarGrid stroke="#444" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#888', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} axisLine={false} tick={false} />
                  <Radar
                    name="Evan"
                    dataKey="A"
                    stroke="#a34e2c"
                    fill="#a34e2c"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-3xl font-black text-white uppercase italic">製作流程漏斗</h2>
              <p className="text-stone-500 text-sm">從素材到成片的靈魂昇華過程。</p>
            </div>
            
            <div className="h-[350px] w-full glass rounded-3xl p-6 overflow-hidden">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={FUNNEL_DATA}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fill: '#fff', fontSize: 12, fontWeight: 'bold' }}
                    width={80}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ backgroundColor: '#1a1918', border: '1px solid #333', color: '#fff' }}
                  />
                  <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                    {FUNNEL_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 flex justify-between px-2">
                {FUNNEL_DATA.map((item) => (
                  <div key={item.name} className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full mb-1" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[8px] text-stone-600 font-bold uppercase">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Mini */}
      <section className="py-12 px-4 border-t border-white/5">
        <div className="flex flex-wrap justify-center gap-8">
          {SOCIAL_LINKS.map(social => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
              <span className="text-stone-500 group-hover:text-accent transition-colors">{social.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600 group-hover:text-white transition-colors">{social.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 text-center border-t border-white/5">
        <p className="text-[10px] text-stone-600 font-bold tracking-[0.3em] uppercase">
          © 2026 陳柏勳 EVAN CHEN | 捕捉無所畏懼的視覺靈魂
        </p>
      </footer>
    </div>
  );
}
