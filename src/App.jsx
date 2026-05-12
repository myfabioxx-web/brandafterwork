import {
  Brain,
  Menu,
  X,
  PlayCircle,
  BookOpen,
  Search,
  Mail,
  MonitorPlay,
  BadgeInfo,
  Music2,
} from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "./hero.png";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
  const moveGlow = (e) => {
    document.documentElement.style.setProperty(
      "--x",
      `${e.clientX}px`
    );

    document.documentElement.style.setProperty(
      "--y",
      `${e.clientY}px`
    );
  };

  window.addEventListener("mousemove", moveGlow);

  return () => {
    window.removeEventListener("mousemove", moveGlow);
  };
}, []);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2200);

  return () => clearTimeout(timer);
}, []);

  if (loading) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050607] text-white">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10 shadow-[0_0_60px_rgba(250,204,21,0.18)]">
          <Brain className="h-10 w-10 text-yellow-400 animate-pulse" />
        </div>

        <h1 className="text-3xl font-black">
          สมอง<span className="text-yellow-400">หลังเลิกงาน</span>
        </h1>

        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/40">
          Content • Podcast • Ideas
        </p>

        <div className="mt-8 h-1 w-64 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full animate-[loadingBar_2s_linear] bg-gradient-to-r from-yellow-300 to-yellow-500" />
        </div>
      </div>
    </div>
  );
}
  const contentItems = [
    {
      title: "AI จะเปลี่ยนโลกการทำงานไปแล้ว",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "โลกยุคใหม่ ภัยไซเบอร์ใกล้ตัวกว่าที่คิด",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "เทคนิคโฟกัส ทำงานเยอะแต่เหนื่อยน้อยลง",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "เริ่มต้นลงทุน สำหรับคนเงินเดือนประจำ",
      image:
        "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <>
    <div className="pointer-events-none fixed inset-0 z-30 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),transparent_28%),radial-gradient(circle_at_bottom,rgba(255,180,0,0.04),transparent_30%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.05),transparent_40%)]" />
    <div className="pointer-events-none fixed inset-0 opacity-[0.03] animate-grain mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
          <div className="background-grid relative min-h-screen animate-smoothAppear before:absolute before:inset-0 before:pointer-events-none before:bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(250,204,21,0.18),transparent_260px)] bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),#050607_38%),linear-gradient(to_bottom,#050607,#07090c)] text-white">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-yellow-300/40 blur-[1px]" />
          <div className="absolute left-[75%] top-[30%] h-3 w-3 rounded-full bg-yellow-200/30 blur-[2px]" />
          <div className="absolute left-[60%] top-[70%] h-2 w-2 rounded-full bg-yellow-400/30 blur-[1px]" />
          <div className="absolute left-[20%] top-[80%] h-2 w-2 rounded-full bg-yellow-300/20 blur-[1px]" />
      </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.06),transparent_35%)] blur-3xl" />
        <nav className="sticky top-0 z-50 before:absolute before:inset-0 before:bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.06),transparent)] before:opacity-40 border-b border-yellow-400/10 bg-black/30 backdrop-blur-[40px] shadow-[0_10px_120px_rgba(250,204,21,0.12)] supports-[backdrop-filter]:bg-black/20 before:backdrop-blur-xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(250,204,21,0.06),transparent)]" />
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400/10 md:h-11 md:w-11">
              <Brain className="h-5 w-5 text-yellow-400 md:h-6 md:w-6" />
            </div>

            <div className="min-w-0">
              <h1 className="text-base font-black leading-tight md:text-lg">
                สมอง<span className="text-yellow-400">หลังเลิกงาน</span>
              </h1>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/50 md:text-[10px]">
                Content • Podcast • Ideas
              </p>
            </div>
          </div>

          <div className="hidden gap-8 text-sm font-semibold md:flex">
            <a className="text-yellow-400">หน้าแรก</a>
            <a
               href="#podcast"
               className="text-white/70 hover:text-yellow-400 hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.5)] transition duration-300 cursor-pointer"
             >
                Podcast
             </a>
            <a className="text-white/70 hover:text-yellow-400 transition duration-300 cursor-pointer">
             บทความ
             </a>
            <a className="text-white/70 hover:text-yellow-400 transition duration-300 cursor-pointer">
             เกี่ยวกับเรา
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <button className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 md:flex md:h-11 md:w-11">
              <Search className="h-5 w-5 text-white/70" />
            </button>

            <a
              href="https://www.youtube.com/@Brainafterwork"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 px-5 py-3 text-sm font-black text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(250,204,21,0.55)] hover:brightness-110 md:px-6 md:text-base"
            >
              <button
               onClick={() => setMenuOpen(!menuOpen)}
               className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
              >
              {menuOpen ? (
              <X className="h-5 w-5 text-white" />
               ) : (
               <Menu className="h-5 w-5 text-white" />
                )}
              </button>
              ติดตาม
            </a>
          </div>
        </div>
          {menuOpen && (
  <div className="absolute left-0 top-full w-full border-b border-yellow-400/10 bg-black/95 backdrop-blur-3xl md:hidden">
    <div className="flex flex-col gap-5 px-6 py-6 text-sm font-bold">
      <a className="text-yellow-400">หน้าแรก</a>

      <a
        href="#podcast"
        className="text-white/70 hover:text-yellow-400"
      >
        Podcast
      </a>

      <a className="text-white/70 hover:text-yellow-400">
        บทความ
      </a>

      <a className="text-white/70 hover:text-yellow-400">
        เกี่ยวกับเรา
      </a>
    </div>
  </div>
)}
      </nav>

      <section className="relative overflow-hidden mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 md:py-16 lg:grid-cols-2">
       <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[180px]" />
        <div className="absolute top-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[180px] animate-floatGlow" />  
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-yellow-400 md:text-xs md:tracking-[0.3em]">
            Content • Podcast • Ideas
          </p>

          <h2 className="animate-textGlow drop-shadow-[0_0_35px_rgba(250,204,21,0.18)] text-[2.35rem] font-black leading-[1.05] tracking-[-0.03em] md:text-7xl md:leading-[0.95]">
            เข้าใจโลกให้ทัน
            <br />
            ใช้เทคโนโลยีให้เป็น
            <br />
            <span className="animate-gradientText bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(250,204,21,0.85)]">
              และพัฒนาตัวเองให้ไม่หยุดนิ่ง
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-9 tracking-[0.01em] text-white/60 md:text-xl">
            คอนเทนต์สำหรับคนทำงาน ที่อยากเติบโต
            ในโลกที่เปลี่ยนเร็วที่สุด
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8 md:flex-wrap md:gap-4">
            <a
              href="https://www.youtube.com/@Brainafterwork"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-500 px-6 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(250,204,21,0.45)] hover:brightness-110"
            >
              <PlayCircle className="h-5 w-5" />
              <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)] transition duration-1000 group-hover:translate-x-full" />
              ฟัง Podcast
            </a>

            <a
              href="https://www.facebook.com/share/1A1yY6TTXP/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-bold"
            >
              <BookOpen className="h-5 w-5" />
              อ่านบทความ
            </a>
          </div>

          <div className="mt-7 flex gap-3 md:mt-8">
            <a href="https://www.youtube.com/@Brainafterwork" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:scale-110 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]">
              <MonitorPlay className="h-5 w-5 text-white/70" />
            </a>
            <a href="https://www.facebook.com/share/1A1yY6TTXP/" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:scale-110 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]">
              <BadgeInfo className="h-5 w-5 text-white/70" />
            </a>
            <a href="https://tiktok.com/@brainafterw0rk" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:scale-110 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]">
              <Music2 className="h-5 w-5 text-white/70" />
            </a>
            <a href="mailto:brain.afterwork@gmail.com" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:scale-110 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]">
              <Mail className="h-5 w-5 text-white/70" />
            </a>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[2.5rem] animate-borderGlow border border-white/10 bg-black shadow-[0_0_100px_rgba(250,204,21,0.12)] transition duration-700 hover:shadow-[0_0_120px_rgba(250,204,21,0.18)] md:rounded-[2.5rem] hover:[transform:perspective(1400px)_rotateX(2deg)_rotateY(-6deg)_scale(1.02)]">
          <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)] transition duration-[1800ms] group-hover:translate-x-full z-20" />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_45%)]" />
          <div className="absolute inset-0 z-10 shadow-[inset_0_0_120px_rgba(0,0,0,0.75)]" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-yellow-400/10" />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_45%)]" />
          <img
            src={heroImage}
             className="w-full h-full object-cover animate-floatingHero animate-imageFade transition-all duration-[2500ms] ease-out group-hover:scale-[1.12] group-hover:rotate-[0.6deg] brightness-105 contrast-110" 
            alt="Podcast studio"
          />
          <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_45%)]" />
        </div>
      </section>
       <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
      <section
          id="podcast"
          className="reveal fade-section mx-auto max-w-7xl px-4 pt-10 pb-14 md:px-6 md:pb-16"
