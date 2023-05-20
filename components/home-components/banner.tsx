import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'
import { FullButton } from '../data-components/full-button'

export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header">
      <div className="wrapper flex justify-center">
        <div className="flex flex-col items-center justify-center  w-[700px] xs:w-11/12">
          <PageHeader className="xs:-mt-24">{data.homepage.title}</PageHeader>
          <p className="w-3/4 text-center text-md xs:text-sm">
            {data.homepage.description}
          </p>
          <FullButton
            className="mt-10 text-md font-bold"
            text={data.homepage.gettoknowusbutton}
          ></FullButton>
        </div>
        <div className="background" />
        <img
          src="banner/family_field.jpg"
          alt="kids"
          className="banner-img top-0 left-[165px] md:left-[15px] sm:hidden border-2 border-light rounded-lg"
        />
        <img
          src="banner/hands_holding.jpg"
          alt="babies"
          className="banner-img top-[300px] -left-2 sm:hidden border-2 border-light rounded-lg"
        />
        <img
          src="banner/hands.jpg"
          alt="holding hands"
          className="banner-img top-0 left-[637px] md:left-[500px] sm:hidden border-2 border-light rounded-lg"
        />
        <img
          src="banner/pregnant_woman.jpg"
          alt="mother with a child"
          className="banner-img top-[540px] left-[322px] md:left-[200px] z-[0] sm:hidden border-2 border-light rounded-lg"
        />
        <img
          src="banner/father.jpg"
          alt="father with a baby"
          className="banner-img top-[60px] right-[150px] md:right-[20px] z-[0] sm:hidden border-2 border-light rounded-lg"
        />
        <img
          src="banner/granny.jpg"
          alt="family photo"
          className="banner-img top-[259px] -right-2 sm:hidden border-2 border-light rounded-lg"
        />
        <img
          src="banner/two_women_2.jpg"
          alt="grandma with family"
          className="banner-img top-[540px] right-[343px] md:right-[200px] sm:hidden border-2 border-light rounded-lg"
        />

        <style>{`
          div.wrapper {
            margin-top: -95px;
            padding-top: 95px;
            position: relative;
            overflow: hidden;
            height: 780px;
          }
          div.background {
            position: absolute;
            z-index: -1;
            inset: 0;
            background: linear-gradient(
              109.17deg,
              #f4f3fd 38.49%,
              #bbeab2 72.36%
            );
          }
          .banner-img {
            position: absolute;
            width: 15%;
            min-width: 200px;
          }
        `}</style>
      </div>
    </div>
  )
}
