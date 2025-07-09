import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyDataTable from '../../../../component/MyDataTable';


const TourList = () => {
    const navigate = useNavigate();
    return (
        <div className='admin-content-main'>
            <div className='d-flex justify-content-between'>
                <h3 className='my-auto'>Tour List</h3>
                <button className='admin-add-button' onClick={() => navigate("/admin/tour-create")}>Add Tour</button>
            </div>

            <div className='my-5'>
                <MyDataTable
                // rows={numberedRows}
                // columns={columns}
                // getRowId={(row) => row._id}
                // isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default TourList
