import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import userImg from "../../../../Assets/img/user.png"

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='container sm:conatiner'>
            <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src={userImg} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">User Name: {user?.displayName}</h2>
                    <h2 class="card-title">User Email: {user?.email}</h2>
                    <h2 class="card-title">User address: {user?.address}</h2>
                    <h2 class="card-title">User Phone: {user?.phone}</h2>
                </div>
            </div>
            <div className='flex justify-center my-10'>
                <div class="card w-4xl bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Want to Update Profile</h2>

                        <div class="card-actions justify-center">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;