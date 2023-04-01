import React, { useEffect, useState } from 'react';

const SideCart = ({ readTime ,titles}) => {

let blogs = [];
for(const blog of titles){
    blogs.push(blog);
}

const [time,setTime] =useState(readTime);

    useEffect(() => {
        const getReadTime = localStorage.getItem("readTimes")
        setTime(getReadTime)
    }, [readTime]);

    return (
        <div className='m-5 font-semibold'>
            <div className='mb-5 text-xl'>
                <h2>Spend Time on Read: {time} min</h2>
            </div>
            <div>
                <p className='text-xl'> Bookmarked Blogs </p>
                <div>
                    {
                        blogs.map(singleBlog=>{})
                    }
                </div>
            </div>

        </div>
    );
};

export default SideCart;