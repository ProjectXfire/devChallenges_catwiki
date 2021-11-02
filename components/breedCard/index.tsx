import React from "react";
import Image from "next/image";
// Models
import { Breed } from "@models/breed";
// Styled components
import {
  StyledBreedCard,
  StyledImageCard,
  StyledContentCard,
} from "@styles/breedCard/breedCard";

type TBreedCardProps = {
  breed: Breed;
  index: number;
};

export const BreedCard = ({ breed, index }: TBreedCardProps) => {
  return (
    <StyledBreedCard>
      <StyledImageCard>
        <Image
          src={breed.image.url}
          layout="fill"
          alt="breed"
          objectFit="cover"
          blurDataURL={breed.image.url}
          placeholder="blur"
        />
      </StyledImageCard>
      <StyledContentCard>
        <h2>
          {index + 1}. {breed.name}
        </h2>
        <p>{breed.description}</p>
      </StyledContentCard>
    </StyledBreedCard>
  );
};
