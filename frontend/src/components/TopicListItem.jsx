import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  //set the topipcs in the header
  return (
    <div className="topic-list--item">
      <a href={props.link}>{props.label}</a>
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
