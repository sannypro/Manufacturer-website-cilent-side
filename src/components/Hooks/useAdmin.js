import axios from "../api/AxiosPrivate"
import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        const email = user?.email
        console.log(email);
        if (email) {
            axios.get(`https://fathomless-refuge-70069.herokuapp.com/admin/${email}`).then(response => {
                setAdmin(response.data)
                setAdminLoading(false)
            })
        }
    }, [user])
    return [admin, adminLoading]
}
export default useAdmin