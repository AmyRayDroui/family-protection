import { contactUsLinks } from '@/lib/interface'
import React from 'react'
import ContactUs from '../home-components/contact-us'
import ContactInfo from './contact-info'

export default function FooterInfo({ data }: { data: Array<contactUsLinks> }) {
  const [newData, setNewData] = React.useState<Array<contactUsLinks>>([])
  React.useEffect(() => {
    let newDataArr: Array<contactUsLinks> = []
    data.forEach((item) => {
      const indexItem = newDataArr.findIndex((element) => {
        return element['linktype'] === item.linktype
      })
      if (indexItem > -1) {
        newDataArr[indexItem].text += ' ' + item.text
      } else {
        const newItem = {
          imagepath: item.imagepath.replace('-', '-green-'),
          linktype: item.linktype,
          linkvalue: item.linkvalue,
          text: item.text,
        }
        if (newItem['linktype'] === 'email') {
          newDataArr.splice(1, 0, newItem)
        } else {
          newDataArr.push(newItem)
        }
      }
      setNewData(newDataArr)
    })
  }, [])

  return (
    <>
      {newData.map((info, i) => {
        return <ContactInfo key={i} data={info} isFooter={true}></ContactInfo>
      })}
    </>
  )
}
