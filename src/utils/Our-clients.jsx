import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
export default function OurClients() {

    const clients = [
        { image: "images/Frame-1.png", },
        { image: "images/Frame-3.png", },
        { image: "images/Frame-4.png", },
        { image: "images/Frame-5.png", },
        { image: "images/Frame-6.png", },
        { image: "images/Frame-7.png", },
    ];

    return (
        <>
            <section className=" bg-gray-100 px-10 py-16 overflow-hidden">
                <h1 className=" font-bold text-[40px] px-3 text-center">Our Clients</h1>
                <div className=" my-8 p-4">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        autoplay={
                            {
                                delay: 100,
                                disableOnInteraction: false
                            }
                        }
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper"
                    >
                        {clients.map((client, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center ">
                                    <img src={client.image} alt="Client Image" className="w=[132px] h-[132px] mr-4" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}
