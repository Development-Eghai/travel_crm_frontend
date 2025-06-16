import React, { useRef } from 'react'
import Header from "./component/Header"
import Footer from "./component/Footer"
import HomeBanner from './component/HomeBanner'
import { Images } from "../../helpers/Images/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const Homepage = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div>
            <Header />
            <HomeBanner />
            <div className='overflow-hidden'>
                <section className='featured-trips-section section-padding'>
                    <div className='container'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h4 className='common-section-heading'>Featured Trips</h4>
                            </div>
                            <div>
                                <div className="slider-nav">
                                    <button ref={prevRef} className="nav-btn">←</button>
                                    <button ref={nextRef} className="nav-btn">→</button>
                                </div>
                            </div>
                        </div>
                        <div className="featured-slider-wrapper mt-3">
                            <Swiper
                                modules={[Navigation]}
                                slidesPerView={4}
                                slidesPerGroup={4}
                                spaceBetween={10}
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                onBeforeInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                }}
                                breakpoints={{
                                    320: { slidesPerView: 1.2, slidesPerGroup: 1 },
                                    576: { slidesPerView: 2, slidesPerGroup: 2 },
                                    768: { slidesPerView: 3, slidesPerGroup: 3 },
                                    992: { slidesPerView: 4, slidesPerGroup: 4 },
                                    1200: { slidesPerView: 4, slidesPerGroup: 4 },
                                }}
                                loop={false}
                            >
                                {[...Array(20)].map((_, index) => (
                                    <SwiperSlide key={index}>

                                        <div className="featured-card-main">
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
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
                <section className='trending-destination-section section-padding'>
                    <div className='container'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h4 className='common-section-heading'>Trending Destinations</h4>
                            </div>
                            <div>
                                <a href='/' className='anchor-tag'>See all</a>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className='trending-grid-one position-relative'>
                                        <div>
                                            <img src={Images.trending_one} alt="trending-one" className='trending-image' />
                                            <div className='trending-grid-content'>
                                                <p className='trending-grid-para'>Paris, France</p>
                                            </div>
                                        </div>
                                        <div className='mt-4'>
                                            <img src={Images.trending_two} alt="trending-one" className='trending-image' />
                                            <div className='trending-grid-content-two'>
                                                <p className='trending-grid-para'>Italy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className='position-relative'>
                                        <img src={Images.trending_three} alt="trending-one" className='trending-image' />
                                        <div className='trending-grid-content-three'>
                                            <p className='trending-grid-para'>France</p>
                                        </div>
                                    </div>
                                    <div className='d-flex mt-4'>
                                        <div className='position-relative'>
                                            <img src={Images.trending_four} alt="trending-one" className='trending-image' />
                                            <div className='trending-grid-content-three'>
                                                <p className='trending-grid-para'>Iran</p>
                                            </div>
                                        </div>
                                        <div className='ms-4 position-relative'>
                                            <img src={Images.trending_five} alt="trending-one" className='trending-image' />
                                            <div className='trending-grid-content-three'>
                                                <p className='trending-grid-para'>chennai</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className='position-relative'>
                                        <img src={Images.trending_six} alt="trending-one" className='trending-image' />
                                        <div className='trending-grid-content-three'>
                                                <p className='trending-grid-para'>Australia</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Homepage
