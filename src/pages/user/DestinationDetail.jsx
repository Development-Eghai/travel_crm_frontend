import React, { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Images } from "../../helpers/Images/images";
import { useNavigate } from "react-router";

const DestinationDetail = () => {
    const navigate = useNavigate();
    const bannerImages = [
        Images?.destination_one,
        Images?.destination_two,
        Images?.destination_three
    ];
    const [readMore, setReadMore] = useState(false)
    const [viewMore, setViewMore] = useState(false)
    return (
        <div>
            <Header />
            <section className="destination-detail-banner-main">
                <Swiper
                    modules={[EffectFade, Autoplay, Navigation]}
                    navigation={true}
                    effect="fade"
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="destination-swiper"
                >
                    {bannerImages.map((imageUrl, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="destination-slide"
                                style={{
                                    backgroundImage: `url(${imageUrl})`,
                                }}
                            >
                                <div className="destination-overlay"></div>
                                <div className='destination-slide-content'>
                                    <h3 className="dest-package-name">Europe Tour Packages</h3>
                                    <p className="dest-package-para">
                                        <span>Europe: </span>
                                        The Land Of Endless Discoveries - Upto 30% Off
                                    </p>
                                    <div className='mt-5'>
                                        <div className='d-flex'>
                                            <div>
                                                <img src={Images?.discount_banner} alt="discount-icon-image" className='discount-icon-image' />
                                            </div>
                                            <p className='starting-price'>Starting Price:</p>
                                            <p className='discount-price-banner'>Rs. 42,999/- Per Person</p>
                                        </div>
                                        <button className='destination-banner-btn mt-1' onClick={() => navigate("/")}><i class="fa-solid fa-phone me-1"></i> Request a Callback</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className='section-padding'>
                <div className="container">
                    <div className='destination-about-tour'>
                        <div className={`destination-read-less-main ${readMore ? 'd-flex' : 'd-none'}`}>
                            <button className='destination-read-less-btn' onClick={() => setReadMore(!readMore)}>Read Less</button>
                        </div>

                        <h5 className='fw-bold mb-4'>About Sikkim Tour Packages</h5>
                        <div className={`destination-about-tour-content ${readMore ? 'destination-about-tour-content-expand' : 'destination-about-tour-content'}`}>
                            <div className='destination-read-more-main'>
                                <button className='destination-read-more-btn' onClick={() => setReadMore(!readMore)}>{readMore ? 'Read Less...' : 'Read More...'}</button>
                            </div>
                            <p>Welcome to a realm where history and culture seamlessly converge, eagerly awaiting your exploration through our meticulously curated Georgia tour package. If you crave breathtaking landscapes, ancient monuments, and a thrilling sense of adventure at every turn, then our diverse selection of Georgia trip packages is precisely what you need.

                                From vibrant cities to tranquil countrysides, each Georgia tour package promises an unforgettable adventure. Immerse yourself in an extraordinary journey with our top-tier Georgia trip packages that cater to every traveler’s fantasy. Let's embark on this incredible adventure together!

                                Top Attractions Included in Georgia Travel Packages
                                Embark on a journey through the wonders of Georgia with our meticulously crafted Georgia tour package. Discover the rich history, vibrant culture, and stunning natural landscapes that await you in this enchanting country, where every destination offers a new adventure and every moment is worth savoring.

                                With that said, scroll down and check out all the places which you will explore with our Georgia Tour Packages.

                                1. Narikala Fortress
                                Included in nearly every Georgia trip package, this ancient fortification offers panoramic views of Tbilisi and stands as a testament to the region's rich history and resilience. Dating back to the 4th century, it's a must-visit attraction. Walking through its grounds, you can feel the echoes of the past, with each stone narrating tales of bygone eras. Whether day or night, the fortress imbues your trip to Georgia with a sense of awe and historical wonder.

                                2. Mtskheta
                                Highlighted in most Georgia travel packages, this UNESCO World Heritage site is known as the religious heart of Georgia. Key sites include the Svetitskhoveli Cathedral and the historic Jvari Monastery, both offering profound insights into Georgia's Christian heritage. Strolling through Mtskheta, you will be immersed in centuries-old traditions and spiritual significance, making your tour to Georgia an enriching experience filled with historical and cultural discovery.

                                3. Kazbegi Region
                                Kazbegi Region: A highlight for nature enthusiasts on a tour to Georgia, this area is famed for the majestic Mount Kazbek and the Gergeti Trinity Church. Included in most Georgia holiday packages from India, this region's breathtaking landscapes provide a perfect blend of spirituality and natural beauty. Whether you're trekking up the mountain or marveling at the church perched on a hill, Kazbegi leaves an indelible mark on your trip to Georgia.

                                4. Wine Regions of Kakheti
                                Recognized as the cradle of wine, Georgia's Kakheti region is a staple in many Georgia travel packages. Visitors can savor local wines and witness traditional winemaking processes in the fertile Alazani Valley, enriching their trip to Georgia with unique cultural experiences. The lush vineyards and hospitable local vintners provide not just a taste of Georgia's world-renowned wines, but also a connection to its ancient traditions and heritage.

                                5. Gudauri Ski Resort
                                For those who love winter sports, Gudauri is often included in the best Georgia tour packages. Nestled in the Greater Caucasus Mountain Range, this resort offers exhilarating skiing and snowboarding experiences. The pristine snow-covered slopes cater to all skill levels,</p>
                        </div>
                    </div>
                </div>

            </section>

            <section className='section-padding-bottom'>
                <div className="container">
                    <div>
                        <h4 className='common-section-heading'>Featured Packages</h4>
                    </div>

                    <div className='mt-4'>
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

                            <div className={`destination-viewall-main ${viewMore ? 'd-none' : 'd-flex'}`} >
                                <button className='destination-viewall' onClick={() => setViewMore(!viewMore)}>Show More <i class="fa-solid fa-arrow-right ms-2"></i></button>
                            </div>

                            {viewMore && (
                                <>
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

                                    <div className={`destination-viewall-main ${viewMore ? 'd-flex' : 'd-none'}`} >
                                        <button className='destination-viewall' onClick={() => setViewMore(!viewMore)}>Show Less <i class="fa-solid fa-arrow-right ms-2"></i></button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-padding-bottom'>
                <div className="container">
                    <div>
                        <h4 className='common-section-heading text-center'>Frequently Asked Questions</h4>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-lg-8'>
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
            </section>

            <section className='section-padding-bottom'>
                <div className="container">
                    <div>
                        <h4 className='common-section-heading travel-guidence-head'>Europe Travel Guidelines</h4>
                    </div>

                    <div className='destionation-travel-guidence'>
                        <p className=''>1. While applying for a Schengen Visa, your passport should be valid 6 months post the date of travel.</p>
                        <p className='mt-2'>2. Your passport should have at least 2 blank pages with all the previous Visa applications through the same passport.</p>
                        <p className='mt-2'>3. It is advised to activate an International roaming plan as per the countries you are visiting, before departing from India.</p>
                        <p className='mt-2'>4. Currency exchange rates at airports are comparatively higher. Rather exchange your currency from your city in India for better deals. You can also use an International travel card which is widely accepted in Europe.</p>
                    </div>
                </div>
            </section>

            <section className='section-padding-bottom'>
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='destination-enquiry-form'>
                                <h5 className='fw-bold'>Don’t Just Dream, Travel! 🔥</h5>
                                <div className='destination-enquiry-input-main'>
                                    <div className='destination-enquiry-input-div'>
                                        <i class="fa-solid fa-user-tie ps-2"></i>
                                        <input placeholder='Enter Your Name*' />
                                    </div>
                                    <div className='destination-enquiry-input-div'>
                                        <i class="fa-solid fa-user-tie ps-2"></i>
                                        <input placeholder='Enter Your Phone Number*' />
                                    </div>
                                    <button className='destination-enquiry-button'>
                                        ENQUIRE NOW
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-padding-bottom'>
                <div className='container'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h4 className='common-section-heading'>Travel Articles</h4>
                        </div>
                        <div>
                            <a href='/' className='anchor-tag'>See all</a>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className="blogs-card-main mt-4 position-relative">
                                <div>
                                    <img className="blogs-card-img" src={Images.featured_card} alt="featured" />
                                    <div className='blogs-tag-main'>
                                        <p>Trips</p>
                                    </div>
                                </div>
                                <div className="blogs-content-main">
                                    <div className='d-flex mt-4'>
                                        <p className="blogs-author">April 06 2023</p>
                                        <p className="blogs-posted">By Ali Tufan</p>
                                    </div>
                                    <p className='blogs-content mt-2'>Kenya vs Tanzania Safari: The Better African
                                        Safari Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className="blogs-card-main mt-4 position-relative">
                                <div>
                                    <img className="blogs-card-img" src={Images.featured_card} alt="featured" />
                                    <div className='blogs-tag-main'>
                                        <p>Trips</p>
                                    </div>
                                </div>
                                <div className="blogs-content-main">
                                    <div className='d-flex mt-4'>
                                        <p className="blogs-author">April 06 2023</p>
                                        <p className="blogs-posted">By Ali Tufan</p>
                                    </div>
                                    <p className='blogs-content mt-2'>Kenya vs Tanzania Safari: The Better African
                                        Safari Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className="blogs-card-main mt-4 position-relative">
                                <div>
                                    <img className="blogs-card-img" src={Images.featured_card} alt="featured" />
                                    <div className='blogs-tag-main'>
                                        <p>Trips</p>
                                    </div>
                                </div>
                                <div className="blogs-content-main">
                                    <div className='d-flex mt-4'>
                                        <p className="blogs-author">April 06 2023</p>
                                        <p className="blogs-posted">By Ali Tufan</p>
                                    </div>
                                    <p className='blogs-content mt-2'>Kenya vs Tanzania Safari: The Better African
                                        Safari Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default DestinationDetail
