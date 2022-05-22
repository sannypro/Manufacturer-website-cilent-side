import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const email = user?.email
    const { data: orders, isLoading, refetch } = useQuery('order', () => axios.get(`http://localhost:5000/order?email=${email}`))
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/order/${id}`).then(response => refetch())
    }
    return (
        <div className=' grid lg:grid-cols-3 grid-cols-1 gap-5 pr-[-32px] '>
            {
                orders.data.map(product => <div key={product._id} className="card lg:max-w-full  bg-base-100 shadow-xl">
                    <figure><img src={product?.img} className="w-1/2" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.name}</h2>
                        <p>{product.des}</p>
                        <p className='font-bold'>Quantity: {product.quantity}</p>
                        <p className='font-bold'>Price: {product.price}</p>
                        <button onClick={() => handleDelete(product._id)} class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Delete</button>

                    </div>
                </div>)
            }
        </div>
    );
};

export default MyOrders;