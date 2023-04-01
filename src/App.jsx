import React, { useState } from 'react';
import Card from './component/Card/Card';
import Header from './component/Header/Header';
import SideCart from './component/SideCart/SideCart';
import SingleData from './component/SingleData/SingleData';

const App = () => {

  const [readTime, setReadTime] = useState("");
  const [titles, setTitles] = useState([]);

  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTimes"));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("readTimes", sum);
      setReadTime(sum);
    }
    else {
      localStorage.setItem("readTimes", time);
      setReadTime(time);
    }
  };

  const handleBlogTitle = (blog) => {
    const newBlogs = [...titles, blog];
    setTitles(newBlogs);
  };

  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="main flex gap-4">
        <div className="container w-[70%] ">
          <Card handleReadTime={handleReadTime} handleBlogTitle={handleBlogTitle}></Card>
        </div>
        <div className="sideCart w-[30%] bg-slate-200">
          <SideCart readTime={readTime} titles={titles} ></SideCart>
        </div>
      </div>


    </div>
  );
};

export default App;