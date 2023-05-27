import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, onTopicClick }) => {
  
  // map the topics object
  const mapTopics = topics.map((topic) => {
    const { title, id } = topic;

    return (
      <TopicListItem
        key={id}
        id={id}
        label={title}
        onTopicClick={onTopicClick}
      />
    );
  });
  return <div className="top-nav-bar--topic-list">{mapTopics}</div>;
};

export default TopicList;
