import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const PurchaseSinglePage = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const { data: product, isLoading } = useQuery(('parts', id), () => axios.get(`http://localhost:5000/parts/${id}`))
    const products = product?.data
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container sm:container my-20'>
            <div>
                <div className='text-center  mb-4'>
                    <h1>Your Name: {user?.displayName}</h1>
                    <h1>Your Email: {user?.email}</h1>
                </div>
                <div className=''>
                    <div class="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='w-full' src={products.img} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{products.name}</h2>
                            <p>{products.des}</p>
                            <p>Minimum Order Quantity: {products.minimunOrder}</p>
                            <p>Available: {products.available}</p>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-1 justify-center '>
                    <div class="card w-full mt-20 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="text-4xl text-center">Order info</h2>


                            <input type="email" placeholder="email" disabled value={user?.email} class="input input-bordered input-xs w-full " />

                            <input type="text" placeholder="Phone Number" class="input input-bordered input-sm w-full " />

                            <input type="text" placeholder="Type here" class="input input-bordered input-md w-full " />

                            <input type="text" placeholder="Type here" class="input input-bordered input-lg w-full" />
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PurchaseSinglePage;