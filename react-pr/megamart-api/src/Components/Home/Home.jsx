import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Home.css'; 
import { Pagination, Autoplay } from 'swiper/modules';

const Home = () => {
    return (
        <div className="home-slider">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
            >

                <SwiperSlide>
                    <div className="banner">
                        <img src="./src/img/11.png" alt="Banner 1" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="banner">
                        <img src="./src/img/12.png" alt="Banner 2" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="banner">
                        <img src="./src/img/13.png" alt="Banner 3" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Home;
