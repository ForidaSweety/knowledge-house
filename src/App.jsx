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
      <div className='m-8 bg-orange-50 p-5'>
        <div>
          <p>1. Difference between props and state?</p>
          <p>Ans: Props used to pass data from a parent component to a child component. Props are immutable, which means they cannot be changed from inside the component that receives them. A component can receive props and use them to render dynamic content, but it cannot modify them.
            <br />
            State used to manage data that is internal to a component. State is mutable, which means it can be changed from within the component. When the state of a component changes, React will re-render the component to reflect the updated state.
          </p>
        </div>
        <br />
        <div>
          <p>2. How does useState work?</p>
          <p>Ans: useState is a Hook in React that allows you to add state to a functional component. It returns an array with two elements: the current state value and a function to update the state value.The process of using useState involves importing the Hook, declaring a state variable and its initial value, using the state variable and update function in your component, and allowing React to re-render the component when the state value is updated.</p>
        </div>
        <br />


      </div>

    </div>
  );
};

export default App;