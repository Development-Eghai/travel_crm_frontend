import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyDataTable from '../../../../component/MyDataTable';
import CustomModal from '../../../../component/CustomModel';
import { NonEmptyValidation, normalizeEmptyFields, StringValidation } from '../../../../common/Validation';
import { errorMsg, successMsg } from '../../../../common/Toastify';
import { CreateTourCategory, GetAllTourCategory, SingleFileUpload } from '../../../../common/api/ApiService';



const Activity = () => {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const [categoryData, setcategoryData] = useState({})
    const [categoryList, setcategoryList] = useState([])
    const [validation, setValidation] = useState({})
    const [isLoading, setIsLoading] = useState(true);


    const columns = [
        { field: 'sno', headerName: 'SNO',flex:1 },
        { field: 'name', headerName: 'Name',flex:1  },
        { field: 'slug', headerName: 'Slug',flex:1  },
        {
            field: '_id',
            headerName: 'Actions',
           flex:1 ,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params) => (
                <>
                    <div>
                        <i className="fa-solid fa-pen-to-square muitable-action-icons" ></i>
                        <i className="fa-solid fa-trash ms-3 muitable-action-icons" ></i>
                        <i className="fa-solid fa-eye ms-3 muitable-action-icons" ></i>
                    </div>
                </>
            ),
        },
    ];

    const numberedRows = categoryList?.map((row, index) => ({
        ...row,
        sno: index + 1,
    }));


    const handleChange = (e) => {
        const { name, value } = e.target
        setcategoryData({ ...categoryData, [name]: value })
        if (validation[name]) {
            setValidation({ ...validation, [name]: false })
        }
    }

    const validateDetails = (data) => {
        let validate = {};

        validate.name = StringValidation(data?.name);
        validate.slug = NonEmptyValidation(data?.slug);
        validate.description = NonEmptyValidation(data?.description);
        validate.image = NonEmptyValidation(data?.image);

        return validate;
    };

    const handleBlur = (fieldName, value) => {
        const updatedData = {
            ...categoryData,
            [fieldName]: value,
        };

        const cleanedData = normalizeEmptyFields(updatedData);
        const fieldValidation = validateDetails(cleanedData);

        setValidation((prev) => ({
            ...prev,
            [fieldName]: fieldValidation[fieldName],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const cleanedData = normalizeEmptyFields(categoryData);
        const isValide = validateDetails(cleanedData)
        setValidation(isValide);
        if (Object.values(isValide).every((data) => data?.status === true)) {
            const response = await CreateTourCategory(cleanedData)
            console.log(response, "response")
            if (response && response?.statusCode === 200) {
                successMsg("Agency employee created successsfully")
                setAgencyEmployeeProfileData({})
                navigate(-1)
            }
            else {
                errorMsg(response?.err?.message)
            }
        }

    }

    const handleFileUpload = async (e, key) => {
        const file = e.target.files[0];

        if (!file) return;
        let image_name = e?.target?.files[0]?.name;
        let image_type = image_name?.split(".");
        let type = image_type?.pop();
        if (type !== "jpeg" && type !== "png" && type !== "jpg" && type !== "pdf") {
            errorMsg("Unsupported file type")
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("storage", "local");
        const response = await SingleFileUpload(formData);

        if (response?.statusCode !== 200) {
            errorMsg("Failed to upload file")
            return;
        }

        const path = response?.path;
        successMsg("File upload successfully")
        if (validation[key]) {
            setValidation({ ...validation, [key]: false })
        }
        setcategoryData({ ...categoryData, [key]: path })
    };

    const getAllTourCategory = async () => {
        const response = await GetAllTourCategory()
        if (response && response?.status === 200) {
            setcategoryList(response?.data)
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getAllTourCategory()
    }, [])




    return (
        <div className='admin-content-main'>
            <div className='d-flex justify-content-between'>
                <h3 className='my-auto'>Activity</h3>
                <button className='admin-add-button mt-0' onClick={() => setOpen(true)}>Add Activity</button>
            </div>

            <div className='my-5'>
                <MyDataTable
                rows={numberedRows}
                columns={columns}
                getRowId={(row) => row._id}
                // isLoading={isLoading}
                />
            </div>

            <CustomModal
                open={open}
                onClickOutside={() => {
                    setOpen(false);
                    setValidation({})
                    setcategoryData({})
                }}
            >
                <>
                    <div className=''>

                        <h4 className='mt-2'>Add New Activity</h4>

                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className='model-input-div'>
                                <label>Name  <span className='required-icon'>*</span></label>
                                <input type="text" placeholder="Enter Name" name='name'
                                    onChange={(e) => handleChange(e)}
                                    onBlur={(e) => handleBlur(e.target.name, e.target.value)}
                                />
                                {validation?.name?.status === false && validation?.name?.message && (
                                    <p className='error-para'>Name {validation.name.message}</p>
                                )}
                            </div>

                            <div className='model-input-div'>
                                <label>Slug  <span className='required-icon'>*</span></label>
                                <input type="text" placeholder="Enter Slug" name='slug'
                                    onChange={(e) => handleChange(e)}
                                    onBlur={(e) => handleBlur(e.target.name, e.target.value)}
                                />
                                {validation?.slug?.status === false && validation?.slug?.message && (
                                    <p className='error-para'>Slug {validation.slug.message}</p>
                                )}
                            </div>

                            <div className='model-input-div'>
                                <label>Description  <span className='required-icon'>*</span></label>
                                <textarea type="text" placeholder='Enter Description' name='description'
                                    onChange={(e) => handleChange(e)}
                                    onBlur={(e) => handleBlur(e.target.name, e.target.value)}
                                />
                                {validation?.description?.status === false && validation?.description?.message && (
                                    <p className='error-para'>Description {validation.description.message}</p>
                                )}
                            </div>

                            <div className='model-input-div'>
                                <label>Image  <span className='required-icon'>*</span></label>
                                <input
                                    type="file"
                                    // multiple
                                    name='image'
                                    accept='.png,.jpeg,.jpg,.pdf'
                                    className="form-control"
                                    onChange={(e) => { handleFileUpload(e, "image"); handleChange(e) }}
                                />
                                {validation?.image?.status === false && validation?.image?.message && (
                                    <p className='error-para'>Image {validation.image.message}</p>
                                )}
                            </div>

                            <button className='model-submit-button' type='submit'>Add Activity</button>
                        </form>
                    </div>
                </>

            </CustomModal>
        </div>
    )
}

export default Activity
