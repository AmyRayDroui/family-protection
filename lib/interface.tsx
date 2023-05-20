export type HomePageType = {
  data: {
    homepage: Homepage
    common: Common
  }
}

export type CommonType = {
  data: Common
}

export type Homepage = {
  title: string
  description: string
  gettoknowusbutton: string
  aboutheading: string
  abouttitle: string
  aboutustext: string
  aboutusbutton: string
  whatwedoheading: string
  whatwedotitle: string
  whatwedocards: Array<whatWeDoCards>
  contactusheading: string
  contactustitle: string
  contactustext: string
}

export type Common = {
  contactuslinks: Array<contactUsLinks>
  applinks: Array<appLinks>
  languagenames: Array<{
    he: string
    en: string
    ru: string
  }>
  contactusformfirstname: string
  contactusformlastname: string
  contactusformemail: string
  contactusformphone: string
  contactusformmessage: string
  contactusformsendbutton: string
  contactusformerrorfirstnamemissing: string
  contactusformerrorlastnamemissing: string
  contactusformerroremailmissing: string
  contactusformerroremailinvalid: string
  contactusformerrorphonemissing: string
  contactusformerrorphoneinvalid: string
  contactusformerrormessagemissing: string
  footermenutitle: string
  footercontactustitle: string
  footerschedulebutton: string
  footersupportusbutton: string
}

export type contactUsLinks = {
  text: string
  linktype: string
  imagepath: string
  linkvalue: string
}

export type appLinks = {
  text: string
  relativelink: string
}

export type whatWeDoCards = {
  title: string
  text: string
  imagepath: string
}

export type FormData = {
  firstname?: string
  lastname?: string
  email?: string
  phone?: string
  more?: string
}

export function HOMEPAGE_QUERY(locale: string) {
  return `
query Homepage {
  homepage(locale: ${locale}) {
    title
    description
    abouttitle
    whatwedocards {
      imagepath
      text
      title
    }
    gettoknowusbutton
    aboutusbutton
    aboutustext
    contactusheading
    contactustext
    contactustitle
    whatwedoheading
    whatwedotitle
  }
  ${COMMON_QUERY_STRING(locale)}
}`
}

export const COMMON_QUERY_STRING = (locale: string) => `
common(locale: ${locale}) {
  languagenames {
    en
    he
    ru
  }
  contactusformemail
  applinks {
    relativelink
    text
  }
  contactusformerroremailinvalid
  contactusformerroremailmissing
  contactusformerrorfirstnamemissing
  contactusformerrorlastnamemissing
  contactusformerrormessagemissing
  contactusformerrorphoneinvalid
  contactusformerrorphonemissing
  contactusformfirstname
  contactusformlastname
  contactusformmessage
  contactusformphone
  contactusformsendbutton
  contactusformsuccessmessage
  contactuslinks {
    imagepath
    linktype
    linkvalue
    text
  }
  footercontactustitle
  footermenutitle
  footerschedulebutton
  footersupportusbutton
}
`
