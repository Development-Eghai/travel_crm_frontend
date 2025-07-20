import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyDataTable from '../../../../src/component/MyDataTable';


const BlogsList = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    return (
        <div className='admin-content-main'>
            <div className='d-flex justify-content-between'>
                <h3 className='my-auto'>Blogs List</h3>
                <button className='admin-add-button mt-0' onClick={() => navigate("/admin/blogs-create") }><i class="fa-solid fa-plus me-2"></i> Create New Blog</button>
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

export default BlogsList
