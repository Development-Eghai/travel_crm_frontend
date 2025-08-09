import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../../user/component/Header';
import { TourPreviewDetails } from '../../../../common/api/ApiService';
import moment from 'moment';

const TourBookingPreview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [specificTourData, setSpecificTourData] = useState()

  const getSpecificTour = async () => {
    const response = await TourPreviewDetails(id)

    if (response && response.statusCode === 200) {
      const fixedPackage = response.data?.fixedPackage;
      const customizePackage = response.data?.customizePackage;

      const isFixed = fixedPackage && Object.keys(fixedPackage).length > 0;
      const isCustom = customizePackage && Object.keys(customizePackage).length > 0;

      if (isFixed) {
        setSpecificTourData(fixedPackage);
      } else if (isCustom) {
        setSpecificTourData(customizePackage);
      }
    }
  }

  useEffect(() => {
    getSpecificTour()
  }, [])

  return (
    <div>
      <div className='booking-main-parent'>
        <Header fixed={false} />


        <div className='d-none'>
          <div className='booking-center-card position-relative'>
            <div>
              <i class="fa-solid fa-arrow-left" onClick={() => navigate(-1)}></i>
              <p className='dates-cost text-center'>Dates & Costing</p>
              <div>
                <p className='booking-trip-name'>{specificTourData?.short_description}</p>
              </div>
            </div>
          </div>

          <div className='booking-bottom-parent'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='booking-left'>
                    <div className='available-slots-main'>
                      <p className='head'>Available Dates</p>

                      <div className='booking-left-accrodion'>
                        <div className="container px-0">
                          <div className='trip-detail-faqs mt-4'>
                            <div className="accordion" id="accordionExample">

                              {specificTourData?.departure_Slots?.map((item, index) => (

                                <div className="accordion-item" key={index}>
                                  <h2 className="accordion-header" id={`departureHeading${index}`}>
                                    <button
                                      className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target={`#departureCollapse${index}`}
                                      aria-expanded={index === 0 ? 'true' : 'false'}
                                      aria-controls={`departureCollapse${index}`}
                                    >
                                      <i className="fa-solid fa-arrow-right me-3"></i>
                                      {moment(item?.start_date).format("DD MMM 'YY")}
                                    </button>
                                  </h2>
                                  <div
                                    id={`departureCollapse${index}`}
                                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                    aria-labelledby={`departureHeading${index}`}
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      <div className="booking-left-accrodion-content">
                                        <p>{moment(item?.start_date).format('DD MMM YYYY')} - {moment(item?.end_date).format('DD MMM YYYY')}</p>
                                        <p className="seats-left">{item?.available_slots} Seats Left</p>
                                        <div className="d-flex">
                                          <p className="starting-price">Starting Price: </p>
                                          <p>₹ {specificTourData?.price_per_package?.base_price}/-</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}


                            </div>
                          </div>
                        </div>

                        <p className='notes-para'><span className='booking-note mt-0'>NOTE: </span> At the time of booking, it is mandatory for a
                          customer to pay a minimum of ₹25,000 per person as a booking amount. We will proceed with the booking, only after receiving the booking amount.</p>

                        <p className='notes-para'><span className='booking-note'>NOTE: </span> At the time of booking, it is mandatory for a
                          customer to pay a minimum of ₹25,000 per person as a booking amount. We will proceed with the booking, only after receiving the booking amount.</p>

                        <p className='notes-para'><span className='booking-note'>NOTE: </span> At the time of booking, it is mandatory for a
                          customer to pay a minimum of ₹25,000 per person as a booking amount. We will proceed with the booking, only after receiving the booking amount.</p>

                        <p className='notes-para'><span className='booking-note'>NOTE: </span> At the time of booking, it is mandatory for a
                          customer to pay a minimum of ₹25,000 per person as a booking amount. We will proceed with the booking, only after receiving the booking amount.</p>

                      </div>

                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='booking-right'>
                    <div className='available-slots-main'>
                      <p className='head'>Costing</p>
                      <div className='costing-head-table mt-3'>
                        <table>
                          <tr>
                            <th>Room Sharing</th>
                            <th>Selling Cost
                              <br />
                              (Per Person)</th>
                            <th>Discounted Cost
                              <br />
                              (Per Person)</th>
                          </tr>
                          <tr>
                            <td>Double Occupancy</td>
                            <td className='selling-cost'>₹ {specificTourData?.price_per_package?.base_price}/</td>
                            <td>₹ {specificTourData?.price_per_package?.double_occupancy}/-</td>
                          </tr>
                          <tr>
                            <td>Triple Occupancy</td>
                            <td className='selling-cost'>₹ {specificTourData?.price_per_package?.base_price}/</td>
                            <td>₹ {specificTourData?.price_per_package?.triple_occupancy}/-</td>
                          </tr>
                          <tr>
                            <td>Quad Occupancy </td>
                            <td className='selling-cost'>₹ {specificTourData?.price_per_package?.base_price}/</td>
                            <td>₹ {specificTourData?.price_per_package?.quad_occupancy}/-</td>
                          </tr>
                        </table>
                      </div>
                    </div>

                    <div className='trip-detail-right booking-page'>
                      <div className='trip-detail-price-card booking-page'>
                        <div>
                          <p className='mb-1'>Starting from</p>
                          <div className='d-flex'>
                            <p className='trip-price'>₹ {specificTourData?.price_per_package?.base_price}/-</p>
                            <p className='trip-price-per'>Per Person</p>
                          </div>
                        </div>
                        <div>
                          <button onClick={() => navigate('/trips-bookings')}>Book Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div>

          <div className='booking-center-card position-relative'>
            <div>
              <i class="fa-solid fa-arrow-left" onClick={() => navigate(-1)}></i>
              <p className='dates-cost text-center'>Dates & Costing</p>
              <div>
                <p className='booking-trip-name'>{specificTourData?.short_description}</p>
              </div>
            </div>
          </div>


          <div className='booking-bottom-parent'>
            <div className='container'>
              <div className='row'>

                <div className='col-lg-6'>
                  <div className=''>
                    <div className='booking-personal-detail-left'>
                      <p className="booking-personal-detail-head">Personal Details</p>

                      <div className='booking-personal-detail-form-main'>
                        <div>
                          <div className='booking-personal-detail-form'>
                            <label>Full Name <span className='required-icon'>*</span></label>
                            <input placeholder='Enter Full Name' />
                          </div>
                          <div className='booking-personal-detail-form'>
                            <label>Contact No <span className='required-icon'>*</span></label>
                            <input placeholder='Enter Contact No' />
                          </div>
                          <div className='booking-personal-detail-form'>
                            <label>Email ID <span className='required-icon'>*</span></label>
                            <input placeholder='Enter Email ID' />
                          </div>
                        </div>

                        <button className='booking-personal-detail-button'>Continue</button>
                      </div>

                    </div>
                  </div>

                </div>

                <div className='col-lg-6'>
                  <div className=''>

                    <div className='booking-personal-trip-detail-main d-flex'>
                      <div className='booking-personal-trip-detail'>
                        <h1>11 Days European Pathways Community Trip - France, Netherlands, Germany, Czechia</h1>
                        <p className='mt-1'>27 Sept 2025 - 07 Oct 2025</p>
                      </div>
                      <div className='trip-duration-div'>
                        <p className='trip-duration'>10N/11D</p>
                      </div>
                    </div>

                    <div className=''>
                      <div className='trip-detail-price-card my-4'>
                        <div>
                          <p className='mb-1'>Starting from</p>
                          <div className='d-flex'>
                            <p className='trip-price'>₹ {specificTourData?.price_per_package?.base_price}/-</p>
                            <p className='trip-price-per'>Per Person</p>
                          </div>
                        </div>
                      </div>
                      <div className='booking-personal-awesome d-flex'>
                        <p className='ps-2'>🥳</p>
                        <p className='ms-3'>Ready, set, jet! Book now for instant excitement!</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default TourBookingPreview
