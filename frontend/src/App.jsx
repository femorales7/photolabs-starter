import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicListItem from './components/TopicListItem';

import './App.scss';
import TopicList from './components/TopicList';

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    <TopicList/>
    {/* {Array.from(Array(3)).map((_, index) => <TopicListItem key={index}/>)} */}
   
    {/* <TopicListItem/> */}
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    {/* <PhotoListItem/> */}
    <PhotoList/>
   
  </div>
)

export default App