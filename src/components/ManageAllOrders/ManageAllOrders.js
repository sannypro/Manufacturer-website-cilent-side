import axios from '../api/AxiosPrivate';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { async } from '@firebase/util';

const ManageAllOrders = () => {
    const { data, isLoading, refetch } = useQuery('orders', () => axios.get('http://localhost:5000/orders'))
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(data);
    const orders = data.data
    const handleShipped = async (id, status) => {
        if (!status) {
            await axios.put(`http://localhost:5000/orders/${id}`, { status: 'shipped' })
                .then(response => console.log(response.data))
            refetch()
        }
    }
    const handleCancel = async (id) => {
        await axios.delete(`http://localhost:5000/order/${id}`)
        refetch()
    }
    return (
        <div class="overflow-x-auto">
            <h1 className="text-4xl"> All user : {orders.length}</h1>
            <table class="table table-zebra w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th >Name</th>
                        <th >Status</th>
                        <th >Cancel Order</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders?.length > 0 && orders.map((order, index) => <tr key={order._id}>
                            <th>{index + 1}</th>

                            <td>{order.email}</td>
                            <td>{order.name}</td>
                            {
                                order.payment ? <td><button onClick={() => handleShipped(order._id, order.status)} className={`btn font-bold${!order.status && 'btn btn-warning'} ${order.status && "btn-success"}`}>{order.status ? 'Shipped' : 'Pending'}</button></td> : <td><button className='btn btn-accent'>Unpaid</button></td>
                            }
                            {
                                !order.payment ? <td><button onClick={() => handleCancel(order._id)} className='btn btn-error'>Cancel</button></td> : <td><button className='btn btn-outline' disabled>Cancel</button></td>
                            }



                        </tr>

                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;