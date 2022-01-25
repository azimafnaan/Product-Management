import React, { useState } from 'react'
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../dummydata'
import { Link } from 'react-router-dom';

export default function UserList () {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id != id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: 'user', headerName: 'User', width: 300, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 250 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 200,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>

                        <DeleteOutlineIcon
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}>

                        </DeleteOutlineIcon>
                    </>
                )
            }

        }

    ];


    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                disableSelectionOnClick
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}
