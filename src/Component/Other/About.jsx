import React from 'react';
import { useLoaderData } from 'react-router-dom';

const About = () => {
    const data = useLoaderData()
    console.log(data)
    const {_id,picture,age,college,country,email,gender,name,phone,upazila,village,District} =data
    return (
        <div>
            <div>
                <p>{picture}</p>
                <p>{age}</p>
                <p>{college}</p>
                <p>{country}</p>
                <p>{email}</p>
                <p>{gender}</p>
                <p>{name}</p>
                <p>{phone}</p>
                <p>{upazila}</p>
                <p>{village}</p>
                <p>{District}</p>
            </div>
        </div>
    );
};

export default About;