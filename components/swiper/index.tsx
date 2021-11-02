import React from "react";
import Image from "next/image";
// Providers
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectFade } from "swiper";
import "swiper/css/pagination";
// Models
import { BreedDetail } from "@models/breed";
// Styled components
import { PhotoContainer } from "@styles/breed/breed";
import { StyledSwiper } from "@styles/swiper/swiper";

type BreedProps = {
  breedDetail: BreedDetail[];
};

SwiperCore.use([Pagination, EffectFade]);

export const SwiperPhotos = ({ breedDetail }: BreedProps) => {
  return (
    <StyledSwiper
      effect={"fade"}
      pagination={{ clickable: true }}
      slidesPerView={1}
    >
      {breedDetail.slice(1, breedDetail.length).map((photo) => (
        <SwiperSlide key={photo.id}>
          <PhotoContainer>
            <Image
              src={photo.url}
              alt="photo"
              layout="fill"
              blurDataURL={photo.url}
              placeholder="blur"
              objectFit="cover"
            />
          </PhotoContainer>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};
