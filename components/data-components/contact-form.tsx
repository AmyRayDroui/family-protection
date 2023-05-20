import { Common, FormData } from '@/lib/interface'
import React from 'react'
import { Formik, Form } from 'formik'
import FormInput from './form-input'
import { FullButton } from './full-button'

export default function ContactForm({ data }: { data: Common }) {
  const validateData = (values: FormData) => {
    const errors = {} as FormData
    if (!values.firstname) {
      errors.firstname = data.contactusformerrorfirstnamemissing
    }
    if (!values.email) {
      errors.email = data.contactusformerroremailmissing
    } else if (!/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = data.contactusformerroremailinvalid
    }
    if (!values.lastname) {
      errors.lastname = data.contactusformerrorlastnamemissing
    }
    if (!values.phone) {
      errors.phone = data.contactusformerrorphonemissing
    }
    if (!values.more) {
      errors.more = data.contactusformerrormessagemissing
    }
    if (
      values.phone &&
      !/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(values.phone)
    ) {
      errors.phone = data.contactusformerrorphoneinvalid
    }

    return errors
  }
  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        more: '',
      }}
      validate={validateData}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        alert('Your submission has been successful')
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ errors, touched }) => (
        <Form className="bg-light rounded-[36px] appearance-none shadow-4xl md:w-10/12 lg:w-2/3 gap-x-4 px-8 lg:grid sm:py-4 sm:mt-16 xs:grid-cols-1 grid-cols-2 lg:px-12 md:py-14 lg:pb-24 lg:pt-12 sm:pb-10 relative z-10">
          <FormInput
            label={data.contactusformfirstname}
            name="firstname"
            type="text"
            error={errors.firstname}
            touched={touched.firstname}
          />
          <FormInput
            label={data.contactusformlastname}
            name="lastname"
            type="text"
            error={errors.lastname}
            touched={touched.lastname}
          />
          <FormInput
            label={data.contactusformemail}
            name="email"
            type="email"
            error={errors.email}
            touched={touched.email}
          />
          <FormInput
            label={data.contactusformphone}
            name="phone"
            type="phone"
            error={errors.phone}
            touched={touched.phone}
          />
          <FormInput
            label={data.contactusformmessage}
            name="more"
            type="text"
            error={errors.more}
            touched={touched.more}
            className="col-span-2"
          />
          <FullButton
            text={data.contactusformsendbutton}
            className="text-md font-bold mt-4"
            type="submit"
          />
        </Form>
      )}
    </Formik>
  )
}
