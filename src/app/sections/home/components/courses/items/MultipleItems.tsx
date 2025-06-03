import React from "react";
import Slider, { Settings } from "react-slick";
import Image from 'next/image'
import styles from "../styles/MultipleItems.module.css";

interface ImageItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const MultipleItems: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images: ImageItem[] = [
    {
      src: "/images/agilecoaching.png",
      alt: "Agile Coach",
      title: "Agile Coach Fundamentals",
      description: "Lidera equipos hacia el éxito",
    },
    {
      src: "/images/scrumMaster.svg",
      alt: "Scrum Master",
      title: "Scrum Master Certified",
      description: "Profesional en marco Scrum",
    },
    {
      src: "/images/ux.svg",
      alt: "Design UX",
      title: "Design UX",
      description: "Diseño centrado en el usuario",
    },
    {
      src: "/images/ui.svg",
      alt: "Design UI",
      title: "Design UI",
      description: "Desarrollo de interfaces de usuario",
    },
    {
      src: "/images/developer.svg",
      alt: "Full Stack Developer",
      title: "Full Stack Developer",
      description: "Carrera profesional en desarrollo web",
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.sliderItem}>
            
            <Image 
              src={image.src} 
              alt={image.alt} 
              className={styles.sliderImage} 
              width={500} 
              height={300} 
              priority 
            />
            
            <div className={styles.sliderOverlay}>
              <h3 className={styles.sliderTitle}>{image.title}</h3>
              <p className={styles.sliderDescription}>{image.description}</p>
            </div>
          </div>
        ))}
        
      </Slider>
    </div>
  );
};

export default MultipleItems;