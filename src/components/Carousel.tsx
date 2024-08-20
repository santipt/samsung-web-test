import React, { useState } from 'react';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div id='default-carousel' className='relative w-full' data-carousel='slide'>
            <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${index === activeIndex ? '' : 'hidden'
                            } duration-700 ease-in-out`}
                        data-carousel-item
                    >
                        <img
                            src={image}
                            className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            alt={`Slide ${index + 1}`}
                            loading='lazy'
                        />
                    </div>
                ))}
            </div>
            <button
                type='button'
                className='rounded-full absolute top-1/2 left-2 z-30 flex items-center justify-center h-12 w-12 px-4 cursor-pointer transform -translate-y-1/2 hover:bg-gray-100'
                onClick={handlePrev}
                data-carousel-prev
            >
                <div className='flex items-center justify-center w-20 h-20'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
                        <polyline points='15 18 9 12 15 6'></polyline>
                    </svg>
                </div>
            </button>
            <button
                type='button'
                className='rounded-full absolute top-1/2 right-2 z-30 flex items-center justify-center h-12 w-12 px-4 cursor-pointer transform -translate-y-1/2 hover:bg-gray-100'
                onClick={handleNext}
                data-carousel-next
            >
                <div className='flex items-center justify-center w-20 h-20'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
                        <polyline points='9 18 15 12 9 6'></polyline>
                    </svg>
                </div>
            </button>
            <div className='absolute z-30 flex -translate-x-1/2 bottom-0 left-1/2 space-x-3 rtl:space-x-reverse'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        type='button'
                        className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-black' : 'bg-gray-300'
                            }`}
                        aria-current={index === activeIndex ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setActiveIndex(index)}
                        data-carousel-slide-to={index}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
