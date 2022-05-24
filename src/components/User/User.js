import axios from '../api/AxiosPrivate';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { async } from '@firebase/util';

const User = () => {
    const { data: user, isLoading, refetch } = useQuery('user', () => axios.get('http://localhost:5000/all-user'))


    if (isLoading) {
        return <Loading></Loading>
    }
    const makeAdmin = async (email) => {
        await axios.put(`http://localhost:5000/user/admin/${email}`).then(response => console.log(response))
        refetch()
    }
    return (
        <div class="overflow-x-auto">
            <h1 className="text-4xl"> All user : {user.data.length}</h1>
            <table class="table table-zebra w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th >Make Admin</th>
                        <th >Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        user?.data.map((u, index) => <tr key={user._id}>
                            <th>{index + 1}</th>

                            <td>{u.email}</td>
                            <td>{u.role !== 'admin' && <button onClick={() => makeAdmin(u.email)} className='btn-sm btn mr-4'>Make Admin</button>}</td>

                            <td><button className='btn-sm btn'>Delete user</button></td>

                        </tr>

                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default User;