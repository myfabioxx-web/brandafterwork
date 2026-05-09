import React from 'react'
import { createRoot } from 'react-dom/client'
import { Brain, Mic, Newspaper, Sparkles, PlayCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './style.css'

function App() {
  const posts = [
    { title: 'ทำไมคนรวยทั่วโลก เริ่มซื้อทองคำอีกครั้ง', tag: 'Money', desc: 'มองเบื้องหลังเงินทุนที่ไหลเข้าทองคำ ในวันที่โลกเต็มไปด้วยความไม่แน่นอน' },
    { title: 'ประเทศไทยกำลังตาม AI ทัน หรือถูกทิ้งไว้ข้างหลัง', tag: 'AI', desc: 'สรุปภาพใหญ่ของ AI เศรษฐกิจ และทักษะคนไทยในวันที่เทคโนโลยีเปลี่ยนเร็ว' },
    { title: 'หุ้น AI ที่คนพูดถึงมากที่สุดตอนนี้', tag: 'Investment', desc: 'เล่าประเด็นหุ้นกระแสแรงแบบเข้าใจง่าย สำหรับคนทำงานที่มีเวลาน้อย' },
  ]

  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <div className="brand">
            <div className="logo"><Brain size={26} /></div>
            <div>
              <strong>สมองหลังเลิกงาน</strong>
              <span>Content • Podcast • Ideas</span>
            </div>
          </div>
          <div className="links">
            <a href="#articles">บทความ</a>
            <a href="#podcast">พอดแคสต์</a>
            <a href="#about">เกี่ยวกับเพจ</a>
          </div>
          <a className="btn" href="#follow">ติดตามเพจ</a>
        </nav>

        <div className="heroGrid">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
            <div className="badge"><Sparkles size={16}/> คอนเทนต์สั้น เข้าใจง่าย ใช้ได้จริง</div>
            <h1>เติมสมองหลังเลิกงาน<br/><span>ด้วยเรื่องเงิน AI และอนาคต</span></h1>
            <p className="lead">พื้นที่สรุปข่าว แนวคิดการลงทุน เทคโนโลยี และเรื่องน่าคิดรอบโลก ให้กลายเป็นบทความและพอดแคสต์สั้น ๆ ที่เข้าใจง่าย</p>
            <div className="actions">
              <a className="btn big" href="#articles">เริ่มอ่านบทความ <ArrowRight size={18}/></a>
              <a className="btn ghost big" href="#podcast"><PlayCircle size={18}/> ฟังพอดแคสต์</a>
            </div>
          </motion.div>

          <motion.div className="feature" initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.7}}>
            <p>FEATURED</p>
            <h2>เรื่องใหญ่ของโลก เล่าให้ง่าย หลังเลิกงาน</h2>
            <div className="miniCards">
              <div><Newspaper/><span>บทความ</span></div>
              <div><Mic/><span>Podcast</span></div>
              <div><Sparkles/><span>Ideas</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="articles" className="section dark">
        <div className="sectionHead">
          <div><p className="yellow">Latest Articles</p><h2>บทความล่าสุด</h2></div>
          <p>คัดประเด็นที่น่าสนใจ แล้วเรียบเรียงใหม่ให้เข้าใจง่าย เหมาะกับคนทำงานที่อยากอัปเดตโลกแบบไม่เสียเวลา</p>
        </div>
        <div className="cards">
          {posts.map((post) => (
            <article className="card" key={post.title}>
              <div className="thumb"></div>
              <span>{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <a href="#">อ่านต่อ →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="podcast" className="section podcast">
        <div>
          <p className="yellow">1-Minute Podcast</p>
          <h2>ฟังจบไว แต่ได้มุมคิดกลับไป</h2>
          <p className="lead small">พอดแคสต์สั้นสำหรับคนมีเวลาน้อย เล่าเรื่องเศรษฐกิจ เทคโนโลยี หุ้น และโลกอนาคตแบบจับประเด็นเร็ว</p>
          <ul>
            <li><PlayCircle/> เล่าเรื่องเงินให้เข้าใจง่ายใน 1 นาที</li>
            <li><PlayCircle/> จับข่าวเทคโนโลยีมาแปลเป็นภาษาคนทำงาน</li>
            <li><PlayCircle/> สรุปแนวคิดธุรกิจ หุ้น และอนาคตแบบไม่ซับซ้อน</li>
          </ul>
        </div>
        <div id="follow" className="followBox">
          <Mic size={46}/>
          <h3>Podcast ใหม่ทุกสัปดาห์</h3>
          <p>ติดตามเพื่อไม่พลาดประเด็นใหม่ ๆ ที่อาจเปลี่ยนวิธีคิดเรื่องงาน เงิน และอนาคต</p>
          <div className="social"><a>▶ YouTube</a><a>f Facebook</a></div>
        </div>
      </section>

      <section id="about" className="section about dark">
        <p className="yellow">About</p>
        <h2>โดย สมองหลังเลิกงาน</h2>
        <p>เพจสำหรับคนที่อยากเข้าใจโลกมากขึ้นหลังเลิกงาน เราเชื่อว่าเรื่องยากอย่างเศรษฐกิจ หุ้น AI และธุรกิจ สามารถเล่าให้สนุก ง่าย และนำไปคิดต่อได้</p>
        <div className="hashtag">#สมองหลังเลิกงาน</div>
      </section>

      <footer>© 2026 สมองหลังเลิกงาน • Content • Podcast • Future Ideas</footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
