import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyDataTable from '../../../../component/MyDataTable';
import CustomModal from '../../../../component/CustomModel';


const TourCategory = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    return (
        <div className='admin-content-main'>
            <div className='d-flex justify-content-between'>
                <h3 className='my-auto'>Category</h3>
                <button className='admin-add-button mt-0' onClick={() => setOpen(true)}>Add Category</button>
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
                        <h4 className='mt-2'>Add New Category</h4>
                        <form>
                            <div className='model-input-div'>
                                <label>Name</label>
                                <input type="text" placeholder="Enter Name"
                                />
                            </div>
                            <div className='model-input-div'>
                                <label>Slug</label>
                                <input type="text" placeholder="Enter Slug"
                                />
                            </div>
                            <div className='model-input-div'>
                                <label>Description</label>
                                <input type="text" placeholder='Enter Description' />
                            </div>
                            <div className='model-input-div'>
                                <label>Images</label>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    className="form-control"
                                />
                            </div>
                            <button className='model-submit-button'>Add Category</button>
                        </form>
                    </div>
                </>

            </CustomModal>
        </div>
    )
}

export default TourCategory
