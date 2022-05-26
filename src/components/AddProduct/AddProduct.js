import axios from '../api/AxiosPrivate';
import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const des = e.target.description.value;
        const minimunOrder = e.target.minimumQuantity.value;
        const available = e.target.availeable.value;
        const price = e.target.price.value;
        const img = e.target.img.value
        axios.post('https://fathomless-refuge-70069.herokuapp.com/parts', {
            name, des, minimunOrder, available, price, img
        }).then(response => toast.success("item added"))

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="card-body">
                <h2 className="card-title">Want to Add a Product</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input required type="text" name='name' className="input input-bordered" />
                </div><div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input required type="text" name='description' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Minimun Quantity</span>
                    </label>
                    <input required type="text" name='minimumQuantity' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input required type="text" name='availeable' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input required type="text" name='price' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image Link</span>
                    </label>
                    <input required type="text" name='img' className="input input-bordered" />
                </div>
                <div className="card-actions justify-center">
                    <button type='submit' className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;