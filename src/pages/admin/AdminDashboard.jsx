import React from 'react'

const AdminDashboard = () => {
    return (
        <>
            <div className='mt-3'>
                <div className="row">
                    <div className="col-lg-3">
                        <div className='dashboard-top-card'>
                            <p>Total Enquiries</p>
                            <div className='d-flex justify-content-between dashboard-top-card-div'>
                                <p>0</p>
                                <i class="fa-regular fa-envelope"></i>
                            </div>
                            <p className='data-percent'>+12% from last month</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='dashboard-top-card'>
                            <p>Active Bookings</p>
                            <div className='d-flex justify-content-between dashboard-top-card-div'>
                                <p>0</p>
                                <i class="fa-solid fa-calendar-week"></i>
                            </div>
                            <p className='data-percent'>+13% from last month</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='dashboard-top-card'>
                            <p>Revenue</p>
                            <div className='d-flex justify-content-between dashboard-top-card-div'>
                                <p>0</p>
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                            </div>
                            <p className='data-percent'>+15% from last month</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='dashboard-top-card'>
                            <p>Active Packages</p>
                            <div className='d-flex justify-content-between dashboard-top-card-div'>
                                <p>0</p>
                                <i class="fa-solid fa-box-archive"></i>
                            </div>
                            <p className='data-percent'>4 added from last month</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4'>
                <div className="row">
                    <div className="col-lg-6">
                        <div className='dashboard-layer-2'>
                            <div className='d-flex justify-content-between'>
                                <p className='head-para'>Recent Inquiries</p>
                                <p className='anchor-para my-auto cursor'>View All <i class="fa-solid fa-arrow-right ms-3"></i></p>
                            </div>

                            <div className='d-flex justify-content-center align-items-center flex-column no-data-div'>
                                <i class="fa-regular fa-envelope"></i>
                                <p className='inquiry-head'>No inquiries yet</p>
                                <p className='inquiry-para'>New inquiries will appear here</p>
                            </div>


                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='dashboard-layer-2'>
                            <div className='d-flex justify-content-between'>
                                <p className='head-para'>Popular Packages</p>
                                <p className='anchor-para my-auto cursor'>View All <i class="fa-solid fa-arrow-right ms-3"></i></p>
                            </div>

                            <div className='d-flex justify-content-center align-items-center flex-column no-data-div'>
                                <i class="fa-solid fa-box"></i>
                                <p className='inquiry-head'>No inquiries yet</p>
                                <p className='inquiry-para'>New inquiries will appear here</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='my-3 dashboard-top-card'>
                <p className='head-para-common'>Quick Actions</p>
                <div className="row">
                    <div className="col-lg-3">
                        <div className='dashboard-bottom-card card-1 d-flex justify-content-center align-items-center flex-column'>
                            <i class="fa-solid fa-boxes-stacked"></i>
                            <p className='mt-2 fw-bold'>Add Packages</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='dashboard-bottom-card card-2 d-flex justify-content-center align-items-center flex-column'>
                        <i class="fa-solid fa-hotel"></i>
                            <p className='mt-2 fw-bold'>Add Hotel</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='dashboard-bottom-card card-3 d-flex justify-content-center align-items-center flex-column'>
                        <i class="fa-solid fa-laptop"></i>
                            <p className='mt-2 fw-bold'>Write Blog</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='dashboard-bottom-card card-4 d-flex justify-content-center align-items-center flex-column'>
                        <i class="fa-solid fa-window-restore"></i>
                            <p className='mt-2 fw-bold'>View Inquiries</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminDashboard
