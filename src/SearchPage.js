import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://scientificrussia.ru/images/1/10t1-full.jpg"
        channel="Marcus Aurelius"
        verified
        subs="900k"
        noOfVideos={1500}
        description="Meditations"
      />

      <hr />

      <VideoRow
        views={"1.4M"}
        subs={"659k"}
        description={"This is a lion hunt"}
        timestamp={"59 seconds ago"}
        channel={"Lion"}
        title={"let's hunt"}
        image={
          "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg"
        }
      />
      <VideoRow
        views={"1.4M"}
        subs={"659k"}
        description={"This is a lion hunt"}
        timestamp={"59 seconds ago"}
        channel={"Lion"}
        title={"let's hunt"}
        image={
          "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg"
        }
      />
      <VideoRow
        views={"1.4M"}
        subs={"659k"}
        description={"This is a lion hunt"}
        timestamp={"59 seconds ago"}
        channel={"Lion"}
        title={"let's hunt"}
        image={
          "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg"
        }
      />
      <VideoRow
        views={"1.4M"}
        subs={"659k"}
        description={"This is a lion hunt"}
        timestamp={"59 seconds ago"}
        channel={"Lion"}
        title={"let's hunt"}
        image={
          "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg"
        }
      />
    </div>
  );
};

export default SearchPage;
