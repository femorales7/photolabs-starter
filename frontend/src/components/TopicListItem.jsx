import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, label, onTopicClick}) => {
  const handleClickTopic = () => {
    onTopicClick(id); // Pass the topicId to the handleTopicClick function
  };
  //set the topipcs in the header
  return (
    <div className="topic-list--item">
      <a href="#topics" onClick={handleClickTopic}>
        {label}
      </a>
    </div>
  );
};
//default topic
TopicListItem.defaultProps = {
  id: 1,
  label: "Nature",
  link: "link placeholder",
};
export default TopicListItem;
