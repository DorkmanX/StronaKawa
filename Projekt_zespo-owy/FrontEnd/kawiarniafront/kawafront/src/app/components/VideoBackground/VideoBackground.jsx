import React from "react";
import "./VideoBackground.scss";
import vid1 from "../../static/videos/1.mp4";
import vid2 from "../../static/videos/2.mp4";
import vid3 from "../../static/videos/3.mp4";
import vid4 from "../../static/videos/4.mp4";
import vid5 from "../../static/videos/5.mp4";
import vid6 from "../../static/videos/6.mp4";
import vid7 from "../../static/videos/7.mp4";
import vid8 from "../../static/videos/8.mp4";
const cVIDEOS = [vid1, vid2, vid3, vid4,vid5,vid6,vid7,vid8];
const VideoBackground = ({ indexOfVideo, shouldVideoLoop = true }) => {
  return (
    <video className="videoBG" autoPlay muted loop={shouldVideoLoop}>
      <source src={cVIDEOS[indexOfVideo]} type="video/mp4"></source>
    </video>
  );
};
export default VideoBackground;
