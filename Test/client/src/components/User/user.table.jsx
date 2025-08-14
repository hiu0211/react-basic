import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Popconfirm, Table, notification } from 'antd';
import { useState } from 'react';
import UpdateUserModal from './update.user.modal';
// import ViewUserDetail from './view.user.detail';
import { deleteUserAPI } from '../../services/api.service';
import React from 'react';

const UserTable = (props) => {
  const { dataUser, loadUser } = props;

  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

  const [dataUpdate, setDataUpdate] = useState(null);

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
          <EditOutlined
            onClick={() => {
              setDataUpdate(record);
              setIsModalUpdateOpen(true);
            }}
            style={{ cursor: "pointer", color: "blue" }} />
          <Popconfirm
            title="Bạn chắc chắn muốn xóa user này ?"
            onConfirm={() => { handleDeleteUser(record._id); }}
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleDeleteUser = async (id) => {
    const res = await deleteUserAPI(id);
    if (res.data) {
      notification.success({
        message: "Xóa user thành công",
      });
      await loadUser();

    } else {
      notification.error({
        message: "Xóa user thất bại",
        description: JSON.stringify(res.message),
      });
    }
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataUser}
        rowKey={"_id"}
      />

      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
    </>
  )
}

export default UserTable;