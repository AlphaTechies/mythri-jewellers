import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Riya Verma",
    comment:
      "I absolutely love the necklace I purchased from this store. The craftsmanship is exquisite, and it complements my Indian attire beautifully. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Amit Patel",
    comment:
      "I recently bought a pair of earrings for my wife, and she couldn't be happier. The intricate design and attention to detail are remarkable. The customer service was also top-notch. Thank you!",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Sneha Gupta",
    comment:
      "I'm amazed by the quality of the bangles I received. They are stunning and of great value. The delivery was prompt, and the packaging was impressive. Will definitely shop here again.",
    rating: 4,
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  const handleTestimonialChange = (testimonial) => {
    setActiveTestimonial(testimonial);
  };

  return (
    <div className="mx-3 md:mx-10 px-5 py-14">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Testimonials</h2>
        <p className="text-lg text-primary">
          Read what our Indian customers are saying about us.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`p-4 border rounded-lg cursor-pointer ${
              activeTestimonial.id === testimonial.id ? "border-primary" : ""
            }`}
            onClick={() => handleTestimonialChange(testimonial)}
          >
            <p className="text-lg text-primary font-semibold">
              {testimonial.name}
            </p>
            <div className="flex items-center mt-2">
              <p className="text-yellow-500">
                {"★".repeat(testimonial.rating)}
              </p>
              <p className="text-primary ml-2">{testimonial.rating}</p>
            </div>
            <p className="text-primary mt-2">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
