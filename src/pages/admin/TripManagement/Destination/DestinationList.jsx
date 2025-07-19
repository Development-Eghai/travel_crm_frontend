import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyDataTable from '../../../../component/MyDataTable';
import { GetAllDestination } from '../../../../common/api/ApiService';
import { capitalizeWords } from '../../../../common/Validation';

const DestinationList = () => {
    const [destinationList, setDestinationList] = useState([])

    const navigate = useNavigate();
    
    const handlePreview = (slug, id) => {
        const url = `/destination-preview/${slug}/${id}`;
        window.open(url, '_blank');
    };

    const columns = [
        { field: 'sno', headerName: 'SNO', flex: 1 },
        {
            field: 'destination_name', headerName: 'Destination Name', flex: 1,
            renderCell: (params) => {
                const region = params.row?.destination_name || "";
                return (
                    <div className='admin-actions'>
                        {capitalizeWords(region)}
                    </div>
                );
            }
        },
        {
            field: 'trip_region', headerName: 'Trip Region', flex: 1,
            renderCell: (params) => {
                const region = params.row?.trip_region || "";
                return (
                    <div className='admin-actions'>
                        {capitalizeWords(region)}
                    </div>
                );
            }
        },
        { field: 'slug', headerName: 'Slug', flex: 1 },
        {
            field: '_id',
            headerName: 'Actions',
            flex: 1,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params) => {
                const slug = params.row?.slug;
                const id = params.row?._id;

                return (
                    <div className='admin-actions'>
                        <i className="fa-solid fa-pen-to-square"></i>

                        <i className="fa-solid fa-trash ms-3"></i>

                        <i
                            className="fa-solid fa-eye ms-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => handlePreview(slug, id)}
                        ></i>
                    </div>
                );
            }
        },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params) => {
                const status = params.row.status === "active" ? true : false;
                return (
                    <div className="switch">
                        <input type="checkbox" checked={status} readOnly />
                        <span className="slider-table round"></span>
                    </div>
                );
            },
        }
    ];

    const numberedRows = destinationList?.length && destinationList?.map((row, index) => ({
        ...row,
        sno: index + 1,
    }));

    const getAllDestination = async () => {
        const response = await GetAllDestination()
        if (response && response?.statusCode === 200) {
            setDestinationList(response?.data)
        }
    }

    useEffect(() => {
        getAllDestination()
    }, [])


    return (
        <div className='admin-content-main'>
            <div className='d-flex justify-content-between'>
                <h3 className='my-auto'>Destination</h3>
                <button className='admin-add-button mt-0' onClick={() => navigate("/admin/destination-create")}><i class="fa-solid fa-plus me-2"></i> Add Destination</button>
            </div>

            <div className='my-5'>
                <MyDataTable
                    rows={numberedRows}
                    columns={columns}
                    getRowId={(row) => row._id}
                // isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default DestinationList
