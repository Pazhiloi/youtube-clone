import React from 'react';
import "./RecommendedVideos.css";
import VideoCard from './VideoCard';
const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://scientificrussia.ru/images/1/10t1-full.jpg"
          channel="Marcus Aurelius"
          image="https://scientificrussia.ru/images/1/10t1-full.jpg"
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://scientificrussia.ru/images/1/10t1-full.jpg"
          channel="Marcus Aurelius"
          image="https://scientificrussia.ru/images/1/10t1-full.jpg"
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://scientificrussia.ru/images/1/10t1-full.jpg"
          channel="Marcus Aurelius"
          image="https://scientificrussia.ru/images/1/10t1-full.jpg"
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://scientificrussia.ru/images/1/10t1-full.jpg"
          channel="Marcus Aurelius"
          image="https://scientificrussia.ru/images/1/10t1-full.jpg"
        />
        
      </div>
    </div>
  );
};

export default RecommendedVideos;