import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = ({handleReadTime}) => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDatas(data))

    }, []);
    return (
        <div>
            <div className="card-container grid sm:grid-cols-1 lg:grid-cols-2 ">
                {
                    datas.map(singleValue => 
                    <SingleData handleReadTime={handleReadTime}
                    key={singleValue.id} 
                    singleValue ={singleValue}></SingleData> )
                     }

            </div>
        </div>

    );
};
export default Card;