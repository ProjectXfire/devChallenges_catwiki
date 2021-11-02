import React, { SyntheticEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// Provider
import { MdSearch } from "react-icons/md";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { Dropdown, DropdownProps, Form } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
// Models
import { Breed } from "@models/breed";
// Images
import HeroIMG from "@public/HeroImagesm.png";
// Components
import { FloatDropdown } from "@components/floatDropdown";
// Styled components
import { colors } from "@styles/variables/colors";
import { Button } from "@styles/shared/button";
import {
  StyledHero,
  StyledImage,
  StyledImageContent,
  StyledContent,
  StyledContentHeader,
  StyledContentBody,
  StyledImageNext,
} from "@styles/hero/hero";
import { BlackScreen } from "@styles/shared/blackScreen";

type HeroProps = {
  data: Breed[];
  allData: Breed[];
};

type Dropdown = {
  key: string;
  value: string;
  text: string;
};

export const Hero = ({ data, allData }: HeroProps) => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [fillDropdown, setFillDropdown] = useState<Dropdown[]>([]);
  const changeButton = useMediaQuery({ query: "(max-width: 767px)" });
  const router = useRouter();

  function showDropdown() {
    setActiveSidebar(true);
  }
  function hideDropdown() {
    setActiveSidebar(false);
  }
  function HandleChangeDropdown(value: any) {
    router.push(`/${value}`);
  }

  useEffect(() => {
    const dropdownData: Dropdown[] = [];
    allData.forEach((data) => {
      dropdownData.push({
        key: data.id,
        value: data.id,
        text: data.name,
      });
    });
    setFillDropdown(dropdownData);
  }, [allData]);

  return (
    <>
      <StyledHero>
        <StyledImage>
          <Image
            src={HeroIMG}
            layout="responsive"
            priority
            alt="hero-img"
          ></Image>
          <StyledImageContent>
            <h1>CatWiki</h1>
            <p>Get to know more about your cat breed</p>
            {changeButton ? (
              <Button
                aria-label="open-modal"
                type="button"
                size="sm"
                width="120px"
                color={colors.black}
                bkgColor={colors.white}
                onClick={showDropdown}
              >
                Search <MdSearch size="20" />
              </Button>
            ) : (
              <Dropdown
                placeholder="Select breed"
                fluid
                search
                selection
                options={fillDropdown}
                onChange={(e, { value }) => HandleChangeDropdown(value)}
              />
            )}
          </StyledImageContent>
        </StyledImage>
        <StyledContent>
          <StyledContentHeader>
            <p>Most Searched Breeds</p>
            <div>
              <p>
                <strong>66+ Breeds For you to discovers</strong>
              </p>
              <Link href="/top">
                <a>
                  Top 10 <HiOutlineArrowNarrowRight />
                </a>
              </Link>
            </div>
          </StyledContentHeader>
          <StyledContentBody>
            {data.map((breed) => (
              <article key={breed.id}>
                <StyledImageNext
                  src={breed.image.url}
                  layout="fill"
                  alt={breed.name}
                  blurDataURL={breed.image.url}
                  placeholder="blur"
                />
                <p>
                  <strong>{breed.name}</strong>
                </p>
              </article>
            ))}
          </StyledContentBody>
        </StyledContent>
      </StyledHero>
      <FloatDropdown active={activeSidebar}>
        <p>Search by breed</p>
        {fillDropdown.length > 0 && (
          <Dropdown
            placeholder="Select breed"
            fluid
            search
            selection
            options={fillDropdown}
            onChange={(e, { value }) => HandleChangeDropdown(value)}
          />
        )}
        <button aria-label="close-modal" type="button" onClick={hideDropdown}>
          <ImCross />
        </button>
      </FloatDropdown>
      {activeSidebar && <BlackScreen onClick={hideDropdown} />}
    </>
  );
};
