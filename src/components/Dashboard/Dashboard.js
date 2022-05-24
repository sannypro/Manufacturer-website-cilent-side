import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer  drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side colo-base-200">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to='my-profile'>My Profile</Link></li>
                    <li><Link to='add-review'>Add Review</Link></li>
                    <li><Link to='my-orders'>My Orders</Link></li>
                    {
                        admin && <li><Link to='user'>All User</Link></li>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;