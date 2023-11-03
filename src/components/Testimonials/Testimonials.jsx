import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
export const Testimonials = () => {
  const [testimonials] = useState([
    {
      author: "John Smith",
      content:
        "The AirPods Max are the best headphones I've ever used. The noise cancellation is incredible, and the sound quality is amazing. I can wear them for hours on end without any discomfort.",
    },
    {
      author: "Jane Doe",
      content:
        "I was skeptical of the AirPods Max at first, but I'm so glad I bought them. They're the perfect headphones for traveling. They block out all the noise on the plane, and the sound quality is top-notch.",
    },
    {
      author: "Paul McCartney",
      content:
        "I'm a musician, and I use the AirPods Max for everything from recording to mixing to mastering. They're incredibly accurate, and they allow me to hear all the details in my music.",
    },
    {
      author: "Steve Jobs",
      content:
        "I'm an audiophile, and I've been through a lot of headphones over the years. The AirPods Max are the best I've ever heard. They're incredibly detailed, and the soundstage is amazing.",
    },
    {
      author: "Bill Gates",
      content:
        "I'm a gamer, and I use the AirPods Max for everything from playing games to watching movies to listening to music. They're incredibly immersive, and the sound quality is top-notch.",
    },
    {
      author: "Warren Buffett",
      content:
        "I'm a business traveler, and I use the AirPods Max for everything from watching movies on the plane to listening to music in the office. They're incredibly comfortable, and the noise cancellation is amazing.",
    },
    {
      author: "Mark Zuckerberg",
      content:
        "I'm a student, and I use the AirPods Max for everything from listening to music to watching lectures to studying. They're incredibly helpful for focusing, and the sound quality is amazing.",
    },
    {
      author: "Elon Musk",
      content:
        "I'm a parent, and I use the AirPods Max for everything from blocking out my kids' noise to listening to music while I clean. They're incredibly versatile, and the sound quality is amazing.",
    },
    {
      author: "Jeff Bezos",
      content:
        "I'm a retiree, and I use the AirPods Max for everything from listening to music to watching movies to reading audiobooks. They're incredibly enjoyable, and the sound quality is amazing.",
    },
    {
      author: "Sundar Pichai",
      content:
        "I'm a pet owner, and I use the AirPods Max to block out my dog's barking. They're incredibly effective, and the sound quality is amazing.",
    },
  ]);

  return (
    <div className=" bg-gradient-to-t max-w-full from-purple-200 to-transparent flex items-center flex-col justify-start mt-20 gap-4">
      <h1 className="text-3xl">Our Customers Feedback</h1>
      <div className="w-full">
        <Swiper
          spaceBetween={8}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          style={{
            padding: 24,
          }}
        >
          {testimonials.map((testi, i) => {
            return (
              <SwiperSlide
                key={i}
                className="bg-white drop-shadow-lg px-10 py-2 h-[200px] flex flex-col items-center justify-center rounded-lg"
              >
                <div>{testi.content}</div>
                <div className="self-start mt-4 text-gray-600">
                  - {testi.author}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
