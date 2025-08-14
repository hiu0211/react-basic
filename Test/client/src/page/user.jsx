import UserForm from "../components/User/user.form";
import UserTable from "../components/User/user.table";


function UserPage() {
    return (
        <div style={{ padding: "30px" }}>
            <UserForm />
            <UserTable />
        </div>
    );
}

export default UserPage;