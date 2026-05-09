import React, { useState } from "react"; import { motion } from "framer-motion"; import {
  ArrowRight,
  Headphones,
  Sparkles,
  Brain,
  TrendingUp,
  Radio,
  Globe2,
  Cpu,
  Coins,
  Zap,
  PlayCircle,
  Menu,
  X,
} from "lucide-react";
const articles = [ { title: "AI เปลี่ยนโลกการทำงานไปแล้ว", tag: "AI / เทคโนโลยี", desc: "เราอาจเริ่มตัวช้าไปโดยไม่รู้ตัว", icon: Cpu, gradient: "from-cyan-400/35 via-blue-900/30 to-slate-950", }, { title: "ทองคำยังน่าลงทุนอยู่ไหมตอนนี้?", tag: "การลงทุน", desc: "วิเคราะห์แนวโน้มราคาทองคำและปัจจัยสำคัญ", icon: Coins, gradient: "from-yellow-300/40 via-amber-700/25 to-slate-950", }, { title: "โลกในอีก 10 ปีข้างหน้า จะเป็นยังไง?", tag: "อนาคต", desc: "เทรนด์อนาคตที่น่าจับตามอง", icon: Brain, gradient: "from-indigo-400/35 via-cyan-900/30 to-slate-950", }, { title: "เศรษฐกิจโลกกำลังเปลี่ยนทิศ", tag: "เศรษฐกิจ", desc: "อะไรคือความเสี่ยง และโอกาสของคนไทย", icon: Globe2, gradient: "from-emerald-400/30 via-blue-900/25 to-slate-950", }, ];

const features = [ { icon: Brain, title: "ย่อยเรื่องยาก", desc: "เปลี่ยนข่าวซับซ้อนให้กลายเป็นภาษาคนทำงาน อ่านง่าย ฟังง่าย" }, { icon: TrendingUp, title: "ทันกระแสโลก", desc: "จับประเด็น AI หุ้น เทคโนโลยี และเศรษฐกิจที่ควรรู้" }, { icon: Radio, title: "คอนเทนต์สั้น", desc: "บทความและพอดแคสต์ที่เข้าใจได้ในเวลาไม่กี่นาที" }, ];

