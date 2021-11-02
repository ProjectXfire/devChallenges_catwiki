import React from "react";
import Link from "next/link";
import Image from "next/image";
// Providers
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// Images
import img1 from "@public/image1.png";
import img2 from "@public/image2.png";
import img3 from "@public/image3.png";
// Styled components
import {
  StyledRecommendation,
  StyledTextRecommendation,
  StyledPhotosRecommendation,
  Image1,
  Image2,
  Image3,
} from "@styles/content/recommendation";

export const Recommendation = () => {
  return (
    <StyledRecommendation>
      <StyledTextRecommendation>
        <h1>Why should you have a cat?</h1>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower yor stress and anxiety leves.
        </p>
        <Link href="/benefits">
          <a>
            Benefits <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </StyledTextRecommendation>
      <StyledPhotosRecommendation>
        <Image1>
          <Image src={img2} alt="cat-image" />
        </Image1>
        <Image2>
          <Image src={img1} alt="cat-image" />
        </Image2>
        <Image3>
          <Image src={img3} alt="cat-image" />
        </Image3>
      </StyledPhotosRecommendation>
    </StyledRecommendation>
  );
};
