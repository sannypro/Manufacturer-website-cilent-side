import axios from '../api/AxiosPrivate';
import React from 'react';

const DeleteConfirmModal = ({ product, refetch }) => {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/part/${id}`)
        refetch()
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete?</h3>
                    <p class="py-4">You are deleting : {product.name}</p>
                    <div class="modal-action">
                        <label for="delete-confirm-modal" class="btn btn-success">Close</label>
                        <label onClick={() => handleDelete(product._id)} for="delete-confirm-modal" class="btn btn-error">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;