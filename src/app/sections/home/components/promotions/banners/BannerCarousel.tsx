// Pure carousel logic
'use client';

import React from "react"
import Slider from "react-slick"
import Image from 'next/image'
import styles from "../styles/PromotionsContainer.module.css"
import { Banner } from "../types/promotionsData"

interface BannerCarouselProps {
  banners: Banner[];
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ banners }) => {
    // Configuración del slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true, // fade solo si quieres efecto de fundido
        arrows: false,
        cssEase: "ease-in-out"
    };

  return (
    <div className={styles["promotional-slider"]}>
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className={styles["banner-item"]}>
            <Image
              src={banner.src}
              alt={banner.alt}
              className={styles["banner-image"]}
              fill // Cambia a "fill" para que ocupe todo el contenedor
              priority // Carga prioritaria para mejorar el rendimiento
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;