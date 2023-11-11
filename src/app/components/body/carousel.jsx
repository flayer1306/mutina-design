import React from 'react';
import HoverCarousel from "hover-carousel";
import photo1 from './жил1.jpg'
import photo2 from './жил2.jpg'
import photo3 from './жил3.jpg'
import photo4 from './жил4.jpg'
const MyImageCarousel = () => {
    const images = [
        photo1,
        photo2,
        photo3,
        photo4,
    ];

    return (
        <div>
            <HoverCarousel images={images} />
        </div>
    );
};

export default MyImageCarousel;