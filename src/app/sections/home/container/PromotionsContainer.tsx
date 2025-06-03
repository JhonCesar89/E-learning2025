import React from "react"
import BannerCarousel from "../components/promotions/banners/BannerCarousel"
import { promotions } from "../components/promotions/types/promotionsData"


const PromotionsContainer: React.FC = () => {
  return (
    
      <section>
        <BannerCarousel banners={promotions} />
      </section>
    
  );
};

export default PromotionsContainer;