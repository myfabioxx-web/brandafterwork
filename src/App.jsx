import "./index.css";

export default function App() {
  return (
    <div className="app">

      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <img
            src="https://i.imgur.com/W6bK8wB.png"
            alt="logo"
            className="logo"
          />

          <span className="badge">
            AI • MONEY • FUTURE
          </span>

          <h1>
            สมองหลังเลิกงาน
          </h1>

          <p className="subtitle">
            สรุปข่าว AI การเงิน ธุรกิจ และอนาคตโลก
            ให้เข้าใจง่าย สำหรับคนทำงาน
          </p>

          <div className="buttons">
            <a
              href="https://www.youtube.com/@Brainafterwork"
              target="_blank"
            >
              YouTube
            </a>

            <a
              href="https://www.facebook.com/share/1HEJKHh88V/"
              target="_blank"
            >
              Facebook
            </a>

            <a
              href="https://tiktok.com/@brainafterw0rk"
              target="_blank"
            >
              TikTok
            </a>
          </div>
        </div>
      </section>

      <section className="cards-section">

        <div className="card">
          <h2>AI & เทคโนโลยี</h2>
          <p>
            สรุป AI และเทคโนโลยีใหม่
            แบบเข้าใจง่ายภายในไม่กี่นาที
          </p>
        </div>

        <div className="card">
          <h2>การลงทุน</h2>
          <p>
            ข่าวหุ้น เศรษฐกิจ และการเงิน
            ที่คนทำงานควรรู้
          </p>
        </div>

        <div className="card">
          <h2>อนาคตโลก</h2>
          <p>
            เทรนด์โลก งานในอนาคต
            และการเปลี่ยนแปลงที่กำลังมา
          </p>
        </div>

      </section>

      <footer>
        “ใช้สมองให้คุ้มค่าหลังเลิกงาน”
      </footer>

    </div>
  );
}
