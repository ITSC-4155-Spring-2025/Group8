import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Testimonial(){
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: dots => (
            <div>
              <ul className="flex justify-center gap-2">{dots}</ul> 
            </div>
          ),
        
      };

    const testimonialsData = [
        {
        name: "John D.",
        title: "Recent College Grad",
        feedback: "FinFit made budgeting so much easier. The lessons are engaging and I’ve completely changed my spending habits!"
        },
        {
        name: "Aisha K.",
        title: "College Student",
        feedback: "I never realized how little I knew about personal finance until I tried FinFit. Now I feel prepared to handle my student loans."
        },
        {
        name: "Michael B.",
        title: "College Student",
        feedback: "Loved the interactive approach to teaching money management. The small quizzes really helped things stick."
        },
        {
        name: "Emily R.",
        title: "Recent High School Grad",
        feedback: "I’ve tried multiple finance apps, but FinFit’s bite-sized lessons are by far the most effective for me."
        },
        {
        name: "Carlos H.",
        title: "High School Student",
        feedback: "A great blend of fun and information. I learned a lot about investing basics, and now I’m actually excited to save."
        },
        {
        name: "Priya S.",
        title: "College Student",
        feedback: "As someone running my own business, FinFit’s modules on taxes and budgeting were a lifesaver. Highly recommended!"
        }
    ];

    return(
        <div className="flex flex-col justify-center py-10 mx-auto mb-10">
            <div className="flex flex-col justify-center text-center">
                <h2 className="font-sora font-bold text-2xl py-3 text-green-600">Testimonials</h2>
                <h1 className="font-sora text-4xl font-bold">What Our Users Say</h1>
            </div>
            <div className="slider-container max-w-[1400px] mx-auto px-4 mt-8">
                <Slider {...settings}>
                {testimonialsData.map((testimonial, index) => (
                <div key={index} className="bg-green-400 text-white px-8 py-10 rounded-lg shadow-md mx-2 h-60 max-w-80">
                    <h2 className="font-bold font-sora">{testimonial.name}</h2>
                    <p className="italic text-sm">{testimonial.title}</p>
                    <p className="mt-3">{testimonial.feedback}</p>
                </div>
                ))}
                </Slider>
            </div>

        </div>
    );
}

export default Testimonial;