import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'
import { FullButton } from '../data-components/full-button'
import { getBannerClassName } from '@/lib/utils'

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
        {data.homepage.bannerimages.map((image, index) => (
          <img
            src={image?.url}
            alt={image?.alt}
            className={`banner-img sm:hidden rounded-lg ${getBannerClassName(
              image?.alt,
            )}`}
            key={index}
          />
        ))}

        <style jsx>{`
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
            border: white solid 2px;
          }
          .handsHolding {
            top: 300px;
            left: -8px;
            z-index: 1;
          }
          .hands {
            top: 0;
            left: 637px;
          }
          .granny {
            top: 259px;
            right: -8px;
            z-index: 1;
          }
          .father {
            top: 60px;
            right: 150px;
            z-index: 0;
          }
          .familyField {
            top: 0;
            left: 165px;
            z-index: 0;
          }
          .twoWomen {
            top: 540px;
            right: 343px;
          }
          .pregnantWoman {
            top: 540px;
            left: 322px;
            z-index: 0;
          }
          @media (max-width: 1500px) {
            .hands {
              left: 500px;
            }
            .father {
              right: 15px;
            }
            .familyField {
              left: 15px;
            }
            .twoWomen {
              right: 200px;
            }
            .pregnantWoman {
              left: 200px;
            }
          }
        `}</style>
      </div>
    </div>
  )
}
