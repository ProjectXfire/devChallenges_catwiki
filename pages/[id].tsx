import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { GetStaticProps } from "next";
// Providers
import { useMediaQuery } from "react-responsive";
import "swiper/css";
// Models
import { BreedDetail } from "@models/breed";
// Services
import { getList, getOne } from "@services/httpRequest";
// Components
import { BreedSkill } from "@components/breedSkill";
import { SwiperPhotos } from "@components/swiper";
// Styled components
import {
  StyledBreed,
  StyledBreedDetail,
  StyledBreedPhotos,
  ImageContainer,
  DescriptionTitle,
  DescriptionContainer,
  PhotoContainer,
} from "@styles/breed/breed";

type PathType = {
  params: {
    id: string;
  };
};

type BreedProps = {
  breedDetail: BreedDetail[];
};

export const getStaticPaths = async () => {
  try {
    const api_url = process.env.API_URL;
    const data: BreedDetail[] = await getList(`${api_url}/breeds`);
    const paths: PathType[] = data.map((breed) => ({
      params: {
        id: breed.id,
      },
    }));
    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticProps: GetStaticProps<BreedProps> = async ({
  params,
}) => {
  try {
    const api_url = process.env.API_URL;
    const id = params && params.id ? params.id : "";
    const breedDetail = await getOne(
      `${api_url}/images/search?breed_id=${id}&limit=9`
    );
    return {
      props: {
        breedDetail,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const Breed = ({ breedDetail }: BreedProps) => {
  const [showSwiper, setShowSwiper] = useState(false);
  const isTablet = useMediaQuery({ query: "(min-width: 509px)" });

  useEffect(() => {
    setShowSwiper(isTablet);
  }, [isTablet]);

  return (
    <>
      <Head>
        <title>Breed detail</title>
        <meta name="description" content="breed detail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {breedDetail && (
        <StyledBreed>
          <StyledBreedDetail>
            <ImageContainer>
              <Image
                src={breedDetail[0].url}
                alt="breed"
                layout="fill"
                blurDataURL={breedDetail[0].url}
                placeholder="blur"
                objectFit="cover"
              ></Image>
            </ImageContainer>
            <DescriptionContainer>
              <h1>{breedDetail[0].breeds[0].name}</h1>
              <p>{breedDetail[0].breeds[0].description}</p>
              <p>
                <strong>Temperament:</strong>{" "}
                {breedDetail[0].breeds[0].temperament}
              </p>
              <p>
                <strong>Origin:</strong> {breedDetail[0].breeds[0].origin}
              </p>
              <p>
                <strong>Life Span:</strong> {breedDetail[0].breeds[0].life_span}
              </p>
              <BreedSkill
                title="Adaptability"
                value={breedDetail[0].breeds[0].adaptability}
              />
              <BreedSkill
                title="Affection level"
                value={breedDetail[0].breeds[0].affection_level}
              />
              <BreedSkill
                title="Child Friendly"
                value={breedDetail[0].breeds[0].child_friendly}
              />
              <BreedSkill
                title="Grooming"
                value={breedDetail[0].breeds[0].grooming}
              />
              <BreedSkill
                title="Intelligence"
                value={breedDetail[0].breeds[0].intelligence}
              />
              <BreedSkill
                title="Health issues"
                value={breedDetail[0].breeds[0].health_issues}
              />
              <BreedSkill
                title="Social needs"
                value={breedDetail[0].breeds[0].social_needs}
              />
              <BreedSkill
                title="Stranger friendly"
                value={breedDetail[0].breeds[0].stranger_friendly}
              />
            </DescriptionContainer>
          </StyledBreedDetail>
          <DescriptionTitle>Others photos</DescriptionTitle>
          <StyledBreedPhotos>
            {showSwiper ? (
              <>
                {breedDetail.slice(1, breedDetail.length).map((photo) => (
                  <PhotoContainer key={photo.id}>
                    <Image
                      src={photo.url}
                      alt="photo"
                      layout="fill"
                      blurDataURL={photo.url}
                      placeholder="blur"
                      objectFit="cover"
                    />
                  </PhotoContainer>
                ))}
              </>
            ) : (
              <SwiperPhotos breedDetail={breedDetail} />
            )}
          </StyledBreedPhotos>
        </StyledBreed>
      )}
    </>
  );
};

export default Breed;
