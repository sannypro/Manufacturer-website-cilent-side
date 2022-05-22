import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div>
            <h1 className='text-center text-6xl mb-4'>Our Client Says</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:container container lg:grid-cols-3 gap-5'>

                {
                    reviews.map(review => <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <div className="card-body">

                            <p>{review.comment}</p>
                            <div className="flex items-center ">
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                        <img src={review.img} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <small>{review.name}</small>
                                    <p>{review.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;