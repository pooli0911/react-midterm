import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Cookiedetail from "../components/CookieDetail"

export default function sswiper({ cookies }) {
    const slides = [];
    for (let i = 0; i < 10; i++) {
        slides.push(
            <div>
                <SwiperSlide>
                    <div><Cookiedetail cookies={cookies} /></div>
                </SwiperSlide>
            </div>
        )
    }

    return (
        <React.Fragment>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {slides}
            </Swiper>
        </React.Fragment >
    );
};