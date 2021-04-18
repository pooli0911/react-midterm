
import Slider1 from "../img/home_img/carousel1.jpg";
import Slider2 from "../img/home_img/carousel2.jpg";
import Slider3 from "../img/home_img/carousel3.jpg";
import Slider4 from "../img/home_img/carousel4.jpg";
import Slider5 from "../img/home_img/carousel5.jpg";
import { Carousel } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';


export default function Top() {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#41439e',
    };
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <img className="slider-img" src={Slider1}></img>
                </div>
                <div>
                    <img className="slider-img" src={Slider2}></img>
                </div>
                <div>
                    <img className="slider-img" src={Slider3}></img>
                </div>
                <div>
                    <img className="slider-img" src={Slider4}></img>
                </div>
                <div>
                    <img className="slider-img" src={Slider5}></img>
                </div>
            </Carousel>
            <Swiper
                navigation
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img className="slider-img" src={Slider1}></img></SwiperSlide>
                <SwiperSlide><img className="slider-img" src={Slider2}></img></SwiperSlide>
                <SwiperSlide><img className="slider-img" src={Slider3}></img></SwiperSlide>
                <SwiperSlide><img className="slider-img" src={Slider4}></img></SwiperSlide>
      ...
            </Swiper>
        </div>
    );
}