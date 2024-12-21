import { useEffect, useState } from "react";
import "./styles/App.scss";
import IntroVideo from "./components/IntroVideo";
import "./styles/intro.scss";
import "./styles/colors.scss";
import "./styles/section.scss";
import Section from "./components/Section";
import freshTopicImg from "./assets/academy.png";
import data from "./data/data.json";
import freshTopic2Img from "./assets/story.png";
import tedTalksimg from "./assets/in-the-news.gif";
import franchiseimg from "./assets/franchise.gif";
import mapimg from "./assets/locations.png";
import coursesimg from "./assets/image2.png";
import albumimg from "./assets/mba-cares.gif";
import baratimg from "./assets/image1.png";
import chaiwalaimg from "./assets/image3.png";
import Footer from "./components/Footer";
import './styles/Footer.scss'
import './styles/mediaQuery.scss'
import Misc from "./components/Misc";
import './styles/misc.scss'

const yellow = "#fff100";
const pink = "#ed1e79";
const white = "#fff";
const brown = "#6d3d0f";

const dotcursor=(e)=>{
  const cursor=document.querySelector(".cursor");
  cursor.style.top=`${e.pageY-14}px`;
  cursor.style.left=`${e.pageX-14}px`;
  const element=e.target;
  if(element.getAttribute("data-cursorpointer")){
    cursor.classList.add("cursorHover")
  }
  
  else{
    cursor.classList.remove("cursorHover")
  }
}

function App() {
  useEffect(()=>{
    window.addEventListener("mousemove",dotcursor);
    return()=>{
      window.removeEventListener("mousemove",dotcursor)

    }

  },)
  return (
    <>
      <IntroVideo />
      <Section
        h3={data.freshTopic.heading}
        text={data.freshTopic.text}
        btnTxt={data.freshTopic.btn}
        imgSrc={freshTopicImg}
        imgSize="70%"
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      <Section
        h3={data.freshTopic2.heading}
        text={data.freshTopic2.text}
        btnTxt={data.freshTopic2.btn}
        imgSrc={freshTopic2Img}
        imgSize="70%"
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      <Section
        h3={data.tedTalks.heading}
        text={data.tedTalks.text}
        btnTxt={data.tedTalks.btn}
        imgSrc={tedTalksimg}
        imgSize="70%"
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      <Section
        h3={data.franchise.heading}
        text={data.franchise.text}
        btnTxt={data.franchise.btn}
        imgSrc={franchiseimg}
        imgSize="70%"
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      <Section
        h3={data.map.heading}
        text={data.map.text}
        imgSrc={mapimg}
        imgSize="70%"
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={brown}
        btnColor={yellow}
        hasBtn={false}
      />

      <Section
        h3={data.courses.heading}
        text={data.courses.text}
        btnTxt={data.courses.btn}
        imgSrc={coursesimg}
        imgSize="30%"
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      <Section
        h3={data.album.heading}
        text={data.album.text}
        btnTxt={data.album.btn}
        imgSrc={albumimg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />{" "}
      {/* Barat */}
      <Section
        h3={data.barat.heading}
        text={data.barat.text}
        btnTxt={data.barat.btn}
        imgSrc={baratimg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />{" "}
      {/* ChaiWala */}
      <Section
        h3={data.chaiwala.heading}
        text={data.chaiwala.text}
        btnTxt={data.chaiwala.btn}
        imgSrc={chaiwalaimg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      <Footer/>
      <Misc/>

    </>
  );
}

export default App;
