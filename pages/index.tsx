import AboutTheCompany from '@/components/home-components/about-the-company'
import Banner from '@/components/home-components/banner'
import ContactUs from '@/components/home-components/contact-us'
import WhatWeDo from '@/components/home-components/what-we-do'
import { HomePageType, HOMEPAGE_QUERY } from '@/lib/interface'
import { NextPageContext } from 'next'
import { request } from '../lib/datocms'

export async function getStaticProps({ locale }: NextPageContext) {
  const data = await request({
    query: HOMEPAGE_QUERY(locale as string),
  })
  return {
    props: { data },
  }
}

export default function Home({ data }: HomePageType) {
  return (
    <>
      <Banner data={data} />
      <AboutTheCompany data={data} />
      <WhatWeDo data={data} />
      <ContactUs data={data} />
    </>
  )
}
