import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logOut = e => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }
    return (
        <div className="navbar text-white bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        {
                            user && <li><Link to='dashboard'>Dashboard</Link></li>
                        }
                        <li><Link to='blogs'>Blogs</Link></li>
                        <li><Link to='my-portfolio'>Portfolio</Link></li>

                        {
                            user && <li><button className='btn btn-ghost'>Name: {user?.displayName}</button></li>
                        }

                        {
                            user ? <li><button onClick={logOut} className='btn   btn-error' >Sign Out</button></li> : <li><Link to='login'>Login</Link></li>
                        }
                    </ul>

                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Loyal Parts</Link>

                <div className="navbar-end">

                    <label htmlFor="my-drawer-2" tabIndex="1" className="btn btn-ghost   lg:hidden">
                        <small>Menu For Dashboard</small>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5  w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
            <div className="navbar-center lg:justify-end hidden lg:flex">
                <ul className="menu justify-end menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>

                    {
                        user && <li><Link to='dashboard'>Dashboard</Link></li>
                    }
                    <li><Link to='blogs'>Blogs</Link></li>
                    <li><Link to='my-portfolio'>Portfolio</Link></li>

                    {
                        user && <li><button className='btn btn-link'>Name: {user?.displayName}</button></li>
                    }

                    {
                        user ? <li><button onClick={logOut} className='btn   btn-error' >Sign Out</button></li> : <li><Link to='login'>Login</Link></li>
                    }


                </ul>
            </div>

        </div>
    );
};

export default Navbar;