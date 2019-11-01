import React from 'react'
import ContactFooter from './contact-footer'
import LinkFooter from './link-footer'

const Footer = ({ contact, link, copyright }) => (
  <>
    <ContactFooter items={contact} />
    <LinkFooter items={link} copyright={copyright} />
  </>
)

export default Footer
