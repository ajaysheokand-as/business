import React from 'react';
import Boardofdriction from './Boardofdriction';

function Images() {
    const images = [
        { src: 'img1.jpg', text: 'Project 1', alt: 'This is the description of Project 1' },
        { src: 'img2.png', text: 'Project 2', alt: 'This is the description of Project 2' },
        { src: 'img3.png', text: 'Project 3', alt: 'This is the description of Project 3' },
        { src: 'img4.png', text: 'Project 4', alt: 'This is the description of Project 4' },
        { src: 'img5.webp', text: 'Project 5', alt: 'This is the description of Project 5' },
        { src: 'img6.webp', text: 'Project 6', alt: 'This is the description of Project 6' },
        { src: 'img7.png', text: 'Project 7', alt: 'This is the description of Project 7' },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            {images.map((image, index) => (
                <Boardofdriction
                    key={index}
                    imgSrc={image.src}
                    imgText={image.text}
                    altText={image.alt}
                />
            ))}
        </div>
    );
}

export default Images;

