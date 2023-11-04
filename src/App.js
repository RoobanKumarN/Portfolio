import React, { useState, useEffect, useRef } from "react";
//import  ReactDOM  from "react";
import "./App.css";
import Menu from "./Menu";
import Cups from "./Cups";

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img className="log" src="./img/Logo.png" alt="" />
          <p> Rooban kumar | Portfolio</p>
        </div>
        <ul
          className="menu"
          data-visible={isMenuVisible ? "true" : "false"}
          /*className={`menu ${isMenuVisible ? "visible" : ""}`}*/
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <i
          className={`fa-solid fa-${isMenuVisible ? "xmark" : "bars"}`}
          onClick={toggleMenu}
          style={{
            position: "relative",
          }}
        ></i>
      </nav>
    </header>
  );
}
function Hero() {
  return (
    <div>
      <img className="background" src="./img/P-background.png" alt="" />
      <div className="para">
        Hi,I'm Rooban
        <p>This is my first project My Personal portfolio</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      About Me
      <p>
        I'm a recent graduate with a passion for web development. I have a
        strong foundation in HTML, CSS, Figma, JavaScript and React and am eager
        to learn and contribute in a dynamic team environment. During my
        studies, I worked on various projects that allowed me to hone my skills
        in creating responsive and user-friendly websites. I'm excited to apply
        my knowledge and continue to grow as a developer.
      </p>
      <img className="bean-branch" src="img/Bean_branch.png" alt="" />
    </div>
  );
}

function Work() {
  return (
    <>
      <div id="work">
        My work
        <p>
          My portfolio showcases a collection of real-world projects that
          highlight my diverse technical skills and programming proficiency.
          Each project is succinctly described and includes links to code
          repositories, offering a clear demonstration of my ability to apply my
          knowledge effectively. It show my knowledge in varies technology and
          my programming ability
        </p>
        <img class="ice-coffee-2" src="img/Ice_coffee_2.png" alt="" />
      </div>
    </>
  );
}

function Main() {
  const menuItems = [
    {
      card: "img/Menu.png",
      img: "img/portfolio.png",
      github: "https://github.com/RoobanKumarN",
      text: "My Personal portfolio <br/><br/> created using React JS and JS",
    },
    {
      card: "img/Menu.png",
      img: "img/Maker.png",
      github: "https://github.com/RoobanKumarN/Marker",
      text: "Marker <br/><br/> Save websites, WebPages,<br/>and can take notes",
    },
    {
      card: "img/Menu.png",
      //img: "img/Maker.png",
      github: "https://github.com/RoobanKumarN",
      text: "Online shopping store <br/><br/>  Under development process",
    },
  ];

  return (
    <div className="Cont">
      <Menu menuItems={menuItems} />
    </div>
  );
}

function Skill() {
  return (
    <div id="skill">
      <p class="Skill">My Skill</p>
      <img className="sugar" src="img/sugar.png" alt="" />
    </div>
  );
}

function Cup() {
  const CupsItems = [
    {
      cup: "img/Cup.png",
      //leaf: "img/1.png",
      lan: "img/html.png",
    },
    {
      cup: "img/Cup.png",
      //leaf: "img/1.png",
      lan: "img/css.png",
    },
    {
      cup: "img/Cup.png",
      //leaf: "img/1.png",
      lan: "img/Figma.png",
    },
    {
      cup: "img/Cup.png",
      //leaf: "img/1.png",
      lan: "img/javascript.png",
    },
    {
      cup: "img/Cup.png",
      //leaf: "img/1.png",
      lan: "img/react.png",
    },
    {
      cup: "img/Cup.png",
      //leaf2: "img/2.png",
      lan: "img/git.png",
    },
  ];

  return (
    <div className="cup">
      <Cups CupsItems={CupsItems} />
    </div>
  );
}
function Contact() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxMz9NyWfjoqH1ukQxx1jF-4ukDaQiqYEkUexPQBs-IKdPa7xZ51YysQ-Ni6HWqQeKe/exec";
  const formRef = useRef(null);
  const msgRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    const msg = msgRef.current;

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            msg.innerHTML = "Message sent Successfully";
            setTimeout(function () {
              msg.innerHTML = "";
            }, 2500);
            form.reset();
          })
          .catch((error) => console.error("Error!", error.message));
      });
    }
  }, []);
  return (
    <div className="clear">
      <div id="contact"></div>

      <div class="contact-me">
        Contact Me
        <div className="details">
          <div class="yourName">
            Your Name
            <form>
              <input
                type="text"
                name="Name"
                placeholder="Ex:Rooban kumar"
                required
              />
            </form>
          </div>
          <div class="Mail">
            Your Mail Id
            <form>
              <input
                type="email"
                name="email"
                placeholder="Ex:roobannlight@gmail.com"
                required
              />
            </form>
          </div>
          <div class="massage">
            {" "}
            Your Massage
            <form>
              <textarea
                name="Message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
              <div>
                <form ref={formRef} name="submit-to-google-sheet">
                  <button type="Submit" class="btn-btn2">
                    Submit
                  </button>
                </form>
                <div ref={msgRef} id="msg"></div>
              </div>
            </form>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/in/rooban-kumar-6aab411a6"
          class="linkedin"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:roobannlight@gmail.com" class="email">
          <i class="fa-solid fa-paper-plane"></i>
        </a>
      </div>
    </div>
  );
}
function Message() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxMz9NyWfjoqH1ukQxx1jF-4ukDaQiqYEkUexPQBs-IKdPa7xZ51YysQ-Ni6HWqQeKe/exec";
  const formRef = useRef(null);
  const msgRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    const msg = msgRef.current;

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            msg.innerHTML = "Message sent Successfully";
            setTimeout(function () {
              msg.innerHTML = "";
            }, 5000);
            form.reset();
          })
          .catch((error) => console.error("Error!", error.message));
      });
    }
  }, []);

  return (
    <div>
      <form ref={formRef} name="submit-to-google-sheet">
        <button type="Submit" class="btn-btn2">
          Submit
        </button>
      </form>
      <div ref={msgRef} id="msg"></div>
    </div>
  );
}
function portfolio() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Work />
      <Main />
      <Skill />
      <Cup />
      <Contact />
    </>
  );
}
export default portfolio;
