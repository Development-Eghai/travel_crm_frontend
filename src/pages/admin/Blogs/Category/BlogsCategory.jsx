import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyDataTable from '../../../../component/MyDataTable';
import CustomModal from '../../../../component/CustomModel';


const BlogsCategory = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  return (
    <div className='admin-content-main'>
      <div className='d-flex justify-content-between'>
        <h3 className='my-auto'>Blog Category List</h3>
        <button className='admin-add-button mt-0' onClick={() => setOpen(true)}>Add Blog Category</button>
      </div>

      <div className='my-5'>
        <MyDataTable
        // rows={numberedRows}
        // columns={columns}
        // getRowId={(row) => row._id}
        // isLoading={isLoading}
        />
      </div>

      <div className={`${open ? "d-block" : "d-none"}`}>
        <div className={`blog-category-main`}>
          <div className='blog-category-child'>
            <h4 className='mt-2'>Add Blog Category</h4>
            <div className='model-input-div'>
              <label>Category Name</label>
              <input type="text" placeholder='Category Name' />
            </div>
            <button className='model-submit-button' onClick={() => setOpen(!open)}>Add Category</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default BlogsCategory
