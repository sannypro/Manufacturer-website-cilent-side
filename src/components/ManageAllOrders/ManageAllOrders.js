import axios from '../api/AxiosPrivate';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';

const ManageAllOrders = () => {
    const [ordersForModal, setOrdersForModal] = useState(null)
    const { data, isLoading, refetch } = useQuery('orders', () => axios.get('http://localhost:5000/orders'))
    if (isLoading) {
        return <Loading></Loading>
    }

    const orders = data.data
    const handleShipped = async (id, status) => {
        if (!status) {
            await axios.put(`http://localhost:5000/orders/${id}`, { status: 'shipped' })
                .then(response => console.log(response.data))
            refetch()
            toast.success("items shipped")
        }
    }
    const handleCancel = async (id) => {

        refetch()
    }
    return (
        <div class="overflow-x-auto">
            <h1 className="text-4xl"> All Orders : {orders.length}</h1>
            <table class="table table-zebra w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th >Name</th>
                        <th >Status</th>
                        <th >Action</th>
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
                                order.payment ? <td><button className={`btn font-bold${!order.status && 'btn btn-warning'} ${order.status && "btn-success"}`}>{order.status ? 'Shipped' : 'Pending'}</button></td> : <td><button className='btn btn-accent'>Unpaid</button></td>
                            }
                            {
                                <td><button className='btn btn-success' disabled={!order.payment || order.status} onClick={() => handleShipped(order._id, order.status)}> Ship Now</button></td>
                            }
                            {
                                !order.payment ? <td><label for="delete-confirm-modal-orders" onClick={() => setOrdersForModal(order)} className='btn btn-error'>Cancel</label></td> : <td><button className='btn btn-outline' disabled>Cancel</button></td>
                            }



                        </tr>

                        )
                    }
                    {
                        ordersForModal && <DeleteConfirmModal orderDeleteRefetch={refetch} ordersForModal={ordersForModal}></DeleteConfirmModal>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;