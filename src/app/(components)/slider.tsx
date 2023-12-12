import { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    { url: 'https://source.unsplash.com/1600x900/?nature,water', caption: 'Nature and Water' },
    { url: 'https://source.unsplash.com/1600x900/?city,night', caption: 'City at Night' },
    { url: 'https://source.unsplash.com/1600x900/?mountains,sunrise', caption: 'Mountains at Sunrise' },
    { url: 'https://source.unsplash.com/1600x900/?forest,path', caption: 'Forest Path' },
    { url: 'https://source.unsplash.com/1600x900/?beach,sunset', caption: 'Beach at Sunset' },
    { url: 'https://source.unsplash.com/1600x900/?landscape,fields', caption: 'Landscape Fields' }
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {sliderImages.map((slide, index) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-1000 ease-in-out w-full h-full ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4">
            <p className="text-white text-lg">{slide.caption}</p>
          </div>
        </div>
      ))}
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-75 p-4 rounded-full text-white">
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-75 p-4 rounded-full text-white">
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
