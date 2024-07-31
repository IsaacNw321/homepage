import './App.css'
import mailIcon from './images/mail.png';
import whatsappIcon from './images/whatsapp.png';
import githubIcon from './images/github.png';
import englishTest1 from './images/Englishtest1.png';
import englishTest2 from './images/Englishtest2.png';
import frontStack from './images/front2.jpg';
import gitAndGithub from './images/gitandgithub.jpg';
import nextAndSocket from './images/nextandsocket.png';
import back from './images/back.jpg';
function App() {
 

  return (
    <>
      <main>
        <div className="resume">
          <div className="photo"></div>
          <div className="personalData">
            <h1 className='name'>CapiDev</h1>
            <div className="info">
              <img src={mailIcon} alt="email-icon" />
              <p>isaac.pereira.50159@gmail.com</p>
              <img src={whatsappIcon} alt="whatsapp-icon" />
              <p>Phone: +58 4162572870</p>
              <img src={githubIcon} alt="github-icon" />
              <a href="https://github.com/IsaacNw321">My Portfolio</a>
            </div>
          </div>
          <span></span>
          <h2>Skills</h2>
          <div className="skills">
            <div className="imageEnglish">
              <p>English </p>
              <img src={englishTest1} alt="Read-and-talking" />
              <img src={englishTest2} alt="Listening" />
            </div>
            <div className="frontStack">
              <p>Developing front end components collaborating on freelance projects </p>
              <img src={frontStack} alt="Front-stack" />
              <img src={gitAndGithub} alt="git-github" />
            </div>
            <div className="currently">
              <p>
                Currently working on Angels App with Next.js.
              </p>
              <img src={nextAndSocket} alt="N-S" />
            </div>
            <div className="back">
              <p>
                Proficient in React, JavaScript, CSS, HTML, Git, Express, Node.js, and PostgreSQL.
              </p>
              <img src={back} alt="back" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
