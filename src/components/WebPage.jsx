import React, { useEffect, useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import filter from "../assets/filter.png";
import demoVideo from "../assets/demoVideo.mp4";
import Public from "../assets/Public.png";
import Icognito from "../assets/Icognito.png";
import Private from "../assets/Private.png";
import bulb from "../assets/finalBulb.jpg";
import brain from "../assets/brain.png";
import { Link } from "react-router-dom";

function App() {
  const youtubeUrl = "https://www.youtube.com/";
  const instaUrl = "https://www.instagram.com/";
  const facebookUrl = "https://www.facebook.com/";
  const twitter = "https://twitter.com/";
  const socialLinkHandler = (url) => {
    window.location.href = url;
  };
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  const [time, setTime] = useState(0);
  const a = [
    "|",
    "G|",
    "Gi|",
    "Giv|",
    "Give|",
    "Gives|",
    "Gives y|",
    "Gives yo|",
    "Gives you|",
    "Gives you p|",
    "Gives you pe|",
    "Gives you per|",
    "Gives you pers|",
    "Gives you perso|",
    "Gives you person|",
    "Gives you persona|",
    "Gives you personal|",
    "Gives you personali|",
    "Gives you personaliz|",
    "Gives you personalize|",
    "Gives you personalized|",
    "Gives you personalized r|",
    "Gives you personalized re|",
    "Gives you personalized res|",
    "Gives you personalized resp|",
    "Gives you personalized respo|",
    "Gives you personalized respon|",
    "Gives you personalized respons|",
    "Gives you personalized response|",
    "Gives you personalized responses|",
    "Gives you personalized response|",
    "Gives you personalized respons|",
    "Gives you personalized respon|",
    "Gives you personalized respo|",
    "Gives you personalized resp|",
    "Gives you personalized res|",
    "Gives you personalized re|",
    "Gives you personalized r|",
    "Gives you personalized|",
    "Gives you personalize|",
    "Gives you personaliz|",
    "Gives you personali|",
    "Gives you personal|",
    "Gives you persona|",
    "Gives you person|",
    "Gives you perso|",
    "Gives you pers|",
    "Gives you per|",
    "Gives you pe|",
    "Gives you p|",
    "Gives you|",
    "Gives yo|",
    "Gives y|",
    "Gives|",
    "Give|",
    "Giv|",
    "Gi|",
    "G|",
    "|",
    "M|",
    "Ma|",
    "Man|",
    "Mana|",
    "Manag|",
    "Manage|",
    "Manages|",
    "Manages y|",
    "Manages yo|",
    "Manages you|",
    "Manages your|",
    "Manages your t|",
    "Manages your ta|",
    "Manages your tas|",
    "Manages your task|",
    "Manages your tasks|",
    "Manages your tasks,|",
    "Manages your tasks, r|",
    "Manages your tasks, re|",
    "Manages your tasks, rem|",
    "Manages your tasks, remi|",
    "Manages your tasks, remin|",
    "Manages your tasks, remind|",
    "Manages your tasks, reminde|",
    "Manages your tasks, reminder|",
    "Manages your tasks, reminders|",
    "Manages your tasks, reminders a|",
    "Manages your tasks, reminders an|",
    "Manages your tasks, reminders and|",
    "Manages your tasks, reminders and c|",
    "Manages your tasks, reminders and ca|",
    "Manages your tasks, reminders and cal|",
    "Manages your tasks, reminders and cale|",
    "Manages your tasks, reminders and calen|",
    "Manages your tasks, reminders and calend|",
    "Manages your tasks, reminders and calenda|",
    "Manages your tasks, reminders and calendar|",
    "Manages your tasks, reminders and calenda|",
    "Manages your tasks, reminders and calend|",
    "Manages your tasks, reminders and calen|",
    "Manages your tasks, reminders and cale|",
    "Manages your tasks, reminders and cal|",
    "Manages your tasks, reminders and ca|",
    "Manages your tasks, reminders and c|",
    "Manages your tasks, reminders and|",
    "Manages your tasks, reminders an|",
    "Manages your tasks, reminders a|",
    "Manages your tasks, reminders|",
    "Manages your tasks, reminder|",
    "Manages your tasks, reminde|",
    "Manages your tasks, remind|",
    "Manages your tasks, remin|",
    "Manages your tasks, remi|",
    "Manages your tasks, rem|",
    "Manages your tasks, re|",
    "Manages your tasks, r|",
    "Manages your tasks,|",
    "Manages your tasks|",
    "Manages your task|",
    "Manages your tas|",
    "Manages your ta|",
    "Manages your t|",
    "Manages your|",
    "Manages you|",
    "Manages yo|",
    "Manages y|",
    "Manages|",
    "Manages y|",
    "Manages yo|",
    "Manages you|",
    "Manages your|",
    "Manages your p|",
    "Manages your pe|",
    "Manages your per|",
    "Manages your pers|",
    "Manages your perso|",
    "Manages your person|",
    "Manages your persona|",
    "Manages your personal|",
    "Manages your personal w|",
    "Manages your personal we|",
    "Manages your personal web|",
    "Manages your personal webs|",
    "Manages your personal websi|",
    "Manages your personal websit|",
    "Manages your personal website|",
    "Manages your personal websit|",
    "Manages your personal websi|",
    "Manages your personal webs|",
    "Manages your personal web|",
    "Manages your personal we|",
    "Manages your personal w|",
    "Manages your personal|",
    "Manages your persona|",
    "Manages your person|",
    "Manages your perso|",
    "Manages your pers|",
    "Manages your per|",
    "Manages your pe|",
    "Manages your p|",
    "Manages your|",
    "Manages you|",
    "Manages yo|",
    "Manages y|",
    "Manages|",
    "Manage|",
    "Manag|",
    "Mana|",
    "Man|",
    "Ma|",
    "M|",
    "|",
    "W|",
    "Wr|",
    "Wri|",
    "Writ|",
    "Write|",
    "Writes|",
    "Writes e|",
    "Writes em|",
    "Writes ema|",
    "Writes emai|",
    "Writes email|",
    "Writes emails|",
    "Writes emails f|",
    "Writes emails fo|",
    "Writes emails for|",
    "Writes emails for y|",
    "Writes emails for yo|",
    "Writes emails for you|",
    "Writes emails for yo|",
    "Writes emails for y|",
    "Writes emails for|",
    "Writes emails fo|",
    "Writes emails f|",
    "Writes emails|",
    "Writes email|",
    "Writes emai|",
    "Writes ema|",
    "Writes em|",
    "Writes e|",
    "Writes|",
    "Write|",
    "Writ|",
    "Wri|",
    "Wr|",
    "W|",
    "|",
  ];
  const sz = a.length;
  const Interval = setInterval(() => {
    setText(a[id]);
    setId((id + 1) % sz);
    clearInterval(Interval);
  }, 350);

  let timer;
  let fixedDate = new Date("2024-05-31 00:00:00").getTime();
  useEffect(() => {
    // eslint-disable-next-line
    timer = setInterval(() => {
      let currentDate = new Date().getTime();
      if (currentDate <= fixedDate) {
        setTime(Math.floor((fixedDate - currentDate) / 1000));
      } else {
        setTime(0);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="header">
        <div className="text-center">TerabhAI</div>
        <div className="headerText text-center align-items-center justify-content-center ">
          What Will you do with your time?
        </div>
        <div className="txt">Bhai {text}</div>
        <div className="d-flex align-items-center justify-content-center TryPlay">
          {time ? (
            <div className="backCounter">
              {Math.floor(time / 86400) > 0
                ? `${Math.floor(time / 86400)} days `
                : ""}
              {Math.floor((time % 86400) / 3600)} hours{" "}
              {Math.floor((time % 3600) / 60)} minutes {Math.round(time % 60)}{" "}
              seconds
              <div className="my-3 text-center Liveplay">Live on playstore</div>
            </div>
          ) : (
            <>
              <div className="tryWeb">
                Try Web <i className="arrow fa-solid fa-arrow-up "></i>
              </div>
              <div className="playstore align-items-center justify-content-evenly">
                Playstore <i className="arrow fa-solid fa-arrow-up "></i>
              </div>
            </>
          )}
        </div>
        <div className="text-center KnowMore">Know more about us</div>
      </div>

      <div>
        <nav className="ModeFilterUse">
          <a href="#modes">Modes</a>
          <a href="#filters">Filters</a>
          <a href="#howUse">How to use</a>
        </nav>
        <section id="modes">
          <h2 className="text-center">Modes</h2>
          <div className="d-flex">
            <div className="imgGroup">
              <div className="d-flex">
                <img className="mobileScreen1a" src={Public} alt="" />
                <img className="mobileScreen1b" src={Icognito} alt="" />
              </div>
              <div>
                <img className="mobileScreen2" src={Private} alt="" />
              </div>
            </div>
            <div className="textGroup">
              <div className="textBox">
                <h3>Public</h3>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  exercitationem, voluptate beatae consequatur blanditiis
                  accusamus voluptatum, sunt sint labore dolorem quibusdam
                  pariatur, asperiores quas repellat similique culpa quia
                  doloremque provident excepturi doloribus nihil illum?
                </div>
              </div>
              <div className="textBox">
                <h3>Private</h3>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  exercitationem, voluptate beatae consequatur blanditiis
                  accusamus voluptatum, sunt sint labore dolorem quibusdam
                  pariatur, asperiores quas repellat similique culpa quia
                  doloremque provident excepturi doloribus nihil illum?
                </div>
              </div>
              <div className="textBox">
                <h3>Incognito</h3>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  exercitationem, voluptate beatae consequatur blanditiis
                  accusamus voluptatum, sunt sint labore dolorem quibusdam
                  pariatur, asperiores quas repellat similique culpa quia
                  doloremque provident excepturi doloribus nihil illum?
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="filters">
          <h2 className="text-center">Filters</h2>
          <div className="d-flex filterTextImg">
            <div className="filterTextGroup">
              <div className="d-flex filterText1">
                <div className="world">
                  <img src={brain} className="brain" alt=""></img>
                </div>
                <div className="d-block">
                  <h3>Always</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque nemo porro rem cum beatae?
                  </p>
                </div>
              </div>

              <div className="d-flex filterText2">
                <div className="world">
                  <i className="fa-regular fa-snowflake"></i>
                </div>
                <div className="d-block">
                  <h3>Frozen</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque nemo porro rem cum beatae?
                  </p>
                </div>
              </div>
              <div className="d-flex filterText1">
                <div className="world">
                  <img src={bulb} className="brain" alt="" />
                </div>
                <div className="d-block">
                  <h3>Active</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque nemo porro rem cum beatae?
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="center">
                <img className="filterImg" src={filter} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="howUse">
          <div className="HTUse justify-content-center align-items-center">
            <h2 className="knowHow">Know How Bhai Works!</h2>
          </div>
          <div className="d-flex">
            <video
              src={demoVideo}
              controls
              autoPlay
              muted
              loop
              className="videoDemo"
            ></video>
            <div className="PersonalizationText">
              <h2>Personalization</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti maiores incidunt quibusdam molestiae aut voluptate
                doloremque molestias dolore, consectetur quo saepe reprehenderit
                suscipit cupiditate dignissimos dolor autem tempora, cumque
                ratione.
              </p>
            </div>
          </div>
        </section>
        <footer>
          <div className="terabhAI">
            <h2 className="text-center">TerabhAI</h2>
            <div className="d-flex footerContent">
              <div className="terabhAIText">
                <div className="email d-flex">
                  <div className="textIcons">
                    <i className="fa-solid fa-envelope" role="button"></i>
                  </div>
                  <div className="mx-3" role="button">
                    <a href="mailto:init.beyondcontrol@gmail.com" className="text-black">init.beyondcontrol@gmail.com
                  </a>
                </div>
                </div>
                <div className="d-flex mt-4 email">
                  <i className="fa-solid fa-location-dot" role="button"></i>
                  <div className="mx-3 cursor-pointer" role="button">
                    Research and Entrepreneurship Park IIT Bhubaneswar
                  </div>
                </div>
              </div>
              <div className="socialMediaLogo d-flex email">
                <div className="socialMediaIcon">
                  <i
                    className="fa-brands fa-youtube"
                    onClick={() => socialLinkHandler(youtubeUrl)}
                  ></i>
                </div>
                <div className="socialMediaIcon">
                  <i
                    className="fa-brands fa-instagram"
                    onClick={() => socialLinkHandler(instaUrl)}
                  ></i>
                </div>
                <div className="socialMediaIcon">
                  <i
                    className="fa-brands fa-facebook-f"
                    onClick={() => socialLinkHandler(facebookUrl)}
                  ></i>
                </div>
                <div className="socialMediaIcon">
                  <i
                    className="fa-brands fa-twitter"
                    onClick={() => socialLinkHandler(twitter)}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer>
          <div className="copyright d-flex">
            <div className="made">
              Made with{" "}
              <i className="fa-solid fa-heart" style={{ color: "red" }}></i> in
              India{" "}
            </div>
            <div className="copy">Copyright/2024</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
