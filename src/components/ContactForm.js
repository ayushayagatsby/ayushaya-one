import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FormiumForm } from '@formium/react';
import { formium } from '../lib/formium';




export default function ContacForm() {
  return (
    <StaticQuery
      query={graphql`
        query FormQuery {
            formiumForm(slug: { eq: "contact-form" }) {
        id
        createAt
        name
        projectId
        schema
        slug
        updateAt
        version
      }
        }
      `}
      render={data => (
        <FormiumForm
        data={data.formiumForm}
        onSubmit={async (values) => {
          // Send form values to Formium
          await formium.submitForm('contact-form', values);
          alert('Success');
        }}
      />
      )}
    />
  )
}