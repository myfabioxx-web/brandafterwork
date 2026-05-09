import "./index.css";

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="brand">สมองหลังเลิกงาน</div>
        <div className="nav-links">
          <a href="#content">Content</a>
          <a href="#podcast">Podcast</a>
          <a href="#follow">Follow</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="badge">AI • MONEY • FUTURE</span>

          <h1>สมองหลังเลิกงาน</h1>

          <p className="subtitle">
            สรุปข่าว AI การเงิน ธุรกิจ และอนาคตโลก
            ให้เข้าใจง่าย สำหรับคนทำงาน
          </p>

          <div className="buttons" id="follow">
            <a href="https://www.youtube.com/@Brainafterwork" target="_blank">YouTube</a>
            <a href="https://www.facebook.com/share/1HEJKHh88V/" target="_blank">Facebook</a>
            <a href="https://tiktok.com/@brainafterw0rk" target="_blank">TikTok</a>
          </div>
        </div>

        <div className="brain-panel">
          <div className="brain-orb">🧠</div>
          <p>คิด วิเคราะห์ ต่อยอด หลังเลิกงาน</p>
        </div>
      </section>

      <section className="cards-section" id="content">
        <div className="card">
          <span>01</span>
          <h2>AI & เทคโนโลยี</h2>
          <p>สรุปเทรนด์ AI และเครื่องมือใหม่ ๆ ให้เข้าใจง่าย</p>
        </div>

        <div className="card">
          <span>02</span>
          <h2>การลงทุน</h2>
          <p>ข่าวหุ้น เศรษฐกิจ และเงินโลก สำหรับคนทำงาน</p>
        </div>

        <div className="card" id="podcast">
          <span>03</span>
          <h2>Podcast 1 นาที</h2>
          <p>ฟังสั้น ได้ประเด็น เอาไปคิดต่อได้ทันที</p>
        </div>
      </section>

      <footer>
        “ใช้สมองให้คุ้มค่าหลังเลิกงาน”  
        <br />
        #สมองหลังเลิกงาน
      </footer>
    </div>
  );
}
