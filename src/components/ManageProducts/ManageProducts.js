import axios from '../api/AxiosPrivate';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { async } from '@firebase/util';

const ManageProducts = () => {
    const { data, isLoading, refetch } = useQuery("parts", () => axios.get('http://localhost:5000/parts'))
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/part/${id}`)
        refetch()
    }
    const products = data.data
    return (
        <div className='container'>
            <div class="overflow-x-auto">
                <h1 className="text-4xl"> All user : </h1>
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th >Minimun Order</th>
                            <th >Available</th>
                            <th >Price</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.length > 0 && products.map((product, index) => <tr key={product._id}>
                                <th>{index + 1}</th>

                                <td>{product.name}</td>
                                <td>{product.minimunOrder}</td>
                                <td>{product.available}</td>
                                <td>{product.price}</td>
                                <td><button onClick={() => handleDelete(product._id)} className='btn btn-error'>Delete Product</button></td>
                            </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;