import JoditEditor from 'jodit-react';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TourCreation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const sectionTabs = [
    {
      id: 1,
      name: 'Basic Info'
    },
    {
      id: 2,
      name: 'Itinerary'
    },
    {
      id: 3,
      name: 'Pricing'
    },
    {
      id: 4,
      name: 'Fixed Departure'
    },
    {
      id: 5,
      name: 'SEO'
    },
    {
      id: 6,
      name: 'Faqs and others'
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


  const allOptions = [
    { value: 'honeymoon', label: 'Honeymoon' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'family', label: 'Family' },
    { value: 'international', label: 'International' },
    { value: 'solo', label: 'solo' },
  ];

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
        <h3 className='my-auto'>Create Tour</h3>

        <button className='admin-add-button mt-0'>Create Tour</button>
      </div>

      <div className='creta-tour-parent'>
        {sectionTabs.map((item, index) => (
          <div className={`create-tour-main ${activeTab === index ? 'active' : ''}`} key={item.id}
            onClick={() => setActiveTab(index)}>
            <a>{item?.name}</a>
          </div>
        ))}
      </div>

      <div className='mt-3'>

        {activeTab == 0 && (
          <div className='row'>
            <div className='col-lg-12'>
              <div className='admin-input-div'>
                <label>Trip Title <span className='required-icon'>*</span></label>
                <input type="text" placeholder='e.g., Phuket' />
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='admin-input-div'>
                <label>Short Description / Tagline</label>
                <input type="text" placeholder='Brief summary of listing page' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Trip Type <span className='required-icon'>*</span></label>
                <select>
                  <option value="">Select trip type</option>
                  <option value="adventure">Adventure</option>
                  <option value="cultural">Cultural</option>
                  <option value="wildlife">Wildlife</option>
                  <option value="pilgrimage">Pilgrimage</option>
                  <option value="honeymoon">Honeymoon</option>
                  <option value="family">Family</option>
                  <option value="solo">Solo Travel</option>
                </select>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Destination<span className='required-icon'>*</span></label>
                <select>
                  <option value="">Select Destination</option>
                  <option value="adventure">India</option>
                  <option value="cultural">China</option>
                  <option value="wildlife">Maldives</option>
                  <option value="pilgrimage">Pune</option>
                  <option value="honeymoon">Australia</option>
                  <option value="family">Bangalore</option>
                </select>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Tour Duration Days</label>
                <input type="text" placeholder='Number of days' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Tour Duration Nights</label>
                <input type="text" placeholder='Number of nights' />
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='admin-input-div'>
                <label>About Tour Packages</label>
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
                <label>Category</label>
                <Select isMulti
                  options={allOptions}
                  placeholder="Select Category"
                  onChange={handleDropDownChange}
                  isClearable
                />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='admin-input-div ms-5'>
                <label>Featured Trip</label>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>

          </div>
        )}

        {activeTab == 1 && (
          <>
            <div className='row'>
              <div className='col-lg-12'>
                <div className="mt-3 destination-faq">
                  <div className="accordion" id="accordionExample">
                    {itinerarys.map((itinerary, index) => (
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
                              Day {index + 1}
                            </button>
                            <div className="ms-3 d-flex gap-2">
                              <button className="destination-faq-add" onClick={addItinerary}>
                                Add
                              </button>
                              <button
                                className="destination-faq-add faq-delete me-4"
                                onClick={() => deleteItinerary(index)}
                              >
                                Delete
                              </button>
                            </div>
                          </h2>

                          <div
                            id={`collapse${index}`}
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="admin-input-div mb-3">
                                <label>Day Title</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={itinerary?.day_title}
                                  onChange={(e) =>
                                    updateItinerary(index, "day_title", e.target.value)
                                  }
                                />
                              </div>

                              <div className="admin-input-div admin-desti-faq">
                                <label>Description</label>
                                <textarea
                                  className="form-control"
                                  value={itinerary?.description}
                                  onChange={(e) =>
                                    updateItinerary(index, "description", e.target.value)
                                  }
                                />
                              </div>
                              <div className="admin-input-div">
                                <label>Images for Day (Optional)</label>
                                <input
                                  type="file"
                                  multiple
                                  accept="image/*"
                                  onChange={(e) => handleImageUpload(index, e.target.files)}
                                  className="form-control"
                                />
                              </div>
                              <div className="itinerary-preview-image d-flex">
                                {itinerary?.images.map((img, i) => (
                                  <div key={i} className='mt-4'>
                                    <img
                                      src={URL.createObjectURL(img)}
                                      alt={`preview-${i}`}
                                    />
                                  </div>
                                ))}
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

        {activeTab == 2 && (

          <div className='row'>
            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Pricing Model  <span className='required-icon'>*</span></label>
                <select>
                  <option value="">Select Pricing</option>
                  <option value="Fixed Price">Fixed Price</option>
                  <option value="Price Per Person">Price Per Person</option>
                  <option value="cultural">Price Per Package</option>
                  <option value="wildlife">Inquiry Based </option>
                </select>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Base Price  <span className='required-icon'>*</span></label>
                <input type="number" placeholder='Enter Base Price' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Discounted Price</label>
                <input type="number" placeholder='Enter Base Price' />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Currency </label>
                <select>
                  <option value="">Select Currency</option>
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                </select>
              </div>
            </div>

          </div>

        )}

        {activeTab == 3 && (
          <>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='admin-input-div'>
                  <label>Start Date<span className='required-icon'>*</span></label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="Select Start Date"
                    className='w-100'
                  />
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='admin-input-div'>
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
                  <label>Total Slots/Capacity</label>
                  <input type="number" placeholder='Enter Slocts/Capacity' />
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='admin-input-div'>
                  <label>Available Slots</label>
                  <input type="number" value={5} />
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='admin-input-div'>
                  <label>Price for this Departure</label>
                  <input type="number" placeholder='Enter Price' />
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='admin-input-div'>
                  <label>Status  <span className='required-icon'>*</span></label>
                  <select>
                    <option value="">Select Status</option>
                    <option value="Fixed Price">Open</option>
                    <option value="Price Per Person">Booked Out</option>
                    <option value="cultural">Cancelled</option>
                  </select>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='admin-input-div'>
                  <label>Booking Cut-off Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="Select Cut-off Date"
                    className='w-100'
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab == 4 && (

          <div className='row'>
            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Meta Title <span className='required-icon'>*</span></label>
                <input type="text" />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Meta Tag <span className='required-icon'>*</span></label>
                <input type="text" />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='admin-input-div'>
                <label>Meta Description <span className='required-icon'>*</span></label>
                <input type="text" />
              </div>
            </div>
          </div>

        )}

        {activeTab == 5 && (

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
            <div className='admin-input-div'>
              <label className='text-area-label'>Frequently Asked Questions</label>
            </div>
            <div className="mt-3 destination-faq">
              <div className="accordion" id="accordionExample">
                {faqs.map((faq, index) => (
                  <div className=''>
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
                          FAQ {index + 1}
                        </button>
                        <div className="ms-3 d-flex gap-2">
                          <button className="destination-faq-add" onClick={addFaq}>
                            Add
                          </button>
                          <button
                            className="destination-faq-add faq-delete me-4"
                            onClick={() => deleteFaq(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </h2>

                      <div
                        id={`collapse${index}`}
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="admin-input-div mb-3">
                            <label className=''>Faq Question</label>
                            <input
                              type="text"
                              className="form-control"
                              value={faq.question}
                              onChange={(e) =>
                                updateFaq(index, "question", e.target.value)
                              }
                            />
                          </div>

                          <div className="admin-input-div admin-desti-faq">
                            <label>Faq Answer</label>
                            <textarea
                              className="form-control"
                              value={faq.answer}
                              onChange={(e) =>
                                updateFaq(index, "answer", e.target.value)
                              }
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

        )}


      </div>
      <div className='my-4 d-flex justify-content-between'>
        <button className={`admin-add-button ${activeTab === 0 ? 'disabled' : ''}`}
          onClick={() => setActiveTab(activeTab - 1)}><i class="fa-solid fa-arrow-left me-2"></i>Previous</button>

        <button className={`admin-add-button ${activeTab === sectionTabs?.length - 1 ? 'disabled' : ''}`}
          onClick={() => setActiveTab(activeTab + 1)}>Next <i class="fa-solid fa-arrow-right ms-2"></i></button>
      </div>
    </div >
  )
}

export default TourCreation