>
        <div className="mb-6 flex items-center justify-between md:mb-8">
          <h3 className="text-2xl font-black tracking-tight md:text-5xl">
            คอนเทนต์<span className="text-yellow-400">ล่าสุด</span>
          </h3>

          <button className="rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-white/60 md:px-5 md:py-3">
            ดูทั้งหมด
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
  {contentItems.map((item, i) => (
    <div
      key={i}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-3xl transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-6 hover:scale-[1.03] hover:border-yellow-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_80px_rgba(250,204,21,0.22)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.14),transparent_55%)] before:opacity-0 before:transition before:duration-700 hover:before:opacity-100"
    >
      <img
        src={item.image}
        className="h-48 w-full object-cover transition-all duration-1000 ease-out group-hover:scale-[1.18] group-hover:brightness-[0.55] md:h-52"
        alt={item.title}  
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
      <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_40%)] opacity-0 transition duration-700 group-hover:opacity-100" />

      <div className="absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="absolute bottom-0 left-0 z-20 p-5">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-300 backdrop-blur-xl">
      Trending Podcast
      </div>
        <h4 className="text-lg font-black leading-7 transition-all duration-300 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_18px_rgba(250,204,21,0.55)]">
          {item.title}
        </h4>

        <div className="mt-5 flex items-center justify-between text-sm text-white/50">
          <span>Podcast • 32:15</span>

          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.2)] transition duration-300 group-hover:scale-110">
            <PlayCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
      </section>

      <section className="reveal mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-20">
        <div className="grid overflow-hidden rounded-[1.5rem] transition duration-500 hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(250,204,21,0.12)] border border-white/10 bg-white/[0.03] md:rounded-[2rem] lg:grid-cols-2">
          <div className="p-6 md:p-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              About
            </p>

            <h3 className="text-3xl font-black leading-tight md:text-4xl">
              เกี่ยวกับ
              <br />
              <span className="text-yellow-400">สมองหลังเลิกงาน</span>
            </h3>

            <p className="mt-6 leading-9 tracking-[0.01em] text-white/60">
              เราเชื่อว่า “การพัฒนาตัวเอง”
              ไม่ใช่เรื่องของใครคนใดคนหนึ่ง
              แต่เป็นสิ่งที่ทุกคนเริ่มได้ หลังเลิกงาน
            </p>

            <a
              href="https://www.facebook.com/share/1A1yY6TTXP/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black"
            >
              รู้จักเรามากขึ้น
            </a>
          </div>

          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop"
              className="h-full min-h-[260px] w-full object-cover opacity-80 md:min-h-[320px]"
              alt="Workspace"
            />
          </div>
        </div>
      </section>
       <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mb-8 flex items-center justify-between">
          <h3 className="text-3xl font-black md:text-5xl">
           Podcast<span className="text-yellow-400"> ล่าสุด</span>
           </h3>

    <a
      href="https://www.youtube.com/@Brainafterwork"
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white/60 hover:border-yellow-400/30 hover:text-yellow-400"
    >
      ดูทั้งหมด
    </a>
  </div>

  <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-[0_0_60px_rgba(250,204,21,0.08)] transition duration-500 hover:border-yellow-400/30 hover:shadow-[0_0_90px_rgba(250,204,21,0.18)]">
    <iframe
      className="aspect-video w-full transition duration-700 group-hover:scale-[1.01]"
      src="https://www.youtube.com/embed/1FmoEr3w-90"
      title="YouTube video player"
      allowFullScreen
    />
  </div>
