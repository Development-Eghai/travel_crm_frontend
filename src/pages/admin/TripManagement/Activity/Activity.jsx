import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyDataTable from '../../../../component/MyDataTable';
import CustomModal from '../../../../component/CustomModel';


const Activity = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    return (
        <div className='admin-content-main'>
            <div className='d-flex justify-content-between'>
                <h3 className='my-auto'>Activity</h3>
                <button className='admin-add-button' onClick={() => setOpen(true)}>Add Activity</button>
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
                <>
                    <div className=''>
                        <h4 className='mt-2'>Add New Activity</h4>
                        <form>
                            <div className='model-input-div'>
                                <label>Name</label>
                                <input type="text" placeholder='Name' />
                            </div>
                            <div className='model-input-div'>
                                <label>Slug</label>
                                <input type="text" placeholder='Slug' />
                            </div>
                            <div className='model-input-div'>
                                <label>Description</label>
                                <textarea type="text" placeholder='Description' />
                            </div>
                            <div className='model-input-div'>
                                <label>Image </label>
                                <input type="file" />
                            </div>
                            <button className='model-submit-button'>Add Activity</button>
                        </form>
                    </div>
                </>

            </CustomModal>
        </div>
    )
}

export default Activity
