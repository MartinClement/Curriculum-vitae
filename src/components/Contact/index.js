import React from 'react'

import 'styles/Contact/contact.scss'

const EMAIL = 'martinclementjules@gmail.com'
const PHONE = {
  world: '+33669255071',
  fr: '06 69 25 50 71',
}
const LINKEDIN = {
  url: 'https://www.linkedin.com/in/cl%C3%A9ment-martin-46024b138/',
  id: 'clément-martin-46024b138',
}

const Contact = () => (
  <div className="contact-wrapper">
    <a
      className="github"
      href="https://github.com/MartinClement"
      target="_blank"
      title="github Clément Martin"
    >
      <img src={require('assets/images/logos/github.png')} />
    </a>
    <span>
      <span className="purple">const&nbsp;</span>
      <span className="white">contact&nbsp;</span>
      <span className="purple">=&nbsp;</span>
      <span className="white">{'{ '}</span>
    </span>
    <span className="mobile-block">
      <span className="green">
        <a href={`mailto:${EMAIL}`} title="Adresse e-mail">
          email
        </a>
      </span>
      <span className="blue">:&nbsp;'</span>
      <span className="white">
        <a href={`mailto:${EMAIL}`} title="Adresse e-mail">
          {EMAIL}
        </a>
      </span>
      <span className="blue">'</span>
      <span className="white">,&nbsp;</span>
    </span>
    <span className="mobile-block">
      <span className="green">
        <a href={`tel:${EMAIL}`} title="Téléphone">{`tel`}</a>
      </span>
      <span className="blue">:&nbsp;'</span>
      <span className="white">
        <a href={`tel:${PHONE.world}`} title="Téléphone">
          {PHONE.fr}
        </a>
      </span>
      <span className="blue">'</span>
      <span className="white">,&nbsp;</span>
    </span>
    <span className="mobile-block">
      <span className="green">
        <a href={LINKEDIN.url} title="Linkedin Clément Martin" target="_blank">
          linkedin
        </a>
      </span>
      <span className="blue">{`: '`}</span>
      <span className="white">
        <a href={LINKEDIN.url} title="Linkedin Clément Martin" target="_blank">
          {LINKEDIN.id}
        </a>
      </span>
      <span className="blue">'&nbsp;</span>
    </span>
    <span className="white">{`}`}</span>
  </div>
)

export default Contact