</section>
        <div className="pointer-events-none h-32 bg-gradient-to-b from-transparent to-black/70 blur-2xl" />
      <footer className="border-t border-yellow-400/10 bg-black/50 backdrop-blur-xl shadow-[0_-10px_60px_rgba(250,204,21,0.05)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:grid-cols-4 md:px-6 md:py-12">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400/10">
                <Brain className="h-6 w-6 text-yellow-400" />
              </div>
              <h1 className="text-lg font-black">
                สมอง<span className="text-yellow-400">หลังเลิกงาน</span>
              </h1>
            </div>

            <p className="mt-5 text-sm leading-7 text-white/55">
              เข้าใจโลกให้ทัน ใช้เทคโนโลยีให้เป็น
              และพัฒนาตัวเองให้ไม่หยุดนิ่ง
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-black text-yellow-300">เมนู</h4>
            <div className="grid gap-3 text-sm text-white/55">
              <a>หน้าแรก</a>
              <a>Podcast</a>
              <a>บทความ</a>
              <a>เกี่ยวกับเรา</a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-black">ติดตาม</h4>
            <div className="flex gap-3">
              <a href="https://www.youtube.com/@Brainafterwork" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <MonitorPlay className="h-5 w-5 text-white/70" />
              </a>
              <a href="https://www.facebook.com/share/1A1yY6TTXP/" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <BadgeInfo className="h-5 w-5 text-white/70" />
              </a>
              <a href="https://tiktok.com/@brainafterw0rk" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Music2 className="h-5 w-5 text-white/70" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-black">ติดต่อ</h4>
            <div className="flex items-center gap-3 text-sm text-white/55">
              <Mail className="h-5 w-5 text-yellow-400" />
              brain.afterwork@gmail.com
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/40">
          © 2026 สมองหลังเลิกงาน. All rights reserved.
        </div>
      </footer>
    </div>
    </>
  );
}
