import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleData = ({singleValue ,handleReadTime,handleBlogTitle}) => {
    // console.log(props.singleValue);
    // const { imge, date, author, name, readTime, spendTime, title } = props.singleValue;

    return (
        <div>
            {/* <h1>Title:{props?.singleValue?.title} </h1> */}
         <div className="single-card m-6 h-400 w-400">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={singleValue.imge}
                        alt="" /></figure>
                    <div className="card-body">
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <div className=''>
                                    <img className='rounded-full h-10 w-10' src={singleValue.author} alt="" />
                                    
                                </div>
                                <div>
                                    <h4>{singleValue.name}</h4>
                                    <p>{singleValue.date}</p>
                                </div>
                            </div>
                            <div className='inline-flex '>
                                <p>{singleValue.readTime} min read</p>
                                <button onClick={()=>handleBlogTitle(singleValue.title)} className="btn btn-ghost btn-xs "><FontAwesomeIcon icon={faBookBookmark} /></button>
                            </div>
                        </div>
                        <h2 className="card-title mt-3">{singleValue.title}</h2>

                        <div className='mt-5'>
                            <a onClick={()=>handleReadTime(singleValue.readTime)} className="link">Mark as read</a>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default SingleData;