import React from 'react';
import Card from './component/Card/Card';
import Header from './component/Header/Header';
import SideCart from './component/SideCart/SideCart';
import SingleData from './component/SingleData/SingleData';

const App = () => {



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
        <SideCart></SideCart>
      </div>
    </div>
     
     
    </div>
  );
};

export default App;