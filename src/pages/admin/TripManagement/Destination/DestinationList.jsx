import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyDataTable from '../../../../component/MyDataTable';
import { GetAllDestination } from '../../../../common/api/ApiService';

const DestinationList = () => {
    const [getAll, setGetAll] = useState([])

    const navigate = useNavigate();

    const columns = [
        { field: 'sno', headerName: 'SNO', width:100 },
        { field: 'destination_name', headerName: 'Destination Name', flex:1 },
        { field: 'offer_description', headerName: 'Offer Description', width:400 },
        { field: 'starting_price', headerName: 'Starting Price', flex:1 },
        {
            field: '_id',
            headerName: 'Actions',
            flex:1,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params) => (
                <>
                    <div>

                        <i className="fa-solid fa-pen-to-square muitable-action-icons"></i>

                        <i className="fa-solid fa-trash ms-3 muitable-action-icons"></i>

                        <i className="fa-solid fa-eye ms-3 muitable-action-icons"></i>

                    </div>
                </>
            ),
        },
    ];

    const [isLoading, setIsLoading] = useState(true);

    const getAllDestination = async () => {
        const response = await GetAllDestination()
        if (response && response?.status === 200) {
            setGetAll(response?.data)
            setIsLoading(false);
        }
    }

    const numberedRows = getAll?.length && getAll?.map((row, index) => ({
        ...row,
        sno: index + 1,
    }));

    useEffect(() => {
        getAllDestination()
    }, []);


    return (
        <div className='admin-content-main'>
            <div className='d-flex justify-content-between'>
                <h3 className='my-auto'>Destination</h3>
                <button className='admin-add-button' onClick={() => navigate("/admin/create-desination")}>Add Destination</button>
            </div>

            <div className='my-5'>
                <MyDataTable
                    rows={numberedRows}
                    columns={columns}
                    getRowId={(row) => row._id}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default DestinationList
