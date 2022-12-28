import React from 'react';

const Mediadata = ({ data }) => {
    const{image,text}=data
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie"/></figure>
                <div className="card-body">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Mediadata;