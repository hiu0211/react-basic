import { Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const UserTable = (props) => {
  const { dataUser } = props;

  const columns = [
    {
      title: 'Id',
      dataIndex: '_id',
      render: (_, record) => {
        return (
          <a href='#'>{record._id}</a>
        )
      }
    },
    {
      title: 'fullName',
      dataIndex: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div style={{ display: "flex", gap: "15px" }}>
          <EditOutlined style={{ cursor: "pointer", color: "blue" }} />
          <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataUser}
      rowKey={"_id"}
    />
  )
}

export default UserTable;