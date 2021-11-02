import React from "react";
// Providers
import { Rating } from "semantic-ui-react";
// Styled components
import { StyledBreedSkill } from "@styles/breedSkill/breedSkill";

type BreedSkillProps = {
  title?: string;
  value?: number;
};

export const BreedSkill = ({ title, value }: BreedSkillProps) => {
  return (
    <StyledBreedSkill>
      <p>
        <strong>{title}:</strong>
      </p>
      <Rating
        icon="heart"
        defaultRating={value}
        maxRating={5}
        size="huge"
        disabled
      />
    </StyledBreedSkill>
  );
};