export default function App() { const [menuOpen, setMenuOpen] = useState(false);

return ( <main className="min-h-screen overflow-hidden bg-[#030712] text-white"> <div className="fixed inset-0 -z-10"> <div className="absolute top-[-180px] right-[-120px] h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[140px]" /> <div className="absolute bottom-[-200px] left-[-120px] h-[540px] w-[540px] rounded-full bg-indigo-700/25 blur-[150px]" /> <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:64px_64px]" /> </div>

<header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/75 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <a href="#top" className="flex items-center gap-3 no-underline">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-yellow-300/30 bg-yellow-300/10 text-yellow-300">
          <Brain size={23} />
        </div>
        <div>
          <p className="text-lg font-black text-white">สมองหลังเลิกงาน</p>
          <p className="text-xs font-semibold text-slate-400">Content • Podcast • Ideas</p>
        </div>
      </a>

      <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex">
        <a href="#top" className="text-yellow-300 no-underline">หน้าแรก</a>
        <a href="#articles" className="no-underline hover:text-white">บทความ</a>
        <a href="#podcast" className="no-underline hover:text-white">พอดแคสต์</a>
        <a href="#about" className="no-underline hover:text-white">เกี่ยวกับเรา</a>
      </nav>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
  {menuOpen && (
      <div className="border-t border-white/10 bg-[#030712]/95 px-5 py-4 md:hidden">
        <div className="grid gap-3 text-sm font-bold text-slate-200">
          <a onClick={() => setMenuOpen(false)} href="#top" className="rounded-2xl bg-white/5 px-4 py-3 text-yellow-300 no-underline">หน้าแรก</a>
          <a onClick={() => setMenuOpen(false)} href="#articles" className="rounded-2xl bg-white/5 px-4 py-3 no-underline">บทความ</a>
          <a onClick={() => setMenuOpen(false)} href="#podcast" className="rounded-2xl bg-white/5 px-4 py-3 no-underline">พอดแคสต์</a>
          <a onClick={() => setMenuOpen(false)} href="#about" className="rounded-2xl bg-white/5 px-4 py-3 no-underline">เกี่ยวกับเรา</a>
        </div>
      </div>
    )}
  </header>

  <section id="top" className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300/25 bg-yellow-300/10 px-4 py-2 text-xs font-bold text-yellow-200">
        <Sparkles size={15} /> คอนเทนต์สั้น เข้าใจง่าย ใช้ได้จริง
      </div>

      <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
        เติมสมองหลังเลิกงาน
        <span className="block bg-gradient-to-r from-white via-cyan-100 to-yellow-300 bg-clip-text text-transparent">
          ด้วยเรื่องเงิน AI และอนาคต
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
        พื้นที่สรุปข่าว แนวคิดการลงทุน เทคโนโลยี และเรื่องน่าคิดรอบโลก ให้กลายเป็นบทความและพอดแคสต์สั้นๆ ที่เข้าใจง่าย
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href="#articles" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-300 px-6 py-3 text-sm font-black text-slate-950 no-underline shadow-lg shadow-yellow-500/25 hover:bg-yellow-200">
          <Zap size={18} /> เริ่มอ่านบทความ
        </a>
        <a href="#podcast" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-yellow-300/30 bg-white/5 px-6 py-3 text-sm font-black text-yellow-100 no-underline hover:bg-yellow-300/10">
          <Headphones size={18} /> ฟังพอดแคสต์
        </a>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <p className="text-sm font-bold text-slate-300">ติดตามเรา</p>
        <a href="#follow" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white no-underline hover:bg-yellow-300 hover:text-slate-950"><span>▶</span></a>
        <a href="#follow" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white no-underline hover:bg-yellow-300 hover:text-slate-950"><span>f</span></a>
        <a href="#follow" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white no-underline hover:bg-yellow-300 hover:text-slate-950"><Headphones size={18} /></a>
      </div>
    </motion.div>

    <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative min-h-[420px]">
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-yellow-300/10 blur-2xl" />
      <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 shadow-2xl shadow-cyan-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.32),transparent_26%),radial-gradient(circle_at_30%_80%,rgba(250,204,21,0.18),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-60" />
        <div className="absolute right-8 top-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-4 backdrop-blur">
          <p className="text-3xl font-black text-cyan-200">AI</p>
        </div>
        <div className="absolute bottom-8 left-8 rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
          <p className="text-xs font-bold text-yellow-200">LIVE INSIGHT</p>
          <h2 className="mt-2 text-2xl font-black">ข่าวใหญ่วันนี้<br />เล่าให้เข้าใจง่าย</h2>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-300">จากเรื่องซับซ้อนในตลาดโลก สู่คอนเทนต์สั้นที่เอาไปเล่าต่อได้ทันที</p>
        </div>
      </div>
    </motion.div>
  </section>

  <section id="articles" className="mx-auto max-w-7xl px-5 py-12">
    <p className="mb-2 flex items-center gap-2 text-sm font-black text-yellow-200"><Zap size={16} /> เรื่องเด่นวันนี้</p>
    <h2 className="mb-6 text-3xl font-black md:text-4xl">บทความล่าสุด</h2>
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {articles.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] shadow-xl shadow-black/20 backdrop-blur hover:border-yellow-300/25">
            <div className="relative h-44 overflow-hidden">
  <img
    src={`https://picsum.photos/600/400?random=${index + 1}`}
    alt={item.title}
    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
  />

  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient}`} />

  <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-bold text-cyan-100 backdrop-blur">
    {item.tag}
  </span>

  <Icon
    className="absolute bottom-4 right-4 text-white/80"
    size={52}
  />
</div>      <span className="relative rounded-full bg-black/30 px-3 py-1 text-xs font-bold text-cyan-100 backdrop-blur">{item.tag}</span>
              <Icon className="absolute bottom-5 right-5 text-white/70" size={56} />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-black leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-yellow-300 no-underline hover:text-cyan-200">อ่านต่อ <ArrowRight size={16} /></a>
            </div>
          </motion.article>
        );
      })}
    </div>
  </section>

  <section className="mx-auto max-w-7xl px-5 py-12">
    <div className="grid gap-4 md:grid-cols-3">
      {features.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-300"><Icon size={22} /></div>
            <h3 className="text-xl font-black">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
          </motion.div>
        );
      })}
    </div>
  </section>

  <section id="podcast" className="mx-auto max-w-7xl px-5 py-12">
    <div className="rounded-[2rem] border border-yellow-300/15 bg-gradient-to-br from-yellow-300/12 via-white/[0.055] to-cyan-400/8 p-6 md:p-10">
      <p className="mb-3 text-sm font-black text-yellow-200">Podcast / Shorts / Reels</p>
      <h2 className="text-3xl font-black md:text-4xl">ฟังจบไว แต่ได้มุมคิดกลับไป</h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">พอดแคสต์สั้นสำหรับคนมีเวลาน้อย เล่าเรื่องเศรษฐกิจ เทคโนโลยี หุ้น และโลกอนาคตแบบจับประเด็นเร็ว</p>
    </div>
  </section>

  <section id="about" className="mx-auto max-w-4xl px-5 py-16 text-center">
    <p className="mb-3 text-sm font-black text-yellow-200">About</p>
    <h2 className="text-3xl font-black md:text-4xl">สมองหลังเลิกงาน คืออะไร?</h2>
    <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">พื้นที่ของคนทำงานที่อยากเข้าใจโลกเร็วขึ้น ผ่านบทความและพอดแคสต์สั้นๆ ที่ย่อยเรื่องยากให้กลายเป็นเรื่องเล่าง่ายๆ</p>
  </section>

  <section id="follow" className="mx-auto max-w-7xl px-5 pb-20 pt-8">
    <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-yellow-300/15 via-white/[0.06] to-cyan-300/10 p-8 text-center md:p-12">
      <Headphones className="mx-auto mb-5 text-yellow-300" size={32} />
      <h2 className="text-3xl font-black md:text-4xl">อยากตามโลกให้ทันหลังเลิกงาน?</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">ติดตามบทความและพอดแคสต์ใหม่ๆ จากสมองหลังเลิกงาน แล้วเปลี่ยนข่าวยากให้กลายเป็นเรื่องที่เข้าใจง่ายทุกวัน</p>
    </div>
  </section>

  <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
    © 2026 สมองหลังเลิกงาน • Brain After Work
  </footer>
</main>

); }
