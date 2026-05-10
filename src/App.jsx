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
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "เริ่มต้นลงทุน สำหรับคนเงินเดือนประจำ",
      image:
        "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1200&auto=format&fit=crop",
    },
  ];

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

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            เข้าใจโลกให้ทัน
            <br />
            ใช้เทคโนโลยีให้เป็น
            <br />
            <span className="text-yellow-400">
              และพัฒนาตัวเองให้ไม่หยุดนิ่ง
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg">
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
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
            className="h-full min-h-[360px] w-full object-cover opacity-80"
            alt="Podcast studio"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-3xl font-black md:text-4xl">
            คอนเทนต์<span className="text-yellow-400">ล่าสุด</span>
          </h3>

          <button className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white/60">
            ดูทั้งหมด
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {contentItems.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
            >
              <img
                src={item.image}
                className="h-52 w-full object-cover"
                alt={item.title}
              />

              <div className="p-5">
                <h4 className="text-lg font-black leading-7">
                  {item.title}
                </h4>

                <div className="mt-5 flex items-center justify-between text-sm text-white/50">
                  <span>Podcast • 32:15</span>

                  <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10">
                    <PlayCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] lg:grid-cols-2">
          <div className="p-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              About
            </p>

            <h3 className="text-4xl font-black leading-tight">
              เกี่ยวกับ
              <br />
              <span className="text-yellow-400">
                สมองหลังเลิกงาน
              </span>
            </h3>

            <p className="mt-6 leading-8 text-white/65">
              เราเชื่อว่า “การพัฒนาตัวเอง”
              ไม่ใช่เรื่องของใครคนใดคนหนึ่ง
              แต่เป็นสิ่งที่ทุกคนเริ่มได้ หลังเลิกงาน
            </p>

            <button className="mt-8 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black">
              รู้จักเรามากขึ้น
            </button>
          </div>

          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop"
              className="h-full min-h-[320px] w-full object-cover opacity-80"
              alt="Workspace"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400/10">
                <Brain className="h-6 w-6 text-yellow-400" />
              </div>

              <div>
                <h1 className="text-lg font-black">
                  สมอง<span className="text-yellow-400">หลังเลิกงาน</span>
                </h1>
              </div>
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
              {[Video, CircleUserRound, Music2, Headphones].map(
                (Icon, i) => (
                  <button
                    key={i}
                    className="flex h-11 w-11 items-center justify
