import React from 'react'
import JoditEditor from "jodit-react";
import { useNavigate } from 'react-router-dom';



const BlogsCreation = () => {
    const navigate = useNavigate();
    return (
        <div className='admin-content-main'>

            <div className='d-flex justify-content-between mb-5'>
                <h3 className='my-auto'>Create Blog</h3>
                <button className='admin-add-button mt-0' onClick={() => navigate(-1)}>Back</button>
            </div>

            <div className='row'>
                <div className='col-lg-6'>
                    <div className='admin-input-div'>
                        <label>Heading <span className='required-icon'>*</span></label>
                        <input type="text" placeholder='Enter Blog Heading'/>
                    </div>
                </div>

                <div className='col-lg-6'>
                    <div className='admin-input-div'>
                        <label>Select Category</label>
                        <select>
                            <option value="">Select Category</option>
                            <option value="Fixed Price">Single Trip</option>
                            <option value="Price Per Person">Family Trip</option>
                            <option value="Price Per Person">Group Trip</option>
                            <option value="Price Per Person">HoneyMoon</option>
                        </select>
                    </div>
                </div>

                <div className='col-lg-6'>
                    <div className='admin-input-div'>
                        <label>Featured Image <span className='required-icon'>*</span></label>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            className="form-control"
                        />
                    </div>
                </div>

                <div className='col-lg-6'>
                    <div className='admin-input-div'>
                        <label>Featured Image Alt Tag <span className='required-icon'>*</span></label>
                        <input type="text" placeholder='Enter Image Alt Tag'/>
                    </div>
                </div>

                <div className='col-lg-6'>
                    <div className='admin-input-div'>
                        <label>Blogs Created At <span className='required-icon'>*</span></label>
                        <input type="date" />
                    </div>
                </div>

                <div className='col-lg-6'>
                    <div className='admin-input-div'>
                        <label>Author Name <span className='required-icon'>*</span></label>
                        <input type="text" placeholder='Enter Author Name'/>
                    </div>
                </div>

                <div className='col-lg-6'>
                    <div className='admin-input-div'>
                        <label>Select Blog Tag</label>
                        <select>
                            <option value="">Select Tag</option>
                            <option value="Fixed Price">Single Trip</option>
                            <option value="Price Per Person">Family Trip</option>
                            <option value="Price Per Person">Group Trip</option>
                            <option value="Price Per Person">HoneyMoon</option>
                        </select>
                    </div>
                </div>

                <div className='col-lg-3'>
                    <div className='admin-input-div blogs-creation'>
                        <label>Featured Blog</label>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>

            </div>

            <div className='admin-input-div mt-5'>
                <label>Blog Description</label>

                <div className="mt-3">
                    <JoditEditor
                        // ref={editor}
                        // value={createDestination?.about_destination}
                        config={{
                            readonly: false,
                            height: 400,
                            toolbarButtonSize: "middle",
                            askBeforePasteHTML: false,
                            askBeforePasteFromWord: false,
                            defaultActionOnPaste: "insert_clear_html",
                            allowPaste: true
                        }}
                        tabIndex={1}
                    // onBlur={(newContent) => handleChange("about_destination", newContent)}
                    />
                    <div className="mt-3">
                        {/* <h5>Output:</h5>
                    <div dangerouslySetInnerHTML={{ __html: content }} /> */}
                    </div>
                </div>
            </div>


            <div className='row'>
                <div className='col-lg-6'>
                    <div className='admin-input-div'>
                        <label>Meta Title <span className='required-icon'>*</span></label>
                        <input type="text" placeholder='Enter Meta Title'/>
                    </div>
                </div>

                <div className='col-lg-6'>
                    <div className='admin-input-div'>
                        <label>Meta Tag <span className='required-icon'>*</span></label>
                        <input type="text" placeholder='Enter Meta Tag'/>
                    </div>
                </div>

                <div className='col-lg-6'>
                    <div className='admin-input-div'>
                        <label>Meta Description <span className='required-icon'>*</span></label>
                        <input type="text" placeholder='Enter Meta Description'/>
                    </div>
                </div>

                <div className='col-lg-6'>
                    <div className='admin-input-div'>
                        <label>URL Slug <span className='required-icon'>*</span></label>
                        <input type="text" placeholder='Enter URL Slug'/>
                    </div>
                </div>

            </div>

            <button className="create-common-btn" >Create Blog</button>

        </div >
    )
}

export default BlogsCreation
