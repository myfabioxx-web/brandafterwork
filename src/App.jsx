import {
  Brain,
  PlayCircle,
  BookOpen,
  Headphones,
  Music2,
  Search,
  Video,
  CircleUserRound,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050607] text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400/10">
              <Brain className="h-6 w-6 text-yellow-400" />
            </div>

            <div>
              <h1 className="text-lg font-black">
                สมอง<span className="text-yellow-400">หลังเลิกงาน</span>
              </h1>

              <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                Content • Podcast • Ideas
              </p>
            </div>
          </div>

          <div className="hidden gap-8 text-sm font-semibold md:flex">
            <a className="text-yellow-400">หน้าแรก</a>
            <a className="text-white/70">Podcast</a>
            <a className="text-white/70">บทความ</a>
            <a className="text-white/70">เกี่ยวกับเรา</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Search className="h-5 w-5 text-white/70" />
            </button>

            <button className="rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black">
              ติดตาม
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">
            Content • Podcast • Ideas
          </p>

          <h2 className="text-5xl font-black leading-tight">
            เข้าใจโลกให้ทัน
            <br />
            ใช้เทคโนโลยีให้เป็น
            <br />
            <span className="text-yellow-400">
              และพัฒนาตัวเองให้ไม่หยุดนิ่ง
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
            คอนเทนต์สำหรับคนทำงาน ที่อยากเติบโต
            ในโลกที่เปลี่ยนเร็วที่สุด
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black">
              <PlayCircle className="h-5 w-5" />
              ฟัง Podcast
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-bold">
              <BookOpen className="h-5 w-5" />
              อ่านบทความ
            </button>
          </div>

          <div className="mt-8 flex gap-3">
            {[Video, CircleUserRound, Music2, Headphones].map((Icon, i) => (
              <button
                key={i}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5"
              >
                <Icon className="h-5 w-5 text-white/70" />
              </button>
            ))}
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="overflow-hidden rounded-[2rem] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
