import React from "react";
import Image from "next/image";
// Images
import BenefitsIMG from "@public/benefits.jpg";
// Components
import { BenefitsSection } from "@components/benefitsSection";

const Benefits = () => {
  return (
    <>
      <BenefitsSection>
        <h1>Benefits</h1>
        <Image src={BenefitsIMG} layout="responsive" alt="benefits" />
        <p>
          The research show that people with animals usually are more healthy
          and happy of they do not have, also we know the wonderful that is come
          back to home of a busy day and hear the satisfaction purr of a lovely
          cat. Is for that, we do not have any doubts that the cats are good
          pets.
        </p>
        <ul>
          <li>
            <span>😸</span>
            <p>
              Has been checked that have a cat reduce the stress and are big
              companion for those who feel sad or depressed.
            </p>
          </li>
          <li>
            <span>😸</span>
            <p>
              Normally, the cat owners have the blood pressure lower than others
              without cats.
            </p>
          </li>
          <li>
            <span>😸</span>
            <p>
              Your immune system will be stronger and it will allow you to
              recover faster of sickness.
            </p>
          </li>
          <li>
            <span>😸</span>
            <p>
              For general, the kids that are growing with cats get sick less.
            </p>
          </li>
          <li>
            <span>😸</span>{" "}
            <p>They have less cares compare from others pets.</p>{" "}
          </li>
          <li>
            <span>😸</span>
            <p>
              They help you to recover faster from an emotional trauma like the
              pass away of a loved.
            </p>
          </li>
        </ul>
      </BenefitsSection>
    </>
  );
};

export default Benefits;
