import UserForm from "../components/User/user.form";
import UserTable from "../components/User/user.table";
import { useEffect, useState } from 'react';
import { fetchUserAPI } from '../services/api.service';

const UserPage = () => {

    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchUserAPI()
        setDataUser(res.data);
    }

    // lift up state
    return (
        <div style={{ padding: "30px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                dataUser={dataUser}
                loadUser={loadUser}
            />
        </div>
    );
}

export default UserPage;