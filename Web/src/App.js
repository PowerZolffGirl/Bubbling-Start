import React, { useRef, useState, useEffect } from "react";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";

import youtube from './apis/youtube';
import "./App.css";

import { drawBubble } from "./utilities";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [videos, setVideos] = useState([]);
  const [player, setPlayer] = useState(null);

  const objResult = [];


  const [currentObj, setCurrentObj] = useState('');

  // onReady, onPlayVideo, onPauseVideo는 불러온 유튜브 영상을 조작하기 위한 함수.

  const onReady = (event) => {
    setPlayer(event.target);
  };

  const onPlayVideo = () => {
    player.playVideo();
  };

  const onPauseVideo = () => {
    player.pauseVideo();
  };

  const opts = {
    height: '480',
    width: '900',
    playerVars: {
      autoplay: 1,
    },
  };



  const [selectedVideo, setSelectedVideo] = useState(null);


  
// Youtube API 결과를 불러오기 위한 실험 코드
  const getResult = async () => {
    
    const response = await youtube.get('/search', {
        params: {
            q: 'bts',
        }
    })
    console.log(response);
    setVideos(response.data.items);
};

  const runCoco = async () => {
    const net = await cocossd.load();
    
    setInterval(() => {
      detect(net);
    }, 10);
  };
  
 
  const detect = async (net) => {
   
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
 
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const obj = await net.detect(video);
     
      obj.map((result) => {
        objResult.push(result.class);
      })

    // console.log(objResult);

     setCurrentObj(obj.class);
    
      const ctx = canvasRef.current.getContext("2d");

      drawBubble(videoWidth, obj, ctx)  
     
    }
  };

  useEffect(()=>{runCoco()},[videos]);

  
  return (
    // 아래 주석은 유튜브 영상 불러오기를 위한 코드
    /*<Youtube videoId="*****" opts={opts} onReady={onReady}/>
    <button type="button" onClick={onPlayVideo} disabled={!player}>
      Play
    </button>
    <button type="button" onClick={onPauseVideo} disabled={!player}>
      Pause
    </button>
    */
    <div className="App">
    <header className="App-header">
      <h2 style={{
        position:"absolute",
        marginTop: "20px"        }}>실시간 객체 인식 시도</h2>
      <Webcam
        ref={webcamRef}
        muted={true} 
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 1080,
          height: 900,
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 8,
          width: 1080,
          height: 900,
        }}
      />
     
    </header>
  </div>
  );
}

export default App;
