import JoditEditor from 'jodit-react';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TourCreation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [activeTripTab, setActiveTripTab] = useState(1);
  const [activePricingTab, setActivePricingTab] = useState(1);

  const sectionTabs = [
    {
      id: 1,
      name: 'Trip Type',
      detail: {
        head: "Select Trip Type",
        para: "Choose the type of trip package you want to create. This will determine the available fields and options."
      }
    },
    {
      id: 2,
      name: 'Basic Info',
      detail: {
        head: "Basic Trip Informatione",
        para: "Provide basic details about the trip."
      }
    },
    {
      id: 3,
      name: 'Details',
      detail: {
        head: "Trip Details",
        para: "Provide detailed information about the trip"
      }
    },
    {
      id: 4,
      name: 'Pricing',
      detail: {
        head: "Pricing & Inclusions",
        para: "Set pricing and inclusion details for the trip."
      }
    },
    {
      id: 5,
      name: 'SEO',
      detail: {
        head: "SEO & Advanced Options",
        para: "Optimize your trip for search engines and provide advanced options."
      }
    },

  ]

  const TripTypeCard = [
    {
      id: 1,
      head: 'Customized Package',
      para: 'Tailor-made trips for individual customers'
    },
    {
      id: 2,
      head: 'Fixed Departure',
      para: 'Scheduled group trips with fixed dates'
    },

  ]

  const PricingTab = [
    {
      id: 1,
      head: 'Price Per Person',
      para: 'Individual pricing model'
    },
    {
      id: 2,
      head: 'Price Per Package',
      para: 'Package-based pricing'
    },
  ]

  const [itinerarys, setItinerary] = useState([{ day_title: "", description: "", images: [] }]);

  const addItinerary = () => {
    setItinerary([...itinerarys, { day_title: "", description: "", images: [] }]);
  };

  const deleteItinerary = (indexToRemove) => {
    if (indexToRemove !== 0) {
      const updatedItinerary = itinerarys.filter((_, index) => index !== indexToRemove);
      setItinerary(updatedItinerary);
    }
  };

  const updateItinerary = (index, key, value) => {
    const updatedItinerary = [...itinerarys];
    updatedItinerary[index][key] = value;
    setItinerary(updatedItinerary);
  };

  const handleDropDownChange = (selectedOptions) => {
    console.log("Selected Clients:", selectedOptions);
  };

  const handleImageUpload = (index, files) => {
    const fileArray = Array.from(files);
    // save the image file name only not the full file onject -** check this
    const updated = [...itinerarys];
    updated[index].images = [...updated[index].images, ...fileArray];
    setItinerary(updated);
  };


  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numberOfDays, setNumberOfDays] = useState(5);

  useEffect(() => {
    if (startDate && numberOfDays > 0) {
      const end = new Date(startDate);
      end.setDate(end.getDate() + (numberOfDays - 1));
      setEndDate(end);
    }
  }, [startDate, numberOfDays]);

  const editor = useRef(null);

  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);

  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const deleteFaq = (indexToRemove) => {
    if (indexToRemove !== 0) {
      const updatedFaqs = faqs.filter((_, index) => index !== indexToRemove);
      setFaqs(updatedFaqs);
    }
  };

  const updateFaq = (index, key, value) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index][key] = value;
    setFaqs(updatedFaqs);
  };


  return (
    <div className='admin-content-main'>

      <div className='d-flex justify-content-between'>
        {/* <h3 className='my-auto'>Create Tour</h3> */}

        {/* <button className='admin-add-button mt-0'>Create Tour</button> */}
      </div>

      <div className='d-flex justify-content-around mt-2'>
        {sectionTabs.map((item, index) => (
          <div className='trip-creation-steps'>
            <p className={`steps-main ${activeTab === item?.id ? 'active' : ''}`}>{item?.id}</p>
            <p className='step-para'>{item?.name}</p>
          </div>
        ))}
      </div>


      <div className='trip-creation-form'>
        <h4>{sectionTabs[activeTab - 1]?.id}.{sectionTabs[activeTab - 1]?.detail?.head}</h4>
        <p>{sectionTabs[activeTab - 1]?.detail?.para}</p>
      </div>

      <div className='mt-3'>
        {activeTab == 1 && (
          <>
            <div className='d-flex mb-4'>
              {TripTypeCard.map((item, index) => (
                <div className={`trip-type-card ${activeTripTab === item?.id ? 'active' : ''}`} key={item?.id} onClick={() => setActiveTripTab(item?.id)}>
                  <div className='my-auto'>
                    <input type='checkbox' checked={activeTripTab === item?.id} />
                  </div>
                  <div className='d-flex flex-column trip-type-card-content ms-2'>
                    <h6>{item?.head}</h6>
                    <p>{item?.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab == 2 && (

          <div className='row'>

            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Trip Type <span className='required-icon'>*</span></label>
                <input type="text" placeholder='Enter Trip Title' />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Destination  <span className='required-icon'>*</span></label>
                <select>
                  <option value="">Select Destination</option>
                  <option value="India">India</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="kerala">kerala</option>
                  <option value="Chennai">Chennai </option>
                </select>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Duration (Days) <span className='required-icon'>*</span></label>
                <input type="number" placeholder='Number of Days' />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Nights <span className='required-icon'>*</span></label>
                <input type="number" placeholder='Number of Nights' />
              </div>
            </div>

            <div className='col-lg-12'>
              <div className="admin-input-div">
                <label>Short Description / Tagline</label>
                <textarea
                  className="form-control"
                  placeholder='Short Description For Listing Pages'
                />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Select Featured Trip Page  <span className='required-icon'>*</span></label>
                <select>
                  <option value="">Select Featured Page</option>
                  <option value="Home">Home</option>
                  <option value="Destination">Destination</option>
                  <option value="Payment Page">Payment Page</option>
                </select>
              </div>
            </div>


          </div>

        )}

        {activeTab == 3 && (
          <>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='admin-input-div'>
                  <label className='text-area-label'>Long Description</label>
                  <div className="mt-2">
                    <JoditEditor
                      ref={editor}
                      // value={createDestination?.about_destination}
                      config={{
                        readonly: false,
                        height: 300,
                        toolbarButtonSize: "middle"
                      }}
                      tabIndex={1}
                    // onBlur={(newContent) => handleChange("about_destination", newContent)}
                    />
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className="admin-input-div">
                  <label>Add Hero Slider Images <span className='required-icon'>*</span></label>
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
                  <label>Tags to be used in search </label>
                  <input type="text" placeholder='Enter Tags' />
                </div>
              </div>

              <div className='col-lg-6'>
                <div className="admin-input-div">
                  <label>Primary Trip Image <span className='required-icon'>*</span></label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="form-control"
                  />
                </div>
              </div>

            </div>


            <div className='itenary-main my-5'>
              <div className='admin-input-div mt-0'>
                <label>Day Wise Itenary </label>
              </div>

              <div className='itenary-list-main mt-4 '>
                <div className='itenary-content mb-5'>
                  <h5 className='text-center'>Itinerary Builder</h5>
                  <p className='text-center'>Create day-by-day itinerary for your customized package</p>
                </div>
                {/* <div className='d-flex justify-content-center'>
                  <button className='admin-add-button'>Add Day <i class="fa-solid fa-plus ms-2"></i></button>
                </div> */}

                <div className="destination-faq">
                  <div className="accordion" id="accordionExample">
                    {itinerarys.map((faq, index) => (
                      <div className='mt-4'>
                        <div className="accordion-item" key={index} >
                          <h2 className="accordion-header d-flex align-items-center justify-content-between">
                            <button
                              className="accordion-button flex-grow-1 fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${index}`}
                              aria-expanded="true"
                              aria-controls={`collapse${index}`}
                            >
                              DAY {index + 1}
                            </button>
                            <div className="ms-3 d-flex gap-2">
                              <button className="destination-faq-add" onClick={addItinerary}>
                                Add
                              </button>
                              {/* {index !== 0 && ( */}
                              <button
                                className="destination-faq-add faq-delete me-4"
                                onClick={() => deleteItinerary(index)}
                              >
                                Delete
                              </button>
                              {/* )} */}
                            </div>
                          </h2>

                          <div
                            id={`collapse${index}`}
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="admin-input-div mb-3">
                                <label className=''>Day Title</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={faq.question}
                                  placeholder="Enter Day Title"
                                  onChange={(e) =>
                                    updateItinerary(index, "day_title", e.target.value)
                                  }
                                />
                              </div>

                              <div className="admin-input-div admin-desti-faq">
                                <label>Day Description</label>
                                <textarea
                                  className="form-control"
                                  placeholder="Enter Day Description"
                                  value={faq.answer}
                                  onChange={(e) =>
                                    updateItinerary(index, "day_description", e.target.value)
                                  }
                                />
                              </div>

                              <div className="admin-input-div admin-desti-faq">
                                <label>Day Images (Optional) <span className='required-icon'>*</span></label>
                                <input
                                  type="file"
                                  multiple
                                  accept="image/*"
                                  className="form-control"
                                />
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </>
        )}

        {activeTab == 4 && (
          <>

            <div className='d-flex mb-4'>
              {PricingTab.map((item, index) => (
                <div className={`trip-type-card ${activePricingTab === item?.id ? 'active' : ''} pricing-tab-card`} key={item?.id} onClick={() => setActivePricingTab(item?.id)}>
                  <div className='d-flex flex-column trip-type-card-content ms-2'>
                    <h6>{item?.head}</h6>
                    <p>{item?.para}</p>
                  </div>
                </div>
              ))}
            </div>


            <div className='itenary-main my-5'>

              <div className='row'>

                <div className='col-lg-6'>
                  <div className='admin-input-div mt-0'>
                    <label>Base Price <span className='required-icon'>*</span></label>
                    <input type="number" placeholder='Enter Base Price' />
                  </div>
                </div>


                <div className='col-lg-6'>
                  <div className='admin-input-div mt-0'>
                    <label>Currency  <span className='required-icon'>*</span></label>
                    <select>
                      <option value="">Select Currency</option>
                      <option value="INR">INR (₹)</option>
                      <option value="USD">USD ($)</option>
                      <option value="EURO">EURO (€)</option>
                    </select>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className='admin-input-div'>
                    <label>Discounted Price (Optional)</label>
                    <input type="number" placeholder='Enter Discounted Price' />
                  </div>
                </div>


                <div className='col-lg-4'>
                  <div className='admin-input-div'>
                    <label>Display as "Starts From" Price</label>
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>


              </div>

              <div className='itenary-list-main mt-4 '>
                <div className='itenary-content mb-5'>
                  <h5 className='text-center'>Seasonal Pricing (Optional)</h5>
                  <p className='text-center'>Add different prices for different seasons or dates</p>
                </div>
                {/* <div className='d-flex justify-content-center'>
                  <button className='admin-add-button'>Add Day <i class="fa-solid fa-plus ms-2"></i></button>
                </div> */}

                <div className="destination-faq">
                  <div className="accordion" id="accordionExample">
                    {itinerarys.map((faq, index) => (
                      <div className='mt-4'>
                        <div className="accordion-item" key={index} >
                          <h2 className="accordion-header d-flex align-items-center justify-content-between">
                            <button
                              className="accordion-button flex-grow-1 fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${index}`}
                              aria-expanded="true"
                              aria-controls={`collapse${index}`}
                            >
                              Season {index + 1}
                            </button>
                            <div className="ms-3 d-flex gap-2">
                              <button className="destination-faq-add" onClick={addItinerary}>
                                Add
                              </button>
                              {/* {index !== 0 && ( */}
                              <button
                                className="destination-faq-add faq-delete me-4"
                                onClick={() => deleteItinerary(index)}
                              >
                                Delete
                              </button>
                              {/* )} */}
                            </div>
                          </h2>

                          <div
                            id={`collapse${index}`}
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">

                              <div className='row'>
                                <div className='col-lg-6'>
                                  <div className='admin-input-div mt-0'>
                                    <label>Start Date<span className='required-icon'>*</span></label>
                                    <DatePicker
                                      selected={startDate}
                                      onChange={(date) => setStartDate(date)}
                                      placeholderText="Select Start Date"
                                      className='w-100'
                                    />
                                  </div>
                                </div>

                                <div className='col-lg-6 '>
                                  <div className='admin-input-div mt-0'>
                                    <label>End Date</label>
                                    <DatePicker
                                      selected={endDate}
                                      readOnly
                                      disabled
                                      placeholderText="End Date"
                                      className='w-100'
                                    />
                                  </div>
                                </div>

                                <div className='col-lg-6'>
                                  <div className='admin-input-div'>
                                    <label>Season Price</label>
                                    <input type="number" placeholder='Enter Season Price' />
                                  </div>
                                </div>

                                <div className='col-lg-6'>
                                  <div className='admin-input-div'>
                                    <label>Season Name</label>
                                    <input type="number" placeholder='e.g.., Summer, Winter' />
                                  </div>
                                </div>
                              </div>



                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <div className='admin-input-div'>
                  <label className='text-area-label'>Inclusion</label>
                  <div className="mt-2">
                    <JoditEditor
                      ref={editor}
                      // value={createDestination?.about_destination}
                      config={{
                        readonly: false,
                        height: 300,
                        toolbarButtonSize: "middle"
                      }}
                      tabIndex={1}
                    // onBlur={(newContent) => handleChange("about_destination", newContent)}
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='admin-input-div'>
                  <label className='text-area-label'>Exclusion</label>
                  <div className="mt-2">
                    <JoditEditor
                      ref={editor}
                      // value={createDestination?.about_destination}
                      config={{
                        readonly: false,
                        height: 300,
                        toolbarButtonSize: "middle"
                      }}
                      tabIndex={1}
                    // onBlur={(newContent) => handleChange("about_destination", newContent)}
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='admin-input-div'>
                  <label className='text-area-label'>Key Highlights/Features</label>
                  <div className="mt-2">
                    <JoditEditor
                      ref={editor}
                      // value={createDestination?.about_destination}
                      config={{
                        readonly: false,
                        height: 300,
                        toolbarButtonSize: "middle"
                      }}
                      tabIndex={1}
                    // onBlur={(newContent) => handleChange("about_destination", newContent)}
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='admin-input-div'>
                  <label className='text-area-label'>Cancellation Policy</label>
                  <div className="mt-2">
                    <JoditEditor
                      ref={editor}
                      // value={createDestination?.about_destination}
                      config={{
                        readonly: false,
                        height: 300,
                        toolbarButtonSize: "middle"
                      }}
                      tabIndex={1}
                    // onBlur={(newContent) => handleChange("about_destination", newContent)}
                    />
                  </div>
                </div>
              </div>
            </div>

          </>
        )}

        {activeTab == 5 && (

          <div className='row'>
            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Meta Title <span className='required-icon'>*</span></label>
                <input type="text" placeholder='SEO Meta Title'/>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Meta Tag <span className='required-icon'>*</span></label>
                <input type="text" placeholder='SEO Meta Tag'/>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Meta Description <span className='required-icon'>*</span></label>
                <input type="text" placeholder='SEO Meta Description'/>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Video Links <span className='required-icon'>*</span></label>
                <input type="text" placeholder='Enter Video Links'/>
              </div>
            </div>

            <div className='col-lg-6'>
                <div className="admin-input-div">
                  <label>Gallery <span className='required-icon'>*</span></label>
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
                    <label>Related Trips  <span className='required-icon'>*</span></label>
                    <select>
                      <option value="">Select Trips</option>
                      <option value="">Bali Honey Moon</option>
                      <option value="">Kerala BackWater</option>
                      <option value="">Goa Beach Holiday</option>
                    </select>
                  </div>
                </div>
          </div>


        )}


      </div>
      <div className='my-4 d-flex justify-content-between '>
        <button className={`admin-add-button ${activeTab === 0 ? 'disabled' : ''}`}
          onClick={() => setActiveTab(activeTab - 1)}><i class="fa-solid fa-arrow-left me-2"></i>Previous</button>

        <button className={`admin-add-button ${activeTab === sectionTabs?.length ? 'disabled' : ''}`}
          onClick={() => setActiveTab(activeTab + 1)}>Next <i class="fa-solid fa-arrow-right ms-2"></i></button>
      </div>
    </div >
  )
}

export default TourCreation
