import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import ContactInfo from '../data-components/contact-info'
import ContactForm from '../data-components/contact-form'

export default function ContactUs({ data }: HomePageType) {
  return (
    <WrapperLarge
      id="contact-us"
      className="relative grid-cols-auto-1fr md:grid-cols-2 sm:grid-cols-1 gap-x-36 md:gap-x-20 pb-28 sm:pb-9 mt-32 sm:mt-14 overflow-hidden"
    >
      <div className="absolute w-full h-5/6 sm:h-1/2 bottom-0 bg-contact-bg z-0" />
      <img
        src="polygon.svg"
        alt="deco"
        className="max-h-[300px] absolute -left-28 bottom-0 opacity-20 rotate-[19deg] sm:hidden"
      />
      <img
        src="polygon.svg"
        alt="deco"
        className="max-h-[400px] absolute -right-56 top-1/4 opacity-20 rotate-[39deg] sm:hidden"
      />
      <div className="flex flex-col items-start mt-72 sm:mt-0 w-4/6 justify-self-end sm:justify-self-start  relative z-1">
        <h3 className="bg-light rounded-[50px] text-accent-green text-sm font-bold px-6 sm:px-0 py-1 mb-4">
          {data.homepage.contactusheading}
        </h3>
        <h2 className="text-lg sm:text-md font-bold">
          {data.homepage.contactustitle}
        </h2>
        <p className="text-sm sm:text-paragraph">
          {data.homepage.contactustext}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-9 gap-y-2 mt-10">
          {data.common.contactuslinks.map((item, i) => {
            return <ContactInfo key={i} data={item} />
          })}
        </div>
      </div>
      <ContactForm data={data.common}></ContactForm>
    </WrapperLarge>
  )
}
