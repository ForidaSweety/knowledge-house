import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-slate-200 p-4">
        <div className="flex-1">
          <a className="normal-case text-2xl ms-5 font-semibold">Knowledge House</a>
        </div>
        <div className="flex-none text-xl ">
            <p className='me-5'>Careers</p>
            <p className='me-5'>Blogs</p>
            <p >Login</p>
        </div>
      </div>  
    );
};

export default Header;