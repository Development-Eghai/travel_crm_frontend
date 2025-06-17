import React from 'react'
import Header from './component/Header'

const DestinationFilters = () => {
  return (
    <div>
      <Header fixed={false} />

      <div className=''>
        <div className="container">
          <div className='destination-filter-top'>
            <div className='d-flex'>
              <a className='destination-filter' href='/'>Home</a><i class="fa-solid fa-greater-than mx-2 mt-1"></i>
              <a className='destination-filter'>Tours</a><i class="fa-solid fa-greater-than mx-2 mt-1"></i>
              <a className='destination-filter'>Phuket</a>
            </div>
            <div>
              <p className='destination-filter'>THE TOP {10} Phuket Tours & Excursions</p>
            </div>
          </div>

          <h2 className='destination-filter-heading'>Explore all things to do in Phuket</h2>

          <section>
            <div className="row">
              <div className="col-lg-3">
                <div className='destination-filter-main-left'>
                  <div className='destination-filter-main-left-top'>
                    <p className='text-white'>When are you traveling?</p>
                  </div>

                  <div className='destination-filter-main-left-bottom'>
                    <div class="accordion" id="accordionExample">
                      <div className='destination-filter-main pt-4'>
                        <div class="accordion-item filter-accordion">
                          <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button p-0 bg-white filter-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              <h5 className='mb-3'>Tour Type</h5>
                            </button>
                          </h2>
                          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className='filter-input'>
                              <input type="checkbox" /> <span>Nature Tours</span>
                            </div>
                            <div className='filter-input'>
                              <input type="checkbox" /> <span>Adventure Tours</span>
                            </div>
                            <div className='filter-input'>
                              <input type="checkbox" /> <span>Cultural Tours</span>
                            </div>
                            <div className='filter-input'>
                              <input type="checkbox" /> <span>Food Tours</span>
                            </div>
                            <div className='filter-input'>
                              <input type="checkbox" /> <span>City Tours</span>
                            </div> <div className='filter-input'>
                              <input type="checkbox" /> <span>Cruises Tours</span>
                            </div>
                          </div>
                        </div>



                      </div>
                      <div className='destination-filter-main'>
                        <div>
                          <h5 className='mb-3 filter-heading'>Filter Price</h5>
                        </div>

                        <div className='filter-input'>
                          <input type="checkbox" /> <span>20k-40k</span>
                        </div>
                        <div className='filter-input'>
                          <input type="checkbox" /> <span>40k-60k</span>
                        </div>
                        <div className='filter-input'>
                          <input type="checkbox" /> <span>60k-80k</span>
                        </div>
                        <div className='filter-input'>
                          <input type="checkbox" /> <span>80k-100k</span>
                        </div>

                      </div>
                      <div className='destination-filter-main'>
                        <h5 className='mb-3 filter-heading'>Duration</h5>
                        <div className='filter-input'>
                          <input type="checkbox" /> <span>3days</span>
                        </div>
                        <div className='filter-input'>
                          <input type="checkbox" /> <span>6days</span>
                        </div>
                        <div className='filter-input'>
                          <input type="checkbox" /> <span>10days</span>
                        </div>
                      </div>
                      <div className='destination-filter-main'>
                        <h5 className='mb-3 filter-heading'>Ratings</h5>
                        <div className='filter-input'>
                          <input type="checkbox" /> <span>5.0 & above</span>
                        </div>
                        <div className='filter-input'>
                          <input type="checkbox" /> <span>4.0 & above</span>
                        </div>
                        <div className='filter-input'>
                          <input type="checkbox" /> <span>3.0 & above</span>
                        </div>
                        <div className='filter-input'>
                          <input type="checkbox" /> <span>2.0 & above</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className='destination-filter-main-right'>

                </div>
              </div>
            </div>
          </section>
        </div>
      </div >
    </div >
  )
}

export default DestinationFilters
