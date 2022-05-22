import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const Part = () => {
    const { data: parts } = useQuery('parts', () => fetch('http://localhost:5000/parts').then(res => res.json()))
    console.log(parts);
    return (
        <div className=' grid lg:grid-cols-3 grid-cols-1 gap-5 pr-[-32px] '>
            {
                parts?.map(p => <div key={p._id} class="card lg:max-w-full  bg-base-100 shadow-xl">
                    <figure><img src={p?.img} className="w-1/2" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{p.name}</h2>
                        <p>{p.des}</p>
                        <p className='font-bold'>Minimum Order Quantity: {p.minimunOrder}</p>
                        <p className='font-bold'>Available Order Quantity: {p.available}</p>

                        <div class="card-actions justify-start">
                            <button class="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Part;