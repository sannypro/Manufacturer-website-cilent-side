import axios from '../api/AxiosPrivate';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const [rating, setRating] = useState('')
    const [ratingSelected, setRatingSelected] = useState('');
    const [addbtn, setAddBtn] = useState(false);

    const handleRating1 = () => {
        setRating('1')
        setRatingSelected('1')
    }
    const handleRating2 = () => {
        setRating('2')
        setRatingSelected('2')
    }

    const handleRating3 = () => {
        setRating('3')
        setRatingSelected('3')
    }
    const handleRating4 = () => {
        setRating('4')
        setRatingSelected('4')
    }
    const handleRating5 = () => {
        setRating('5')
        setRatingSelected('5')
    }
    const handleSubmit = e => {
        e.preventDefault()
        const review = {
            name: e.target.name.value,
            comment: e.target.comment.value,
            rating: rating
        }
        if (addbtn) {
            axios.post('https://fathomless-refuge-70069.herokuapp.com/review', review).then(response => {
                toast.success("Review added")
                setAddBtn(false)
            })
        }
    }
    return (
        <div className='container sm:container'>
            <div className="hero ">
                <div className="hero-content ">

                    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' value={user?.displayName} readOnly disabled className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <input type="text" name='comment' placeholder="Comment" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating : {ratingSelected}</span>
                                </label>
                                <div >

                                    <button onClick={handleRating1} className='btn btn-outline btn-success btn-xs ml-2'>1</button>
                                    <button onClick={handleRating2} className='btn btn-outline btn-success btn-xs ml-2'>2</button>
                                    <button onClick={handleRating3} className='btn btn-outline btn-success btn-xs ml-2'>3</button>
                                    <button onClick={handleRating4} className='btn btn-outline btn-success btn-xs ml-2'>4</button>
                                    <button onClick={handleRating5} className='btn btn-outline btn-success btn-xs ml-2'>5</button>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button onClick={() => setAddBtn(true)} type='submit' className="btn btn-primary">Add review</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;