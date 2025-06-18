import React, { useState } from 'react'
import Header from './component/Header'
import { Images } from "../../helpers/Images/images";
import Footer from "./component/Footer"

const TourOverview = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    const timelineData = [
        {
            title: "Day 1: Airport Pick Up",
            description: `Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,

        },
        {
            title: "Day 2: Temples & River Cruise",
            description: `Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,

        },
        {
            title: "Day 3: Massage & Overnight Train",
            description: `Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
        },
        {
            title: "Day 4: Khao Sok National Park",
            description: `Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,

        },
        {
            title: "Day 5: Travel to Koh Phangan",
            description: `Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,

        },
        {
            title: "Day 6: Morning Chill & Muay Thai Lesson",
            description: `Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,

        },
        {
            title: "Day 7: Island Boat Trip",
            description: `Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,

        },
    ];
    return (
        <div>
            <Header fixed={false} />

            <div className='overflow-hidden'>
                <div className="container">
                    <div className='destination-filter-top mt-5'>
                        <div className='d-flex'>
                            <a className='destination-filter' href='/'>Home</a><i class="fa-solid fa-greater-than mx-2 mt-1"></i>
                            <a className='destination-filter'>Tours</a><i class="fa-solid fa-greater-than mx-2 mt-1"></i>
                            <a className='destination-filter'>Phuket</a>
                        </div>
                        <div>
                            <p className='destination-filter'>THE TOP {10} Phuket Tours & Excursions</p>
                        </div>
                    </div>

                    <div className='d-flex mt-4'>
                        <p className='overview-best'>Bestseller</p>
                        <p className='ms-2 overview-free'>Free cancellation</p>
                    </div>

                    <h3 className='tours-overview-head'>Phi Phi Islands Adventure Day Trip with
                        Seaview Lunch by V. Marine Tour</h3>

                    <div className='tour-overview-ratings-place'>
                        <div className='d-flex'>
                            <p>4.8 (269)</p>
                            <p className='ms-3'>Paris, France</p>
                            <p className='ms-3'>30K+ booked</p>
                        </div>

                        <div className='d-flex'>
                            <p>share</p>
                            <p className='ms-4'>wishlist</p>
                        </div>
                    </div>

                    <div className="container tour-overview-image">
                        <div className="row g-2">

                            <div className="col-lg-7 col-12">
                                <img
                                    src={Images?.overview_1}
                                    alt=""
                                />
                            </div>

                            <div className="col-lg-5 col-12">
                                <div className="row g-2">
                                    <div className="col-12">
                                        <img
                                            src={Images?.overview_2}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-6">
                                        <img
                                            src={Images?.overview_3}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-6">
                                        <img
                                            src={Images?.overview_4}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='tour-overview-image-bottom'>
                                <div className='d-flex'>
                                    <div className='tour-overview-box'>

                                    </div>
                                    <div className='ms-3 my-auto'>
                                        <p className='tour-overview-dura'>Duration</p>
                                        <p className='tour-overview-days'>3 days</p>
                                    </div>
                                </div>

                                <div className='d-flex'>
                                    <div className='tour-overview-box'>

                                    </div>
                                    <div className='ms-3 my-auto'>
                                        <p className='tour-overview-dura'>Group Size</p>
                                        <p className='tour-overview-days'>10 people</p>
                                    </div>
                                </div>

                                <div className='d-flex'>
                                    <div className='tour-overview-box'>

                                    </div>
                                    <div className='ms-3 my-auto'>
                                        <p className='tour-overview-dura'>Ages</p>
                                        <p className='tour-overview-days'>18-99 yrs</p>
                                    </div>
                                </div>

                                <div className='d-flex'>
                                    <div className='tour-overview-box'>

                                    </div>
                                    <div className='ms-3 my-auto'>
                                        <p className='tour-overview-dura'>Languages</p>
                                        <p className='tour-overview-days'>English, Japanese</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className='tour-overview-common-head'>Tour Overview</h3>
                                <p className='mt-3'>The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip whisks you around the islands in one day.
                                    Swim over the coral reefs of Pileh Lagoon, have lunch at Phi Phi Leh, snorkel at Bamboo Island, and visit Monkey Beach and
                                    Maya Bay, immortalized in "The Beach." Boat transfers, snacks, buffet lunch, snorkeling equipment, and Phuket hotel pickup
                                    and drop-off all included.</p>
                            </div>
                            <div className='tour-overview-highlight'>
                                <h5 className='mt-4'>Tour Highlights</h5>
                                <ul className='mt-3'>
                                    <li className='mt-2'>Experience the thrill of a speedboat to the stunning Phi Phi Islands</li>
                                    <li className='mt-2'>Be amazed by the variety of marine life in the archepelago</li>
                                    <li className='mt-2'>Enjoy relaxing in paradise with white sand beaches and azure turquoise water</li>
                                    <li className='mt-2'>Feel the comfort of a tour limited to 35 passengers</li>
                                    <li className='mt-2'>Catch a glimpse of the wild monkeys around Monkey Beach</li>
                                </ul>
                            </div>
                            <div className='whats-included-main'>
                                <h3 className='tour-overview-common-head'>What's included</h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className='whats-included-left'>
                                            <div className='mt-3 d-flex'>
                                                <div className='whats-included-allowed'>

                                                </div>
                                                <p className='ms-3'>Beverages, drinking water, morning tea and
                                                    buffet lunch</p>
                                            </div>
                                            <div className='mt-3 d-flex'>
                                                <div className='whats-included-allowed'>

                                                </div>
                                                <p className='ms-3'>Local taxes</p>
                                            </div>
                                            <div className='mt-3 d-flex'>
                                                <div className='whats-included-allowed'>

                                                </div>
                                                <p className='ms-3'>Hotel pickup and drop-off by air-conditioned
                                                    minivan</p>
                                            </div>

                                            <div className='mt-3 d-flex'>
                                                <div className='whats-included-allowed'>

                                                </div>
                                                <p className='ms-3'>InsuranceTransfer to a private pier</p>
                                            </div>
                                            <div className='mt-3 d-flex'>
                                                <div className='whats-included-allowed'>

                                                </div>
                                                <p className='ms-3'>Soft drinks</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='whats-included-right'>
                                            <div className='mt-3 d-flex'>
                                                <div className='whats-included-dont-allowed'>

                                                </div>
                                                <p className='ms-3'>Towel</p>
                                            </div>
                                            <div className='mt-3 d-flex'>
                                                <div className='whats-included-dont-allowed'>

                                                </div>
                                                <p className='ms-3'>Tips</p>
                                            </div>

                                            <div className='mt-3 d-flex'>
                                                <div className='whats-included-dont-allowed'>

                                                </div>
                                                <p className='ms-3'>Alcoholic Beverages</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='whats-included-main'>
                                <h3 className='tour-overview-common-head'>Itinerary</h3>

                                <div className="container">
                                    <div className="timeline-container position-relative">
                                        {timelineData.map((item, index) => (
                                            <div
                                                className="d-flex timeline-step align-items-start"
                                                key={index}
                                                onClick={() => handleToggle(index)}
                                            >
                                                {/* Dot */}
                                                <div className="timeline-dot-wrapper">
                                                    <div className={`timeline-dot ${index === 0 || index === timelineData.length - 1 ? 'filled' : ''}`} />
                                                    {index !== timelineData.length - 1 && <div className="timeline-line" />}
                                                </div>

                                                {/* Content */}
                                                <div className="ps-3 flex-grow-1">
                                                    <h6 className="fw-bold mb-1">{item.title}</h6>
                                                    {activeIndex === index && item.description && (
                                                        <p className="text-muted mb-0">{item.description}</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='whats-included-main'>
                                <h3 className='tour-overview-common-head'>FAQ'S</h3>

                                <div className="container">
                                    <div className='tour-overview-faqs mt-5'>
                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Can I get the refund?
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <p>Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full
                                                            refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay
                                                            Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingTwo">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Can I change the travel date?
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <p>Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full
                                                            refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay
                                                            Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat.</p>                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingThree">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        When and where does the tour end?
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <p>Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full
                                                            refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay
                                                            Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat.</p>                                           </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='whats-included-main'>
                                <h3 className='tour-overview-common-head'>Customer Reviews</h3>

                                <div className='customer-review-main mt-5'>

                                    <div className='customer-review-top'>
                                        <div className='d-flex'>
                                            <div className='reviwer-image'>
                                                <p className='text-white text-center'>AT</p>
                                            </div>
                                            <p className='reviwer-name ms-3 my-auto'>Ali Tufan</p>

                                        </div>
                                        <div>
                                            <p className='reviwer-date'>April 2023</p>
                                        </div>
                                    </div>
                                    <p className='reviwer-head'>Take this tour! Its fantastic!</p>
                                    <p className=''>Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the
                                        stamps as a souvenir. Must see for a Harry Potter fan.</p>

                                    <div className='row'>
                                        <div className="col-lg-3">
                                            <div className='customer-review-image'>
                                                <img src={Images?.review_1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className='customer-review-image'>
                                                <img src={Images?.review_2} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className='customer-review-image'>
                                                <img src={Images?.review_2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='customer-review-main mt-5'>

                                    <div className='customer-review-top'>
                                        <div className='d-flex'>
                                            <div className='reviwer-image'>
                                                <p className='text-white text-center'>AT</p>
                                            </div>
                                            <p className='reviwer-name ms-3 my-auto'>Ali Tufan</p>

                                        </div>
                                        <div>
                                            <p className='reviwer-date'>April 2023</p>
                                        </div>
                                    </div>
                                    <p className='reviwer-head'>Take this tour! Its fantastic!</p>
                                    <p className=''>Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the
                                        stamps as a souvenir. Must see for a Harry Potter fan.</p>

                                    <div className='row'>
                                        <div className="col-lg-3">
                                            <div className='customer-review-image'>
                                                <img src={Images?.review_1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className='customer-review-image'>
                                                <img src={Images?.review_2} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className='customer-review-image'>
                                                <img src={Images?.review_2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='customer-review-main mt-5'>

                                    <div className='customer-review-top'>
                                        <div className='d-flex'>
                                            <div className='reviwer-image'>
                                                <p className='text-white text-center'>AT</p>
                                            </div>
                                            <p className='reviwer-name ms-3 my-auto'>Ali Tufan</p>

                                        </div>
                                        <div>
                                            <p className='reviwer-date'>April 2023</p>
                                        </div>
                                    </div>
                                    <p className='reviwer-head'>Take this tour! Its fantastic!</p>
                                    <p className=''>Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the
                                        stamps as a souvenir. Must see for a Harry Potter fan.</p>

                                    <div className='row'>
                                        <div className="col-lg-3">
                                            <div className='customer-review-image'>
                                                <img src={Images?.review_1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className='customer-review-image'>
                                                <img src={Images?.review_2} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className='customer-review-image'>
                                                <img src={Images?.review_2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='customer-review-main mt-5'>

                                    <div className='customer-review-top'>
                                        <div className='d-flex'>
                                            <div className='reviwer-image'>
                                                <p className='text-white text-center'>AT</p>
                                            </div>
                                            <p className='reviwer-name ms-3 my-auto'>Ali Tufan</p>

                                        </div>
                                        <div>
                                            <p className='reviwer-date'>April 2023</p>
                                        </div>
                                    </div>
                                    <p className='reviwer-head'>Take this tour! Its fantastic!</p>
                                    <p className=''>Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the
                                        stamps as a souvenir. Must see for a Harry Potter fan.</p>

                                    <div className='row'>
                                        <div className="col-lg-3">
                                            <div className='customer-review-image'>
                                                <img src={Images?.review_1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className='customer-review-image'>
                                                <img src={Images?.review_2} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className='customer-review-image'>
                                                <img src={Images?.review_2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className='see-more-review'>See more reviews</button>
                            </div>

                            <div className='whats-included-main'>
                                <h3 className='tour-overview-common-head'>Leave a Reply</h3>
                                <p className='my-3'>Your email address will not be published. Required fields are marked *</p>
                            </div>
                        </div>
                    </div>

                    <div className='whats-included-main'>
                        <h3 className='tour-overview-common-head'>You might also like...</h3>
                        <div className='mt-3'>
                            <div className="row">
                                <div className='col-lg-3'>
                                    <div className="featured-card-main popular-card-main">
                                        <div>
                                            <img className="featured-card-img" src={Images.featured_card} alt="featured" />
                                        </div>
                                        <div className="featured-content-main">
                                            <p className="featured-city-para">Paris, France</p>
                                            <p className="featured-content">Centipede Tour - Guided Arizona Desert Tour by ATV</p>
                                            <div className="featured-bottom-content">
                                                <p>4 days</p>
                                                <p>from <span className="fw-bold">1200rs</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className="featured-card-main popular-card-main">
                                        <div>
                                            <img className="featured-card-img" src={Images.featured_card} alt="featured" />
                                        </div>
                                        <div className="featured-content-main">
                                            <p className="featured-city-para">Paris, France</p>
                                            <p className="featured-content">Centipede Tour - Guided Arizona Desert Tour by ATV</p>
                                            <div className="featured-bottom-content">
                                                <p>4 days</p>
                                                <p>from <span className="fw-bold">1200rs</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className="featured-card-main popular-card-main">
                                        <div>
                                            <img className="featured-card-img" src={Images.featured_card} alt="featured" />
                                        </div>
                                        <div className="featured-content-main">
                                            <p className="featured-city-para">Paris, France</p>
                                            <p className="featured-content">Centipede Tour - Guided Arizona Desert Tour by ATV</p>
                                            <div className="featured-bottom-content">
                                                <p>4 days</p>
                                                <p>from <span className="fw-bold">1200rs</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className="featured-card-main popular-card-main">
                                        <div>
                                            <img className="featured-card-img" src={Images.featured_card} alt="featured" />
                                        </div>
                                        <div className="featured-content-main">
                                            <p className="featured-city-para">Paris, France</p>
                                            <p className="featured-content">Centipede Tour - Guided Arizona Desert Tour by ATV</p>
                                            <div className="featured-bottom-content">
                                                <p>4 days</p>
                                                <p>from <span className="fw-bold">1200rs</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div >
    )
}

export default TourOverview
