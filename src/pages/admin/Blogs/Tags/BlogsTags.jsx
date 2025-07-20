import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyDataTable from '../../../../component/MyDataTable';
import CustomModal from '../../../../component/CustomModel';


const BlogsTags = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  return (
    <div className='admin-content-main'>
      <div className='d-flex justify-content-between'>
        <h3 className='my-auto'>Blog Tags List</h3>
        <button className='admin-add-button mt-0' onClick={() => setOpen(true)}><i class="fa-solid fa-plus me-2"></i>Add Blog Tag</button>
      </div>

      <div className='my-5'>
        <MyDataTable
        // rows={numberedRows}
        // columns={columns}
        // getRowId={(row) => row._id}
        // isLoading={isLoading}
        />
      </div>

      <CustomModal
        open={open}
        onClickOutside={() => {
          setOpen(false);
        }}
      >
        <div className='Modal-View-Tour-Management'>
          <div className='model-input-div'>
            <label>Name</label>
            <input type="text" placeholder='Enter Tag Name' />
          </div>
          <div className='model-input-div'>
            <label>Slug</label>
            <input type="text" placeholder='Enter Tag Slug' />
          </div>
          <div className='model-input-div'>
            <label>Description</label>
            <textarea type="text" placeholder='Enter Tag Description' />
          </div>
          <button className='model-submit-button' onClick={() => setOpen(!open)}>Add Tag</button>
        </div>

      </CustomModal>


    </div>
  )
}

export default BlogsTags
