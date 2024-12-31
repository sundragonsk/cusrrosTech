
import './App.css'

function App() {
  return (
    <div className="container">
      {/* 导航栏 */}
      <header>
        <div className="logo">XX</div>
        <nav>
          <a href="#about">关于</a>
          <a href="#projects">项目</a>
          <a href="#skills">技能</a>
          <a href="#contact">联系我</a>
        </nav>
      </header>

      {/* 主要内容区域 */}
      <main>
        <div className="content">
          <h1 className="title">你好，我是XX</h1>
          <p className="subtitle">全栈开发工程师 / UI设计师</p>
          
          {/* 社交链接 */}
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:example@email.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
