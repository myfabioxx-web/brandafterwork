import React from "react"; import { motion } from "framer-motion"; import { ArrowRight, Headphones, Newspaper, Sparkles, PlayCircle, Facebook, Youtube } from "lucide-react";

const articles = [ { title: "ทำไมคนรวยทั่วโลก เริ่มซื้อทองคำอีกครั้ง", tag: "Finance", desc: "เมื่อโลกไม่แน่นอน สินทรัพย์ปลอดภัยจึงกลับมาอยู่ในสายตานักลงทุน", }, { title: "10 หุ้น AI ที่คนพูดถึงมากสุดตอนนี้", tag: "AI Stocks", desc: "สรุปกระแสหุ้นเทคโนโลยีที่กำลังถูกจับตาในตลาดโลก", }, { title: "ประเทศไทยกำลังตาม AI ทัน หรือถูกทิ้งไว้ข้างหลัง", tag: "AI Thailand", desc: "มองอนาคตแรงงาน ธุรกิจ และโอกาสของไทยในยุคปัญญาประดิษฐ์", }, ];

export default function App() { return ( <main className="min-h-screen bg-[#050816] text-white overflow-hidden"> <div className="fixed inset-0 -z-10"> <div className="absolute top-[-120px] right-[-120px] h-[360px] w-[360px] rounded-full bg-cyan-500/20 blur-[100px]" /> <div className="absolute bottom-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-indigo-600/25 blur-[120px]" /> <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,64,175,0.28),transparent_35%),linear-gradient(180deg,rgba(5,8,22,0.2),#050816)]" /> </div>

<header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-cyan-300 text-black shadow-lg shadow-cyan-500/20">
        <Sparkles size={20} />
      </div>
      <div>
        <p className="text-base font-bold tracking-wide">สมองหลังเลิกงาน</p>
        <p className="text-xs text-slate-400">Brain After Work</p>
      </div>
    </div>

    <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
      <a href="#articles" className="hover:text-white">บทความ</a>
      <a href="#podcast" className="hover:text-white">Podcast</a>
      <a href="#about" className="hover:text-white">เกี่ยวกับเพจ</a>
    </nav>
  </header>

  <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-10 md:grid-cols-2 md:pt-20">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs text-cyan-100 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-cyan-300" />
        AI • หุ้น • เทคโนโลยี • เรื่องใหญ่ที่เข้าใจง่าย
      </div>

      <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
        ตามโลกให้ทัน
        <span className="block bg-gradient-to-r from-cyan-200 via-white to-yellow-200 bg-clip-text text-transparent">
          หลังเลิกงาน
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
        สรุปข่าว AI หุ้น เทคโนโลยี และเศรษฐกิจ ให้เข้าใจง่ายในไม่กี่นาที
        สำหรับคนทำงานที่อยากรู้ทันโลก แต่ไม่มีเวลานั่งอ่านยาวๆ
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="#podcast"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:scale-[1.02]"
        >
          <Headphones size={18} /> ฟัง Podcast
        </a>
        <a
          href="#articles"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
        >
          อ่านบทความ <ArrowRight size={18} />
        </a>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative"
    >
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-cyan-900/30 backdrop-blur-xl">
        <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-950 p-6">
          <div className="mb-20 flex items-center justify-between">
            <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-black">NEW MEDIA</span>
            <PlayCircle className="text-cyan-200" />
          </div>
          <h2 className="text-3xl font-black leading-tight">ข่าวใหญ่วันนี้<br />เล่าให้ฟังง่ายๆ</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            จากเรื่องซับซ้อนในตลาดโลก สู่คอนเทนต์สั้นที่เอาไปเล่าต่อได้ทันที
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs">
            <div className="rounded-2xl bg-white/10 p-3">AI</div>
            <div className="rounded-2xl bg-white/10 p-3">Stocks</div>
            <div className="rounded-2xl bg-white/10 p-3">Future</div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>

  <section id="articles" className="mx-auto max-w-6xl px-5 py-16">
    <div className="mb-8 flex items-end justify-between gap-5">
      <div>
        <p className="mb-2 text-sm font-bold text-cyan-200">Latest Contents</p>
        <h2 className="text-3xl font-black md:text-4xl">คอนเทนต์ล่าสุด</h2>
      </div>
      <Newspaper className="hidden text-cyan-200 md:block" />
    </div>

    <div className="grid gap-5 md:grid-cols-3">
      {articles.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="group rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.08]"
        >
          <div className="mb-5 h-40 rounded-2xl bg-gradient-to-br from-cyan-900/80 via-indigo-950 to-slate-950 p-4">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-cyan-100">{item.tag}</span>
          </div>
          <h3 className="text-xl font-black leading-snug">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
          <button className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 group-hover:text-yellow-200">
            อ่านต่อ <ArrowRight size={16} />
          </button>
        </motion.article>
      ))}
    </div>
  </section>

  <section id="podcast" className="mx-auto max-w-6xl px-5 py-16">
    <div className="rounded-[2rem] border border-cyan-200/10 bg-gradient-to-br from-white/[0.08] to-cyan-400/[0.04] p-6 md:p-10">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="mb-3 text-sm font-bold text-yellow-200">Podcast / Shorts / Reels</p>
          <h2 className="text-3xl font-black md:text-4xl">ฟังสรุปสั้นๆ ใน 1 นาที</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            คอนเทนต์สำหรับคนไม่มีเวลา แต่อยากเข้าใจประเด็นสำคัญของโลกธุรกิจ เทคโนโลยี และการลงทุน
          </p>
        </div>

        <div className="grid gap-3">
          <a className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 font-bold hover:bg-white/15" href="#">
            Facebook Reels <Facebook size={18} />
          </a>
          <a className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 font-bold hover:bg-white/15" href="#">
            YouTube Shorts <Youtube size={18} />
          </a>
          <a className="flex items-center justify-between rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950 hover:bg-cyan-200" href="#">
            เริ่มฟังตอนล่าสุด <Headphones size={18} />
          </a>
        </div>
      </div>
    </div>
  </section>

  <section id="about" className="mx-auto max-w-4xl px-5 py-16 text-center">
    <h2 className="text-3xl font-black md:text-4xl">สมองหลังเลิกงาน คืออะไร?</h2>
    <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
      พื้นที่ของคนทำงานที่อยากเข้าใจโลกเร็วขึ้น ผ่านบทความและพอดแคสต์สั้นๆ
      ที่ย่อยเรื่องยากให้กลายเป็นเรื่องเล่าง่ายๆ อ่านจบ ฟังจบ แล้วเอาไปคิดต่อได้ทันที
    </p>
  </section>

  <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
    © 2026 สมองหลังเลิกงาน • Brain After Work
  </footer>
</main>

); }
