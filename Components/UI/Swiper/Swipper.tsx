import React, { Children, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";

// import "./styles.css";

export default function Slider({ children }: any) {
    return (
        <>
            <Swiper className="mySwiper">

                {children}

            </Swiper>
        </>
    );
}

