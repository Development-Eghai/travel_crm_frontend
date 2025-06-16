import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HomeBanner = () => {
    return (
        <>
            <section className='overflow-hidden'>
                <div>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        speed={1200}
                        slidesPerView={1}
                        // navigation
                        className="homepage-banner-swiper"
                    >
                        <SwiperSlide>
                            <div className="homepaage-banner-image-1">
                                <div className="home-banner-content">
                                    <p className="banner-para">
                                        Search, compare and book 15,000+ multiday tours all over the world.
                                    </p>
                                    <h1 className="banner-heading">
                                        Tours and Trip packages <br className="break-tag" /> Globally
                                    </h1>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="homepaage-banner-image-2">
                                <div className="home-banner-content">
                                    <p className="banner-para">
                                        Search, compare and book 15,000+ multiday tours all over the world.
                                    </p>
                                    <h1 className="banner-heading">
                                        Tours and Trip packages <br className="break-tag" /> Globally
                                    </h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default HomeBanner
