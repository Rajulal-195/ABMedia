import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    designation: 'CEO, ExampleCorp',
    image: 'https://storage.googleapis.com/a1aa/image/b904e20d-5970-4545-7279-391e16e9f5b5.jpg',
    alt: 'Portrait of a man with beard and short hair',
    message: `Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document.`,
  },
  {
    name: 'Jane Smith',
    designation: 'Marketing Head, BrandWorks',
    image: 'https://storage.googleapis.com/a1aa/image/f2039075-be8f-42d5-e84b-b6e424619a31.jpg',
    alt: 'Portrait of a woman with medium length hair',
    message: `Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document.`,
  },
  {
    name: 'Ravi Kumar',
    designation: 'Product Manager, TechWave',
    image: 'https://storage.googleapis.com/a1aa/image/09952234-a6ee-4a63-4054-7a11e6a008f1.jpg',
    alt: 'Portrait of a man with short hair and smile',
    message: `Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document.`,
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
      <h1 className="text-center text-cyan-600 font-semibold m-10 text-lg sm:text-xl lg:text-2xl leading-tight">
        Testimonials
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out bg-white"
          >
            <div className="flex items-center space-x-3 mb-3">
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="rounded-full w-12 h-12 object-cover"
              />
              <div className="text-xs font-semibold">
                {testimonial.name}
                <br />
                <span className="font-normal">{testimonial.designation}</span>
              </div>
            </div>
            <p className="text-xs text-gray-700">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
