import "./index.css";

function App() {
  return (
    <main className="site">
      <section className="hero">
        <div className="glow glow1"></div>
        <div className="glow glow2"></div>

        <div className="content">
          <p className="badge">AI • การลงทุน • ข่าวโลก • ธุรกิจ • พัฒนาตัวเอง</p>

          <h1>
            สมอง
            <span>หลังเลิกงาน</span>
          </h1>

          <p className="subtitle">
            สรุปข่าวใหญ่ เข้าใจง่าย หลังเลิกงาน  
            สำหรับคนที่อยากใช้สมองให้คุ้มค่าในโลกที่เปลี่ยนเร็ว
          </p>

          <div className="buttons" id="follow">
            <a href="https://www.facebook.com/share/1HEJKHh88V/" target="_blank">
              Facebook
            </a>
            <a href="https://www.youtube.com/@Brainafterwork" target="_blank">
              YouTube
            </a>
            <a href="https://www.tiktok.com/@brainafterw0rk" target="_blank">
              TikTok
            </a>
          </div>
        </div>

        <div className="brain-card">
          <div className="circle">
            <div className="brain">🧠</div>
          </div>
          <p>คิด วิเคราะห์ ตัดสินใจ อย่างมีระบบ</p>
        </div>
      </section>

      <section className="cards">
        <div className="card">
          <h3>AI & เทคโนโลยี</h3>
          <p>เข้าใจอนาคต ก่อนที่มันจะกลายเป็นเรื่องปกติ</p>
        </div>

        <div className="card">
          <h3>การลงทุน</h3>
          <p>เล่าเรื่องหุ้น เงิน และเศรษฐกิจให้เข้าใจง่าย</p>
        </div>

        <div className="card">
          <h3>Podcast 1 นาที</h3>
          <p>ฟังสั้น แต่ได้มุมคิดกลับไปต่อยอด</p>
        </div>
      </section>

      <footer>
        โดย สมองหลังเลิกงาน | #สมองหลังเลิกงาน
      </footer>
    </main>
  );
}

export default App;
