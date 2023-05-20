import { CommonType } from '@/lib/interface'
import { WrapperLarge } from './wrapper'
import AppLinks from './data-components/app-link'
import { FooterButton } from './data-components/footer-button'
import FooterInfo from './data-components/footer-info'

export default function Footer({ data }: CommonType) {
  return (
    <WrapperLarge>
      <footer className="gap-x-32 gap-y-4 md:gap-x-16 grid grid-cols-4-auto sm:grid-cols-1 justify-items-center mx-auto sm:mb-24">
        <img
          className="object-contain max-w-[348px] xs:w-52 mt-16 sm:mt-12 -ml-6 sm:ml-0"
          src="family_protection.png"
          alt="Logo"
        />
        <div className="flex items-start my-24 sm:my-0">
          <div className="flex flex-col">
            <FooterButton text={data.footerschedulebutton} />
            <FooterButton text={data.footersupportusbutton} />
          </div>
        </div>
        <div className="sm:hidden my-24 sm:my-0">
          <h4 className="text-sm font-bold">{data.footermenutitle}</h4>
          <ul>
            {data.applinks.slice(1).map((link) => {
              return (
                <AppLinks
                  key={link.text}
                  data={link}
                  className="text-sm-paragraph min-md:my-0 my-7"
                />
              )
            })}
          </ul>
        </div>
        <div className="grid gap-y-2 my-24 sm:mt-5 sm:mb-0">
          <h4 className="text-sm font-bold">{data.footercontactustitle}</h4>
          {<FooterInfo data={data.contactuslinks}></FooterInfo>}
        </div>
      </footer>
    </WrapperLarge>
  )
}
