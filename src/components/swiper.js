import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Cookiedetail from "../components/CookieDetail"
import {getCookiesByStyle} from "../api"

export default function sswiper({ cookies }) {
    const slides = [];
    // const amount = getCookiesByStyle(cookies.style);
    for (let i = 0; i < 7; i++) {
        slides.push(
            <div>
                <SwiperSlide>
                    <div>
                        <Cookiedetail cookie={cookies[i]} />
                    </div>
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
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {slides}
            </Swiper>
        </React.Fragment >
    );
};