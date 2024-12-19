
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { clients } from '../data/Main';
export default function OurClients() {
    
    return (
        <section className=" bg-gray-100 px-1 md:py-16 overflow-hidden">
                         <h1 className=" font-bold text-[40px] px-3 text-center">Our Clients</h1>
                         <div className=" my-8 p-4">
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
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

        >
            {clients.map((client, index) => (
                <SwiperSlide key={index}>
                    <div className="flex items-center ">
                        <img src={client.image} alt="" className="w=[132px] h-[132px] mr-4" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
        </section>
    );
};
