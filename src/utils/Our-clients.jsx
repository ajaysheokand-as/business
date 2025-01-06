// Import Swiper styles
import { clients } from "../data/Main";
export default function OurClients() {
  return (
    <>
      <div className="w-full h-auto py-12 flex flex-col justify-center items-center bg-gray-400 sm:hidden">
        <div>
          <h1 className="text-white text-4xl font-bold mb-8">OUR CLIENTS</h1>
        </div>
        <div className="flex justify-cente flex-col items-center gap-8">
          {clients?.map((item) => {
            return (
              <div className="w-64 h-full text-white">
                <img
                  src={item.image}
                  className="w-full h-56 rounded-sm shadow-lg shadow-cyan-500 hover:shadow-black cursor-pointer"
                  alt="#"
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* start after sm */}
      <div className="hidden w-full border-x-2 border-b-2 border-black h-auto sm:h-[90vh] relative sm:block">
        <div
          style={{
            backgroundImage: `url(./images/clientBg1.jpg)`,
          }}
          className="w-full h-1/2 flex justify-center text-white bg-cover"
        >
          <h1 className="text-2xl font-extrabold sm:text-5xl mt-8 sm:mt-20">
            Our Clients
          </h1>
        </div>
        <div className="w-full h-1/2 bg-gray-100"></div>
        <div className="w-full h-1/2 flex justify-center items-center gap-12 bg-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {clients?.map((item) => {
            return (
              <div className="w-64 h-full text-white flex justify-center items-center">
                <img
                  src={item.image}
                  className="w-full h-2/3 rounded-sm shadow-lg shadow-black hover:shadow-cyan-500 cursor-pointer"
                  alt="#"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// <section className=" bg-gray-100 px-1 md:py-16 overflow-hidden container">
// <div className="flex justify-center items-center">
//   <h1 className=" font-black text-4xl md:text-7xl px-3 my-5">
//     Our Clients
//   </h1>
// </div>
// <div className=" my-8 p-4">
//   <Swiper
//     // install Swiper modules
//     modules={[Navigation, Pagination, Scrollbar, A11y]}
//     spaceBetween={50}
//     slidesPerView={3}
//     pagination={{ clickable: true }}
//     breakpoints={{
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 10,
//       },
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 40,
//       },
//       1024: {
//         slidesPerView: 4,
//         spaceBetween: 50,
//       },
//     }}
//   >
//     {clients.map((client, index) => (
//       <SwiperSlide key={index}>
//         <div className="flex justify-center items-center">
//           <img src={client.image} alt="" className="w-72" />
//         </div>
//       </SwiperSlide>
//     ))}
//   </Swiper>
// </div>
// </section>
