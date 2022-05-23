import React, { useState } from 'react';

const AddReview = () => {
    const [rating1, setRatin1] = useState('')
    const [rating2, setRatin2] = useState('')
    const [rating3, setRatin3] = useState('')
    const [rating4, setRatin4] = useState('')
    const [rating5, setRatin5] = useState('')
    const handleRating1 = () => {
        setRatin1('1')
    }
    const handleRating2 = () => {
        setRatin2('2')
    }

    const handleRating3 = () => {
        setRatin3('3')
    }
    const handleRating4 = () => {
        setRatin4('4')
    }
    const handleRating5 = () => {
        setRatin5('5')
    }
    return (
        <div className='container sm:container'>
            <div class="hero ">
                <div class="hero-content ">

                    <form class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Comment</span>
                                </label>
                                <input type="text" placeholder="Comment" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Rating</span>
                                </label>
                                <div >
                                    <button onClick={handleRating1} className='btn btn-outline btn-success btn-xs ml-2'>1</button>
                                    <button onClick={handleRating2} className='btn btn-outline btn-success btn-xs ml-2'>2</button>
                                    <button onClick={handleRating3} className='btn btn-outline btn-success btn-xs ml-2'>3</button>
                                    <button onClick={handleRating4} className='btn btn-outline btn-success btn-xs ml-2'>4</button>
                                    <button onClick={handleRating5} className='btn btn-outline btn-success btn-xs ml-2'>5</button>
                                </div>

                            </div>
                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-primary">Add review</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;