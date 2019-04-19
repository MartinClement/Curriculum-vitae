import React from 'react'
import { Typing } from 'react-typing'

import 'styles/Header/header.scss'

const Header = () => (
  <div className="header-wrapper">
    <img className="me" src={require('assets/images/logos/trigerred.jpg')} />
    <div className="header-title">
      <Typing delay={3000} keyDelay={100} className="header-typing">
        <span className="green">{`ClémentMartin`}</span>
        <span className="white">{`: '`}</span>
        <span className="blue">{`Fullstack web developer`}</span>
        <span className="white">{`'`}</span>
      </Typing>
    </div>
  </div>
)

export default Header
