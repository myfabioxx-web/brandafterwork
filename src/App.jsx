import "./index.css";

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="brand">สมองหลังเลิกงาน</div>
        <div className="nav-links">
          <a href="#latest">Latest</a>
          <a href="#path">Topics</a>
          <a href="#about">About</a>
          <a href="#follow">Follow</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="badge">AI • MONEY • FUTURE</span>
          <h1>ใช้สมองให้คุ้มค่า หลังเลิกงาน</h1>
          <p className="subtitle">
            สรุปข่าว AI หุ้น ธุรกิจ และอนาคตโลก ให้เข้าใจง่าย
            สำหรับคนทำงานที่อยากโตขึ้นทุกวัน
          </p>

          <div className="buttons" id="follow">
            <a href="https://www.youtube.com/@Brainafterwork" target="_blank">YouTube</a>
            <a href="https://www.facebook.com/share/1HEJKHh88V/" target="_blank">Facebook</a>
            <a href="https://tiktok.com/@brainafterw0rk" target="_blank">TikTok</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="brain-orb">🧠</div>
          <p>AI News • Investment • Mindset</p>
        </div>
      </section>

      <section className="proof">
        <div>
          <strong>Podcast 1 นาที</strong>
          <span>ฟังสั้น ได้ประเด็น</span>
        </div>
        <div>
          <strong>บทความอ่านง่าย</strong>
          <span>ข่าวยาก เล่าให้ง่าย</span>
        </div>
        <div>
          <strong>Shorts / Reels</strong>
          <span>คอนเทนต์ไว สำหรับคนเวลาน้อย</span>
        </div>
      </section>

      <section className="latest" id="latest">
        <div className="section-head">
          <span>Latest Content</span>
          <h2>คอนเทนต์ล่าสุด</h2>
          <p>พื้นที่รวมเรื่อง AI การเงิน หุ้น และอนาคตโลก ที่เล่าให้เข้าใจง่ายหลังเลิกงาน</p>
        </div>

        <div className="content-grid">
          <article className="feature-card">
            <span className="tag">Featured</span>
            <h3>ประเทศไทยกำลังตาม AI ทัน หรือถูกทิ้งไว้ข้างหลัง</h3>
            <p>บทวิเคราะห์สั้น ๆ ว่า AI จะเปลี่ยนงาน เศรษฐกิจ และทักษะคนไทยอย่างไร</p>
          </article>

          <article className="mini-card">
            <span>AI</span>
            <h3>เครื่องมือ AI ที่คนทำงานควรรู้</h3>
          </article>

          <article className="mini-card">
            <span>Money</span>
            <h3>ทำไมคนรวยทั่วโลกเริ่มซื้อทองคำอีกครั้ง</h3>
          </article>

          <article className="mini-card">
            <span>Stocks</span>
            <h3>หุ้น AI ที่คนพูดถึงมากที่สุดตอนนี้</h3>
          </article>
        </div>
      </section>

      <section className="path" id="path">
        <div className="section-head">
          <span>Choose Your Path</span>
          <h2>เลือกเส้นทางที่อยากอัปเดต</h2>
        </div>

        <div className="path-grid">
          <div className="path-card">
            <b>01</b>
            <h3>สาย AI</h3>
            <p>อัปเดตเครื่องมือ เทรนด์ และการเปลี่ยนแปลงของโลกทำงาน</p>
          </div>
          <div className="path-card">
            <b>02</b>
            <h3>สายหุ้นและการเงิน</h3>
            <p>ข่าวหุ้น เศรษฐกิจ ทองคำ และการลงทุนที่คนทำงานควรรู้</p>
          </div>
          <div className="path-card">
            <b>03</b>
            <h3>สายพัฒนาตัวเอง</h3>
            <p>แนวคิด จิตวิทยา และ mindset สำหรับคนอยากโตหลังเลิกงาน</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-box">
          <span>About</span>
          <h2>สมองหลังเลิกงาน คือพื้นที่เติมความรู้หลังวันทำงาน</h2>
          <p>
            เราเชื่อว่าเรื่องใหญ่ของโลก ไม่จำเป็นต้องเล่ายาก
            แค่สรุปให้ถูกจุด เรียบเรียงให้ง่าย และทำให้คนธรรมดาเอาไปคิดต่อได้จริง
          </p>
        </div>
      </section>

      <footer>
        <p>โดย สมองหลังเลิกงาน</p>
        <p>#สมองหลังเลิกงาน</p>
      </footer>
    </div>
  );
}
