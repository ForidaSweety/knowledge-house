import React, { useState } from 'react';
import Card from './component/Card/Card';
import Header from './component/Header/Header';
import SideCart from './component/SideCart/SideCart';
import SingleData from './component/SingleData/SingleData';

const App = () => {
 
  const [readTime,setReadTime]=useState("");

const handleReadTime =(time)=>{
const previousReadTime = JSON.parse(localStorage.getItem("readTimes"));
if(previousReadTime){
  const sum =previousReadTime + time;
  localStorage.setItem("readTimes",sum);
  setReadTime(sum);
}
else{
localStorage.setItem("readTimes",time);
setReadTime(time);

}
};

  return (
    <div>
     <div>
     <Header></Header>
     </div>
    <div className="main flex gap-4">
      <div className="container w-[70%] ">
      <Card handleReadTime={handleReadTime}></Card>
      </div>
      <div className="sideCart w-[30%] bg-slate-200">
        <SideCart readTime={readTime}></SideCart>
      </div>
    </div>
     
     
    </div>
  );
};

export default App;