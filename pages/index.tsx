import Head from "next/head";
// Services
import { getList } from "@services/httpRequest";
// Models
import { Breed } from "@models/breed";
// Components
import { Hero } from "@components/hero";
import { Content } from "@components/content";
import { Recommendation } from "@components/recommendation";
import { Footer } from "@components/footer";

export const getStaticProps = async () => {
  const api_url = process.env.API_URL;
  const data = await getList(`${api_url}/breeds?limit=4`);
  const allData = await getList(`${api_url}/breeds`);
  return {
    props: {
      data,
      allData,
    },
  };
};

type HomeProps = {
  data: Breed[];
  allData: Breed[];
};

const Home = ({ data, allData }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Breeds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero data={data} allData={allData} />
      <Content>
        <Recommendation />
      </Content>
    </>
  );
};

export default Home;
