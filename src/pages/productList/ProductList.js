import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../dummydata'
import { Link } from 'react-router-dom';
import './ProductList.css';
export default function ProductList () {
    return (
        <div className="productList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                disableSelectionOnClick
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>

    );
}
