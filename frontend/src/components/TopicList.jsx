import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const mapTopics = props.topics.map((topics) => {
    return <TopicListItem 
    key={topics.id}
    id={topics.id}
    label = {topics.label}
    link= {topics.link} />;
  });
  return <div className="top-nav-bar--topic-list">{mapTopics}</div>;
};

TopicList.defaultProps = {
  topics: [
    {
      id: 1,
      label: "Nature",
      link: "link placeholder",
    },
    {
      id: 2,
      label: "Food",
      link: "link placeholder",
    },
    {
      id: 3,
      label: "People",
      link: "link placeholder",
    },
  ],
};
export default TopicList;
