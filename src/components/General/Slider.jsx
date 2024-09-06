// import React, { useState, useRef, useEffect } from "react";

// const Slider = ({
//   slides,
//   height = "400px",
//   width = "100%",
//   dotColor = "#333",
//   activeDotColor = "#007bff",
//   numDots,
// }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sliderRef = useRef(null);

//   const totalDots = numDots || slides.length;
//   const slidesPerDot = Math.ceil(slides.length / totalDots);

//   const handleScroll = () => {
//     if (sliderRef.current) {
//       const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
//       const slideWidth = scrollWidth / slides.length;
//       const newSlide = Math.round(scrollLeft / slideWidth);
//       setCurrentSlide(newSlide);
//     }
//   };

//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (slider) {
//       slider.addEventListener("scroll", handleScroll);
//       return () => slider.removeEventListener("scroll", handleScroll);
//     }
//   }, []);

//   return (
//     <div className="relative" style={{ width }}>
//       <div
//         ref={sliderRef}
//         className="overflow-x-scroll whitespace-nowrap scrollbar-hide"
//         style={{
//           height,
//           scrollSnapType: "x mandatory",
//           msOverflowStyle: "none",
//           scrollbarWidth: "none",
//         }}
//       >
//         {/* {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="inline-block w-full h-full bg-[#1e698e] text-white text-center "
//             style={{ scrollSnapAlign: "start" }}
//           >
//             {slide}
//           </div> */}
//           {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-full h-full snap-start"
//           >
//             {slide}
//           </div>
//         ))}

//       </div>
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className="w-3 h-3 rounded-full transition-colors duration-200"
//             style={{
//               backgroundColor:
//                 index === currentSlide ? activeDotColor : dotColor,
//             }}
//             onClick={() => {
//               sliderRef.current.scrollTo({
//                 left: index * sliderRef.current.clientWidth,
//                 behavior: "smooth",
//               });
//             }}
//           />
//         ))}
//       </div>
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Slider;

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider = ({
  slides,
  height = "400px",
  width = "100%",
  dotColor = "#333",
  activeDotColor = "#007bff",
  numDots,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const totalDots = numDots || slides.length;
  const slidesPerDot = Math.ceil(slides.length / totalDots);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const newSlide = Math.round(scrollLeft / clientWidth);
      setCurrentSlide(newSlide);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
      return () => slider.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollTo = (index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    scrollTo((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    scrollTo((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative" style={{ width, height }}>
      <div
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{
          height: "100%",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full snap-start"
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full transition-colors duration-200"
            style={{
              backgroundColor:
                Math.floor(currentSlide / slidesPerDot) === index ? activeDotColor : dotColor,
            }}
            onClick={() => scrollTo(index * slidesPerDot)}
          />
        ))}
      </div>
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style> */}
    </div>
  );
};

export default Slider;