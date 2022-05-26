import axios from '../api/AxiosPrivate';
import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ product, refetch, ordersForModal, orderDeleteRefetch }) => {
    const handleDeleteProduct = async (id) => {
        await axios.delete(`https://fathomless-refuge-70069.herokuapp.com/part/${id}`).then(response => {
            refetch()
            toast.success('Item deleted')
        })

    }
    const handleDeleteOrder = async (id) => {
        await axios.delete(`https://fathomless-refuge-70069.herokuapp.com/order/${id}`).then(response => {
            orderDeleteRefetch()
            toast.success('Item deleted')
        })

    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete?</h3>
                    <p className="py-4">You are deleting : {product?.name}</p>
                    <div className="modal-action">
                        <label htmlFor="delete-confirm-modal" className="btn btn-success">Close</label>
                        <label onClick={() => handleDeleteProduct(product._id)} htmlFor="delete-confirm-modal" className="btn btn-error">Delete</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="delete-confirm-modal-orders" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete?</h3>
                    <p className="py-4">You are deleting : {ordersForModal?.name}</p>
                    <div className="modal-action">
                        <label htmlFor="delete-confirm-modal-orders" className="btn btn-success">Close</label>
                        <label onClick={() => handleDeleteOrder(ordersForModal._id)} htmlFor="delete-confirm-modal-orders" className="btn btn-error">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;