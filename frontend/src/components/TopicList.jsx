import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics}) => {
  
  const mapTopics =topics.map((topic) => {
    const {title, id} = topic;
   
    
    return <TopicListItem 
    key={id}
    id={id}
    label = {title}
    // link= {link} 
    />;
  });
  return <div className="top-nav-bar--topic-list">
    {mapTopics}
    
    </div>;
};


export default TopicList;
