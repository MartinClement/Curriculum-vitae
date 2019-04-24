import React from 'react'

import 'styles/Contact/contact.scss'

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
      <span className="green">email</span>
      <span className="blue">:&nbsp;'</span>
      <span className="white">martinclementjules@gmail.com</span>
      <span className="blue">'</span>
      <span className="white">,&nbsp;</span>
    </span>
    <span className="mobile-block">
      <span className="green">{`tel`}</span>
      <span className="blue">:&nbsp;'</span>
      <span className="white">06 69 25 50 71</span>
      <span className="blue">'</span>
      <span className="white">,&nbsp;</span>
    </span>
    <span className="mobile-block">
      <span className="green">linkedin</span>
      <span className="blue">{`: '`}</span>
      <span className="white">clément-martin-46024b138</span>
      <span className="blue">'&nbsp;</span>
    </span>
    <span className="white">{`}`}</span>
  </div>
)

export default Contact
