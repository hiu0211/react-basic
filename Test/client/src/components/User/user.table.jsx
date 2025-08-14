import { Table } from 'antd';
import { fetchUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = () => {

  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    console.log("Check effect")
    loadUser();
  }, []);

const columns = [
  {
    title: 'Id',
    dataIndex: '_id',
  },
  {
    title: 'fullName',
    dataIndex: 'fullName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  }
];

const loadUser = async () => {
  const res = await fetchUserAPI()
  setDataUser(res.data);
}

return (
  <Table
    columns={columns}
    dataSource={dataUser}
    rowKey={"_id"}
  />
)
}

export default UserTable;