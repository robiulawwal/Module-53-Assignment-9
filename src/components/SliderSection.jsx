import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../assets/basic-japanese-pronunciation-2-91cbac0a.jpg';
import img2 from '../assets/basic-japanese-pronunciation-bcabbba3.jpg';
import img3 from '../assets/beginner-textbook-9ff49857.jpg';
import img4 from '../assets/japanese-grammar-544b963d.jpg';
import img5 from '../assets/japanese-teacher-285384dc.jpg';

const SliderSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative overflow-hidden rounded-t-3xl border-2 border-purple-500 hover:border-pink-500 transition-all duration-500 p-5">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper h-[300px] md:h-[400px] lg:h-[480px]"
        >
          <SwiperSlide>
            <div className="relative h-full flex items-center justify-center">
              <img
                src={img1}
                alt="Slide 1"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white rounded-lg space-y-5 bg-black/20">
                  <h2 className="text-2xl md:text-5xl font-bold ">
                    Welcome to Lingo Bingo
                  </h2>
                  <p className="text-md md:text-xl max-w-2xl mx-auto ">
                    Learn languages in a fun and interactive way. Join us today and start your journey!
                  </p>
          
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full flex items-center justify-center">
              <img
                src={img2}
                alt="Slide 2"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center ">
                <div className="text-center space-y-4 rounded-lg bg-black/20 p-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-white ">
                    Explore New Cultures
                  </h2>
                  <p className="text-lg md:text-xl text-white max-w-2xl mx-auto ">
                    Immerse yourself in the beauty of languages and cultures from around the world.
                  </p>
            
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full flex items-center justify-center">
              <img
                src={img3}
                alt="Slide 3"
                className="rounded-2xl absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                <div className="text-center space-y-4 rounded-lg bg-black/20 p-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-white ">
                    Join Our Community
                  </h2>
                  <p className="text-lg md:text-xl text-white max-w-2xl mx-auto ">
                    Connect with learners worldwide and achieve your language goals together.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full flex items-center justify-center">
              <img
                src={img4}
                alt="Slide 3"
                className="rounded-2xl absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                <div className="text-center space-y-4 rounded-lg bg-black/20 p-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-white ">
                    Join Our Community
                  </h2>
                  <p className="text-lg md:text-xl text-white max-w-2xl mx-auto ">
                    Connect with learners worldwide and achieve your language goals together.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full flex items-center justify-center">
              <img
                src={img5}
                alt="Slide 3"
                className="rounded-2xl absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                <div className="text-center space-y-4 rounded-lg bg-black/30 p-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-white ">
                   Start Learning Today
                  </h2>
                  <p className="text-lg md:text-xl text-white max-w-2xl mx-auto ">
                    Connect with learners worldwide and achieve your language goals together.
                    and start learning today
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent} className="text-white"></span>
          </div>
        </Swiper>
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-next hidden md:flex items-center justify-center w-12 h-12 bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div className="swiper-button-prev hidden md:flex items-center justify-center w-12 h-12 bg-opacity-20 hover:bg-opacity-30 transition-all duration-30">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;