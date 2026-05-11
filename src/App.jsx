import {
  Brain,
  PlayCircle,
  BookOpen,
  Headphones,
  Music2,
  Search,
  Video,
  CircleUserRound,
  Mail,
} from "lucide-react";

import heroImage from "./hero.png";

export default function App() {
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),#050607_38%),linear-gradient(to_bottom,#050607,#07090c)] text-white">
        <nav className="sticky top-0 z-50 border-b border-yellow-400/10 bg-black/30 backdrop-blur-[30px] shadow-[0_10px_80px_rgba(0,0,0,0.85)] supports-[backdrop-filter]:bg-black/20">
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
              ติดตาม
            </a>
          </div>
        </div>
      </nav>

      <section className="fade-section relative overflow-hidden mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 md:py-16 lg:grid-cols-2">
        <div className="absolute top-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[180px] animate-floatGlow" />  
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-yellow-400 md:text-xs md:tracking-[0.3em]">
            Content • Podcast • Ideas
          </p>

          <h2 className="text-[2.35rem] font-black leading-[1.05] tracking-[-0.03em] md:text-7xl md:leading-[0.95]">
            เข้าใจโลกให้ทัน
            <br />
            ใช้เทคโนโลยีให้เป็น
            <br />
            <span className="text-yellow-300 drop-shadow-[0_0_30px_rgba(250,204,21,0.85)]">
              และพัฒนาตัวเองให้ไม่หยุดนิ่ง
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-white/65 md:mt-6 md:text-lg">
            คอนเทนต์สำหรับคนทำงาน ที่อยากเติบโต
            ในโลกที่เปลี่ยนเร็วที่สุด
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8 md:flex-wrap md:gap-4">
            <a
              href="https://www.youtube.com/@Brainafterwork"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-500 px-6 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(250,204,21,0.45)] hover:brightness-110"
            >
              <PlayCircle className="h-5 w-5" />
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
            <a href="https://www.youtube.com/@Brainafterwork" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Video className="h-5 w-5 text-white/70" />
            </a>
            <a href="https://www.facebook.com/share/1A1yY6TTXP/" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <CircleUserRound className="h-5 w-5 text-white/70" />
            </a>
            <a href="https://tiktok.com/@brainafterw0rk" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Music2 className="h-5 w-5 text-white/70" />
            </a>
            <a href="mailto:brain.afterwork@gmail.com" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Headphones className="h-5 w-5 text-white/70" />
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_0_80px_rgba(250,204,21,0.08)] md:rounded-[2rem]">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-yellow-400/10" />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_45%)]" />
          <img
            src={heroImage}
              className="w-full h-full object-cover scale-[1.02] hover:scale-[1.06] hover:rotate-[0.3deg] transition-all duration-1000 ease-out brightness-105 contrast-105"
            alt="Podcast studio"
          />
        </div>
      </section>

      <section
          id="podcast"
          className="fade-section mx-auto max-w-7xl px-4 pt-10 pb-14 md:px-6 md:pb-16"
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
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-700 ease-out hover:-translate-y-5 hover:scale-[1.02] hover:border-yellow-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_80px_rgba(250,204,21,0.22)]"
    >
      <img
        src={item.image}
        className="h-48 w-full object-cover transition duration-700 group-hover:scale-110 md:h-52"
        alt={item.title}  
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

      <div className="absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="absolute bottom-0 left-0 z-20 p-5">
        <h4 className="text-lg font-black leading-7">
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

      <section className="fade-section mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-20">
        <div className="grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] md:rounded-[2rem] lg:grid-cols-2">
          <div className="p-6 md:p-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              About
            </p>

            <h3 className="text-3xl font-black leading-tight md:text-4xl">
              เกี่ยวกับ
              <br />
              <span className="text-yellow-400">สมองหลังเลิกงาน</span>
            </h3>

            <p className="mt-6 leading-8 text-white/65">
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
      <footer className="border-t border-white/10 bg-black/40">
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
            <h4 className="mb-4 font-black">เมนู</h4>
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
                <Video className="h-5 w-5 text-white/70" />
              </a>
              <a href="https://www.facebook.com/share/1A1yY6TTXP/" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <CircleUserRound className="h-5 w-5 text-white/70" />
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
