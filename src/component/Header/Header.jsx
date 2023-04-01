import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-slate-200 p-3 mb-8">
        <div className="flex-1">
          <a className="normal-case text-2xl ms-5 font-semibold">Knowledge House</a>
        </div>
        <div className="flex-none text-xl ">
            <img className='rounded-full h-10 w-10 me-4' src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
      </div>  
    );
};

export default Header;