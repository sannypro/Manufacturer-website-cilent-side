import axios from "../api/AxiosPrivate";
import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email;

        const currentUser = email
        if (email) {
            axios.put(`http://localhost:5000/user/${email}`, currentUser).then(response => {
                setToken(response.data)
                localStorage.setItem('accessToken', response.data)

            })
        }
    }, [user?.user?.email])
    return [token]
}
export default useToken