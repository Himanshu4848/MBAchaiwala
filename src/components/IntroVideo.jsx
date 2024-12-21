import React from 'react'

import "../styles/intro.scss"
import video from "../assets/introvideo.mp4";

const IntroVideo = () => {
  return (
    <div className="intro">

      <video src={video} muted autoPlay loop controlsList="nodownload"></video>
      <div></div>
    </div>
  )
} 

export default IntroVideo
