import Head from "next/head";
import React from "react";
// Models
import { Breed } from "@models/breed";
// Services
import { getList } from "@services/httpRequest";
// Components
import { TopSection } from "@components/topSection";
import { BreedCard } from "@components/breedCard";

export const getStaticProps = async () => {
  const api_url = process.env.API_URL;
  const data = await getList(`${api_url}/breeds?limit=10`);
  return {
    props: {
      data,
    },
  };
};

type TTopProps = {
  data: Breed[];
};

const Top = ({ data }: TTopProps) => {
  return (
    <>
      <Head>
        <title>Top 10</title>
        <meta name="description" content="Top 10" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopSection>
        <h1>Top 10 most searched breeds</h1>
        {data.map((breed, index) => (
          <BreedCard key={index} breed={breed} index={index} />
        ))}
      </TopSection>
    </>
  );
};

export default Top;
